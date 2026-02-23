import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {before, after, afterEach} from 'node:test';
import assert from 'node:assert/strict';
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} from '@firebase/rules-unit-testing';

const PROJECT_ID = 'gym-rules-test';
const TRAINER_UID = 'trainer_1';
const CLIENT_UID = 'client_1';
const OTHER_UID = 'other_1';

let testEnv;

function authedDb(uid, role) {
  const ctx = testEnv.authenticatedContext(uid, {role});
  return ctx.firestore();
}

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules: fs.readFileSync(path.resolve('firestore.rules'), 'utf8'),
    },
  });
});

afterEach(async () => {
  await testEnv.clearFirestore();
});

after(async () => {
  await testEnv.cleanup();
});

test('unauthenticated user cannot read users/{uid}', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await db.doc(`users/${CLIENT_UID}`).set({uid: CLIENT_UID, role: 'client'});
  });

  const unauthDb = testEnv.unauthenticatedContext().firestore();
  await assertFails(unauthDb.doc(`users/${CLIENT_UID}`).get());
});

test('owner can create own user profile document', async () => {
  const db = authedDb(CLIENT_UID, 'client');
  await assertSucceeds(
    db.doc(`users/${CLIENT_UID}`).set({
      uid: CLIENT_UID,
      role: 'client',
    }),
  );
});

test('owner cannot create user document for another uid', async () => {
  const db = authedDb(CLIENT_UID, 'client');
  await assertFails(
    db.doc(`users/${TRAINER_UID}`).set({
      uid: TRAINER_UID,
      role: 'admin',
    }),
  );
});

test('admin can read any user profile', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await db.doc(`users/${CLIENT_UID}`).set({uid: CLIENT_UID, role: 'client'});
  });

  const adminDb = authedDb(TRAINER_UID, 'admin');
  const snapshot = await assertSucceeds(adminDb.doc(`users/${CLIENT_UID}`).get());
  assert.equal(snapshot.exists, true);
});

test('client cannot create plans', async () => {
  const clientDb = authedDb(CLIENT_UID, 'client');
  await assertFails(
    clientDb.doc('plans/plan_1').set({
      trainerId: TRAINER_UID,
      clientId: CLIENT_UID,
      status: 'draft',
      createdAt: Date.now(),
    }),
  );
});

test('admin can create plans as coach', async () => {
  const adminDb = authedDb(TRAINER_UID, 'admin');
  await assertSucceeds(
    adminDb.doc('plans/plan_1').set({
      trainerId: TRAINER_UID,
      clientId: CLIENT_UID,
      status: 'active',
      createdAt: Date.now(),
    }),
  );
});

test('client can update only clientNotes and lastViewedAt on own plan', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await db.doc('plans/plan_1').set({
      trainerId: TRAINER_UID,
      clientId: CLIENT_UID,
      status: 'active',
      clientNotes: '',
      lastViewedAt: 0,
    });
  });

  const clientDb = authedDb(CLIENT_UID, 'client');
  await assertSucceeds(
    clientDb.doc('plans/plan_1').update({
      clientNotes: 'Session completed',
      lastViewedAt: Date.now(),
    }),
  );

  await assertFails(
    clientDb.doc('plans/plan_1').update({
      status: 'archived',
    }),
  );
});

test('unknown collections are denied by default', async () => {
  const db = authedDb(OTHER_UID, 'client');
  await assertFails(
    db.doc('unexpectedCollection/doc_1').set({
      foo: 'bar',
    }),
  );
});
