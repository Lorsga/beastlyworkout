import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {before, after, afterEach} from 'node:test';
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} from '@firebase/rules-unit-testing';

const PROJECT_ID = 'gym-rules-test';
const BUCKET = `gs://${PROJECT_ID}.appspot.com`;
const TRAINER_UID = 'trainer_1';
const CLIENT_UID = 'client_1';
const OTHER_UID = 'other_1';

let testEnv;

function storageFor(uid, role) {
  const ctx = testEnv.authenticatedContext(uid, {role});
  return ctx.storage(BUCKET);
}

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    storage: {
      rules: fs.readFileSync(path.resolve('storage.rules'), 'utf8'),
    },
  });
});

afterEach(async () => {
  await testEnv.clearStorage();
});

after(async () => {
  await testEnv.cleanup();
});

test('unauthenticated user can read profile image', async () => {
  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const storage = ctx.storage(BUCKET);
    await storage.ref(`profile-images/${CLIENT_UID}/avatar.jpg`).putString('img-data');
  });

  const unauthStorage = testEnv.unauthenticatedContext().storage(BUCKET);
  await assertSucceeds(unauthStorage.ref(`profile-images/${CLIENT_UID}/avatar.jpg`).getMetadata());
});

test('user can upload own profile image', async () => {
  const storage = storageFor(CLIENT_UID, 'client');
  await assertSucceeds(storage.ref(`profile-images/${CLIENT_UID}/avatar.jpg`).putString('img-data'));
});

test('user cannot upload profile image for another uid', async () => {
  const storage = storageFor(CLIENT_UID, 'client');
  await assertFails(storage.ref(`profile-images/${TRAINER_UID}/avatar.jpg`).putString('img-data'));
});

test('client can upload and read own workout media path', async () => {
  const storage = storageFor(CLIENT_UID, 'client');
  const filePath = `workout-media/${TRAINER_UID}/${CLIENT_UID}/set1.mp4`;

  await assertSucceeds(storage.ref(filePath).putString('small-video'));
  await assertSucceeds(storage.ref(filePath).getMetadata());
});

test('trainer/admin can delete workout media for owned trainer path', async () => {
  const filePath = `workout-media/${TRAINER_UID}/${CLIENT_UID}/set1.mp4`;

  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const storage = ctx.storage(BUCKET);
    await storage.ref(filePath).putString('small-video');
  });

  const coachStorage = storageFor(TRAINER_UID, 'admin');
  await assertSucceeds(coachStorage.ref(filePath).delete());
});

test('client cannot delete workout media', async () => {
  const filePath = `workout-media/${TRAINER_UID}/${CLIENT_UID}/set1.mp4`;

  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const storage = ctx.storage(BUCKET);
    await storage.ref(filePath).putString('small-video');
  });

  const clientStorage = storageFor(CLIENT_UID, 'client');
  await assertFails(clientStorage.ref(filePath).delete());
});

test('unrelated client cannot read workout media', async () => {
  const filePath = `workout-media/${TRAINER_UID}/${CLIENT_UID}/set1.mp4`;

  await testEnv.withSecurityRulesDisabled(async (ctx) => {
    const storage = ctx.storage(BUCKET);
    await storage.ref(filePath).putString('small-video');
  });

  const otherClientStorage = storageFor(OTHER_UID, 'client');
  await assertFails(otherClientStorage.ref(filePath).getMetadata());
});

test('upload above 15MB is denied for workout media', async () => {
  const storage = storageFor(CLIENT_UID, 'client');
  const tooLarge = 'a'.repeat((15 * 1024 * 1024) + 1);

  await assertFails(
    storage.ref(`workout-media/${TRAINER_UID}/${CLIENT_UID}/too-large.bin`).putString(tooLarge),
  );
});
