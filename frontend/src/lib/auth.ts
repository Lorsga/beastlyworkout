import {
  GoogleAuthProvider,
  getRedirectResult,
  onIdTokenChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  type User,
} from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';

import { auth, getCurrentUserRole, type AppRole } from './firebase';
import { createUserProfile, getUserProfile } from './collections';

export interface AuthState {
  initializing: boolean;
  user: User | null;
  role: AppRole | null;
  isAuthenticated: boolean;
}

export function useAuthState(): AuthState {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [role, setRole] = useState<AppRole | null>(null);

  useEffect(() => {
    return onIdTokenChanged(auth, async (nextUser) => {
      try {
        setUser(nextUser);
        if (!nextUser) {
          setRole(null);
          return;
        }

        await ensureUserProfile(nextUser);
        const nextRole = await getCurrentUserRole(nextUser);
        setRole(nextRole);
      } catch {
        setRole(null);
      } finally {
        setInitializing(false);
      }
    });
  }, []);

  return useMemo(
    () => ({
      initializing,
      user,
      role,
      isAuthenticated: Boolean(user),
    }),
    [initializing, user, role],
  );
}

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

async function ensureUserProfile(user: User) {
  const profile = await getUserProfile(user.uid);
  if (profile.exists()) return;
  await createUserProfile({
    email: user.email ?? '',
    displayName: user.displayName ?? '',
    role: 'client',
  });
}

export async function loginWithGoogle() {
  try {
    const credentials = await signInWithPopup(auth, googleProvider);
    await ensureUserProfile(credentials.user);
    return { redirected: false, user: credentials.user };
  } catch (error) {
    if (isRedirectFallbackError(error)) {
      await signInWithRedirect(auth, googleProvider);
      return { redirected: true, user: null };
    }
    throw error;
  }
}

export async function completeGoogleRedirect() {
  const result = await getRedirectResult(auth);
  if (result?.user) await ensureUserProfile(result.user);
  return result;
}

export async function logoutCurrentUser() {
  return signOut(auth);
}

function isRedirectFallbackError(error: unknown): boolean {
  if (!(typeof error === 'object' && error && 'code' in error)) return false;
  const code = String((error as { code: unknown }).code);
  return code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment';
}
