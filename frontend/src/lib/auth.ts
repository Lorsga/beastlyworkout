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

import { auth, getCurrentUserRole, isCurrentUserSupervisor, type AppRole } from './firebase';
import { createUserProfile, getUserProfile } from './collections';

export interface AuthState {
  initializing: boolean;
  user: User | null;
  role: AppRole | null;
  isSupervisor: boolean;
  isAuthenticated: boolean;
}

export function useAuthState(): AuthState {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [role, setRole] = useState<AppRole | null>(null);
  const [isSupervisor, setIsSupervisor] = useState(false);

  useEffect(() => {
    return onIdTokenChanged(auth, async (nextUser) => {
      try {
        setInitializing(true);
        setUser(nextUser);
        if (!nextUser) {
          setRole(null);
          setIsSupervisor(false);
          return;
        }

        await ensureUserProfile(nextUser);
        const nextRole = await getCurrentUserRole(nextUser);
        setRole(nextRole);
        setIsSupervisor(await isCurrentUserSupervisor(nextUser));
      } catch (error) {
        const code = typeof error === 'object' && error && 'code' in error ? String((error as { code: unknown }).code) : '';
        if (code.includes('user-token-expired')) {
          await signOut(auth);
          setUser(null);
        }
        setRole(null);
        setIsSupervisor(false);
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
      isSupervisor,
      isAuthenticated: Boolean(user),
    }),
    [initializing, user, role, isSupervisor],
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
      if (isRedirectLikelyBrokenEnvironment()) {
        const nextError = new Error('Google redirect non supportato in questo browser.') as Error & { code?: string };
        nextError.code = 'auth/redirect-unavailable';
        throw nextError;
      }
      await signInWithRedirect(auth, googleProvider);
      return { redirected: true, user: null };
    }
    throw error;
  }
}

export async function completeGoogleRedirect() {
  try {
    const result = await getRedirectResult(auth);
    if (result?.user) await ensureUserProfile(result.user);
    return result;
  } catch (error) {
    const code = typeof error === 'object' && error && 'code' in error ? String((error as { code: unknown }).code) : '';
    if (code.includes('user-token-expired')) {
      await signOut(auth);
      return null;
    }
    if (code.includes('missing-initial-state')) {
      // Stato redirect perso (tipico su iOS/PWA/in-app browser): evita loop errore.
      await signOut(auth).catch(() => undefined);
      return null;
    }
    throw error;
  }
}

export async function logoutCurrentUser() {
  return signOut(auth);
}

function isRedirectFallbackError(error: unknown): boolean {
  if (!(typeof error === 'object' && error && 'code' in error)) return false;
  const code = String((error as { code: unknown }).code);
  return code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment';
}

function isRedirectLikelyBrokenEnvironment(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!isIOS) return false;
  const nav = navigator as Navigator & { standalone?: boolean };
  const isStandalone = window.matchMedia?.('(display-mode: standalone)').matches || nav.standalone === true;
  const isInAppBrowser = /(FBAN|FBAV|Instagram|Line|Twitter|MicroMessenger|wv)/i.test(ua);
  return isStandalone || isInAppBrowser;
}
