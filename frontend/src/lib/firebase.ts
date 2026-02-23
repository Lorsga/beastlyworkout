import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signOut,
  type User,
} from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

export type AppRole = 'admin' | 'trainer' | 'client';

const firebaseConfig = {
  apiKey: 'AIzaSyBMwuPSGuAL3BC4KbmKv7BXwumOvQH4q_U',
  authDomain: 'beastlyworkout-e05ac.firebaseapp.com',
  projectId: 'beastlyworkout-e05ac',
  storageBucket: 'beastlyworkout-e05ac.firebasestorage.app',
  messagingSenderId: '450850141428',
  appId: '1:450850141428:web:3cdba0ebf48acfa9f51aa1',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'us-central1');

void setPersistence(auth, browserLocalPersistence);

const bootstrapFirstAdminFn = httpsCallable<undefined, { ok: boolean; alreadyAdmin?: boolean; uid: string; role: 'admin' }>(
  functions,
  'bootstrapFirstAdmin',
);

const setUserRoleFn = httpsCallable<{ uid: string; role: AppRole }, { ok: boolean; uid: string; role: AppRole }>(
  functions,
  'setUserRole',
);

export async function bootstrapFirstAdmin() {
  const result = await bootstrapFirstAdminFn();
  await refreshIdTokenClaims();
  return result.data;
}

export async function setUserRole(uid: string, role: AppRole) {
  const result = await setUserRoleFn({ uid, role });
  return result.data;
}

export async function refreshIdTokenClaims() {
  if (!auth.currentUser) return null;
  return auth.currentUser.getIdTokenResult(true);
}

export async function getCurrentUserRole(user?: User | null): Promise<AppRole | null> {
  const current = user ?? auth.currentUser;
  if (!current) return null;

  try {
    const tokenResult = await current.getIdTokenResult();
    const role = tokenResult.claims.role;
    return role === 'admin' || role === 'trainer' || role === 'client' ? role : null;
  } catch (error) {
    const code = typeof error === 'object' && error && 'code' in error ? String((error as { code: unknown }).code) : '';
    if (code.includes('user-token-expired')) {
      try {
        await current.getIdToken(true);
        const refreshedToken = await current.getIdTokenResult();
        const refreshedRole = refreshedToken.claims.role;
        return refreshedRole === 'admin' || refreshedRole === 'trainer' || refreshedRole === 'client' ? refreshedRole : null;
      } catch {
        await signOut(auth);
        return null;
      }
    }
    throw error;
  }
}

export function newWriteTimestamps() {
  return {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
}

export function updateTimestamp() {
  return {
    updatedAt: serverTimestamp(),
  };
}
