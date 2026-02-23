import * as admin from 'firebase-admin';
import {onCall, HttpsError} from 'firebase-functions/v2/https';
import {onDocumentCreated} from 'firebase-functions/v2/firestore';

admin.initializeApp();

const db = admin.firestore();
const allowedOrigins = [
  'https://beastlyworkout-lorsga.netlify.app',
  /^https:\/\/.*--beastlyworkout-lorsga\.netlify\.app$/,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];
const adminEmails = new Set(
  (process.env.ADMIN_EMAILS ?? 'lrnz.sga@gmail.com')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
);

type AppRole = 'admin' | 'trainer' | 'client';

function assertRole(value: unknown): asserts value is AppRole {
  if (value !== 'admin' && value !== 'trainer' && value !== 'client') {
    throw new HttpsError('invalid-argument', 'role must be one of: admin, trainer, client');
  }
}

function isAllowedAdminEmail(email: unknown): boolean {
  if (typeof email !== 'string') return false;
  return adminEmails.has(email.trim().toLowerCase());
}

export const createUserProfile = onDocumentCreated('users/{uid}', async (event) => {
  const snapshot = event.data;
  if (!snapshot) return;

  const uid = event.params.uid;
  const data = snapshot.data();

  if (!data.createdAt) {
    await snapshot.ref.set(
      {
        uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );
  }
});

export const setUserRole = onCall({region: 'us-central1', cors: allowedOrigins, invoker: 'public'}, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const callerUid = request.auth.uid;
  const callerRole = request.auth.token.role;
  const payload = request.data as {uid?: string; role?: AppRole};

  if (callerRole !== 'admin') {
    throw new HttpsError('permission-denied', 'Only admins can assign roles.');
  }

  if (!payload.uid || typeof payload.uid !== 'string') {
    throw new HttpsError('invalid-argument', 'uid is required.');
  }

  assertRole(payload.role);

  await admin.auth().setCustomUserClaims(payload.uid, {role: payload.role});
  await admin.auth().revokeRefreshTokens(payload.uid);

  await db.collection('users').doc(payload.uid).set(
    {
      role: payload.role,
      roleAssignedBy: callerUid,
      roleAssignedAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    {merge: true},
  );

  return {ok: true, uid: payload.uid, role: payload.role};
});

export const bootstrapFirstAdmin = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const uid = request.auth.uid;
  const currentClaims = request.auth.token;
  const email = request.auth.token.email;
  if (!isAllowedAdminEmail(email)) {
    throw new HttpsError('permission-denied', 'Account is not allowed to become admin.');
  }

  if (currentClaims.role === 'admin') {
    return {ok: true, alreadyAdmin: true};
  }

  await admin.auth().setCustomUserClaims(uid, {role: 'admin'});
  await admin.auth().revokeRefreshTokens(uid);

  await db.collection('users').doc(uid).set(
    {
      uid,
      role: 'admin',
      roleAssignedBy: uid,
      roleAssignedAt: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    {merge: true},
  );

  return {ok: true, uid, role: 'admin'};
  },
);
