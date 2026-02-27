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
export type CoachAccessStatus = 'trial_pending' | 'trial_active' | 'active_paid' | 'expired' | 'disabled';

export interface CoachAccessState {
  ok: boolean;
  coachCode?: string;
  isSupervisor?: boolean;
  status: CoachAccessStatus | 'supervisor_active';
  requiresTrialAcceptance: boolean;
  isExpired: boolean;
  trialEndsAt?: string | null;
  subscriptionEndsAt?: string | null;
  expiresAt?: string | null;
}

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
const ensureCoachAccessFn = httpsCallable<undefined, CoachAccessState>(functions, 'ensureCoachAccess');
const acceptCoachTrialFn = httpsCallable<undefined, CoachAccessState>(functions, 'acceptCoachTrial');
const getCoachAccessStateFn = httpsCallable<undefined, CoachAccessState>(functions, 'getCoachAccessState');
const completeClientOnboardingFn = httpsCallable<
  { fullName: string; email: string; phone: string; coachCode: string },
  { ok: boolean; coachId: string; coachCode: string }
>(functions, 'completeClientOnboarding');
const listCoachesForSupervisorFn = httpsCallable<
  undefined,
  {
    ok: boolean;
    coaches: Array<{
      uid: string;
      displayName: string;
      email: string;
      coachCode: string;
      isSupervisor: boolean;
      status: CoachAccessStatus | 'supervisor_active';
      trialEndsAt: string | null;
      subscriptionEndsAt: string | null;
      expiresAt: string | null;
    }>;
  }
>(functions, 'listCoachesForSupervisor');
const activateCoachSubscriptionFn = httpsCallable<{ uid: string }, { ok: boolean; uid: string; status: CoachAccessStatus; subscriptionEndsAt?: string | null; mode?: 'unblocked' | 'activated' }>(
  functions,
  'activateCoachSubscription',
);
const renewCoachSubscriptionFn = httpsCallable<{ uid: string }, { ok: boolean; uid: string; status: CoachAccessStatus; subscriptionEndsAt?: string; mode?: 'renewed' }>(
  functions,
  'renewCoachSubscription',
);
const disableCoachSubscriptionFn = httpsCallable<{ uid: string }, { ok: boolean; uid: string; status: CoachAccessStatus }>(
  functions,
  'disableCoachSubscription',
);
const deleteMyProfileFn = httpsCallable<undefined, { ok: boolean }>(functions, 'deleteMyProfile');
const updateMyCoachPhoneFn = httpsCallable<{ phone: string }, { ok: boolean; phone: string }>(functions, 'updateMyCoachPhone');
const getMyAssignedPlansFn = httpsCallable<
  undefined,
  {
    ok: boolean;
    plans: Array<{
      id: string;
      trainerId: string;
      clientId: string;
      title: string;
      status: string;
      kind: 'series_reps' | 'circuit';
      notes: string;
      assignedClientIds: string[];
      exercises: unknown[];
      createdAt: string | null;
      updatedAt: string | null;
    }>;
  }
>(functions, 'getMyAssignedPlans');
const updateMyPlanExerciseWeightFn = httpsCallable<
  { planId: string; exerciseIndex: number; weightKg: number },
  { ok: boolean }
>(functions, 'updateMyPlanExerciseWeight');
const syncMyPlanWeightOverridesFn = httpsCallable<
  undefined,
  { ok: boolean; synced: number }
>(functions, 'syncMyPlanWeightOverrides');

export async function bootstrapFirstAdmin() {
  const result = await bootstrapFirstAdminFn();
  await refreshIdTokenClaims();
  return result.data;
}

export async function setUserRole(uid: string, role: AppRole) {
  const result = await setUserRoleFn({ uid, role });
  return result.data;
}

export async function ensureCoachAccess() {
  const result = await ensureCoachAccessFn();
  return result.data;
}

export async function acceptCoachTrial() {
  const result = await acceptCoachTrialFn();
  return result.data;
}

export async function getCoachAccessState() {
  const result = await getCoachAccessStateFn();
  return result.data;
}

export async function completeClientOnboarding(payload: { fullName: string; email: string; phone: string; coachCode: string }) {
  const result = await completeClientOnboardingFn(payload);
  return result.data;
}

export async function listCoachesForSupervisor() {
  const result = await listCoachesForSupervisorFn();
  return result.data;
}

export async function activateCoachSubscription(uid: string) {
  const result = await activateCoachSubscriptionFn({ uid });
  return result.data;
}

export async function renewCoachSubscription(uid: string) {
  const result = await renewCoachSubscriptionFn({ uid });
  return result.data;
}

export async function disableCoachSubscription(uid: string) {
  const result = await disableCoachSubscriptionFn({ uid });
  return result.data;
}

export async function deleteMyProfile() {
  const result = await deleteMyProfileFn();
  return result.data;
}

export async function updateMyCoachPhone(phone: string) {
  const result = await updateMyCoachPhoneFn({ phone });
  return result.data;
}

export async function getMyAssignedPlans() {
  const result = await getMyAssignedPlansFn();
  return result.data;
}

export async function updateMyPlanExerciseWeight(planId: string, exerciseIndex: number, weightKg: number) {
  const result = await updateMyPlanExerciseWeightFn({ planId, exerciseIndex, weightKg });
  return result.data;
}

export async function syncMyPlanWeightOverrides() {
  const result = await syncMyPlanWeightOverridesFn();
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

export async function isCurrentUserSupervisor(user?: User | null): Promise<boolean> {
  const current = user ?? auth.currentUser;
  if (!current) return false;
  const token = await current.getIdTokenResult();
  return token.claims.supervisor === true;
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
