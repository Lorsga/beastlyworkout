import * as admin from 'firebase-admin';
import {onCall, HttpsError} from 'firebase-functions/v2/https';
import {onDocumentCreated, onDocumentDeleted, onDocumentWritten} from 'firebase-functions/v2/firestore';
import {onSchedule} from 'firebase-functions/v2/scheduler';

admin.initializeApp();

const db = admin.firestore();
const allowedOrigins = [
  'https://beastlyworkout-lorsga.netlify.app',
  /^https:\/\/.*--beastlyworkout-lorsga\.netlify\.app$/,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];
const supervisorEmails = new Set(
  (process.env.SUPERVISOR_EMAILS ?? 'lrnz.sga@gmail.com,beastlyworkoutideas@gmail.com')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
);

type AppRole = 'admin' | 'trainer' | 'client';
type CoachSubscriptionStatus = 'trial_pending' | 'trial_active' | 'active_paid' | 'expired' | 'disabled';

interface CoachSubscriptionDoc {
  coachId: string;
  coachEmail: string;
  coachName: string;
  coachCode: string;
  isSupervisor: boolean;
  status: CoachSubscriptionStatus;
  trialDays: number;
  trialAcceptedAt?: admin.firestore.Timestamp | null;
  trialStartedAt?: admin.firestore.Timestamp | null;
  trialEndsAt?: admin.firestore.Timestamp | null;
  subscriptionStartedAt?: admin.firestore.Timestamp | null;
  subscriptionEndsAt?: admin.firestore.Timestamp | null;
  renewalPeriod: 'yearly';
  accessBlocked?: boolean;
  expiresAt?: admin.firestore.Timestamp | null;
  updatedBySupervisor?: string | null;
  createdAt?: admin.firestore.Timestamp | null;
  updatedAt?: admin.firestore.Timestamp | null;
}

function assertRole(value: unknown): asserts value is AppRole {
  if (value !== 'admin' && value !== 'trainer' && value !== 'client') {
    throw new HttpsError('invalid-argument', 'role must be one of: admin, trainer, client');
  }
}

function normalizeEmail(email: unknown): string {
  if (typeof email !== 'string') return '';
  return email.trim().toLowerCase();
}

function isSupervisorEmail(email: unknown): boolean {
  const normalized = normalizeEmail(email);
  return Boolean(normalized) && supervisorEmails.has(normalized);
}

function isSupervisorClaim(token: Record<string, unknown> | undefined): boolean {
  return token?.supervisor === true;
}

function hasSupervisorAccess(token: Record<string, unknown> | undefined): boolean {
  const role = token?.role;
  return isSupervisorClaim(token) || role === 'admin';
}

function normalizeCoachCodeInput(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function coachCodeBaseFromEmail(email: string): string {
  const localPart = email.split('@')[0] ?? '';
  const normalized = normalizeCoachCodeInput(localPart);
  return normalized || 'coach';
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

function toMillis(value: unknown): number {
  if (value instanceof admin.firestore.Timestamp) return value.toMillis();
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  return 0;
}

function parseAssignmentDetails(
  value: unknown,
): Record<string, {mode?: unknown; startsAt?: unknown; expiresAt?: unknown; weeks?: unknown}> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return value as Record<string, {mode?: unknown; startsAt?: unknown; expiresAt?: unknown; weeks?: unknown}>;
}

function parseClientWeightOverrides(value: unknown): Record<string, Record<string, number>> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  const byClient = value as Record<string, unknown>;
  const output: Record<string, Record<string, number>> = {};
  for (const [clientId, clientValue] of Object.entries(byClient)) {
    if (!clientValue || typeof clientValue !== 'object' || Array.isArray(clientValue)) continue;
    const rawMap = clientValue as Record<string, unknown>;
    const cleanMap: Record<string, number> = {};
    for (const [exerciseIndex, weightValue] of Object.entries(rawMap)) {
      const numeric = typeof weightValue === 'number' ? weightValue : Number(weightValue);
      if (Number.isFinite(numeric) && numeric >= 0) {
        cleanMap[exerciseIndex] = numeric;
      }
    }
    output[clientId] = cleanMap;
  }
  return output;
}

function parseClientWeightOverridesFromPlanData(planData: Record<string, unknown>): Record<string, Record<string, number>> {
  const nested = parseClientWeightOverrides(planData.clientWeightOverrides);
  const output: Record<string, Record<string, number>> = {...nested};
  for (const [key, rawValue] of Object.entries(planData)) {
    if (!key.startsWith('clientWeightOverrides.')) continue;
    const [, clientId, exerciseIndex] = key.split('.');
    if (!clientId || exerciseIndex == null) continue;
    if (output[clientId]?.[exerciseIndex] !== undefined) continue;
    const weight = typeof rawValue === 'number' ? rawValue : Number(rawValue);
    if (!Number.isFinite(weight) || weight < 0) continue;
    output[clientId] = output[clientId] ?? {};
    output[clientId][exerciseIndex] = weight;
  }
  return output;
}

async function getOrCreateCoachCode(uid: string, email: string, currentCoachCode: unknown): Promise<string> {
  const existing = typeof currentCoachCode === 'string' ? normalizeCoachCodeInput(currentCoachCode) : '';
  const legacySuffix = 'beastly';
  if (existing && !existing.endsWith(legacySuffix)) return existing;

  const base = coachCodeBaseFromEmail(email);
  let candidate = base;
  let suffix = 1;
  while (true) {
    const collision = await db
      .collection('users')
      .where('coachCode', '==', candidate)
      .limit(1)
      .get();

    if (collision.empty || collision.docs[0]?.id === uid) {
      return candidate;
    }

    suffix += 1;
    candidate = `${base}${suffix}`;
  }
}

async function applyUserClaims(uid: string, role: AppRole, supervisor: boolean): Promise<void> {
  const userRecord = await admin.auth().getUser(uid);
  const currentClaims = userRecord.customClaims ?? {};
  const nextClaims = {...currentClaims, role, supervisor};
  await admin.auth().setCustomUserClaims(uid, nextClaims);
}

function resolveCoachSubscriptionStatus(data: CoachSubscriptionDoc, nowMillis: number): CoachSubscriptionStatus {
  const isBlocked = data.accessBlocked === true || data.status === 'disabled';
  if (isBlocked) return 'disabled';
  if (data.isSupervisor) return 'active_paid';
  if (data.status === 'active_paid') {
    const subscriptionEnds = toMillis(data.subscriptionEndsAt);
    return subscriptionEnds > nowMillis ? 'active_paid' : 'expired';
  }
  if (data.status === 'trial_active') {
    const trialEnds = toMillis(data.trialEndsAt);
    return trialEnds > nowMillis ? 'trial_active' : 'expired';
  }
  if (data.status === 'trial_pending') return 'trial_pending';
  return 'expired';
}

function buildCoachAccessResponse(data: CoachSubscriptionDoc, nowMillis: number) {
  const resolvedStatus = resolveCoachSubscriptionStatus(data, nowMillis);
  return {
    ok: true,
    coachCode: data.coachCode,
    isSupervisor: data.isSupervisor,
    status: resolvedStatus,
    requiresTrialAcceptance: resolvedStatus === 'trial_pending' && !data.isSupervisor,
    isExpired: resolvedStatus === 'expired' || resolvedStatus === 'disabled',
    trialEndsAt: data.trialEndsAt?.toDate().toISOString() ?? null,
    subscriptionEndsAt: data.subscriptionEndsAt?.toDate().toISOString() ?? null,
    expiresAt: data.expiresAt?.toDate().toISOString() ?? null,
  };
}

async function upsertCoachSubscription(uid: string, email: string, displayName: string): Promise<CoachSubscriptionDoc> {
  const isSupervisor = isSupervisorEmail(email);
  const userRef = db.collection('users').doc(uid);
  const userSnap = await userRef.get();
  const userData = userSnap.data() ?? {};
  const coachCode = await getOrCreateCoachCode(uid, email, userData.coachCode);
  const now = admin.firestore.Timestamp.now();
  const nowDate = now.toDate();

  await applyUserClaims(uid, 'trainer', isSupervisor);

  await userRef.set(
    {
      uid,
      email,
      displayName: displayName || userData.displayName || '',
      role: 'trainer',
      supervisor: isSupervisor,
      coachCode,
      coachAccessRequestedAt: now,
      updatedAt: now,
      createdAt: userData.createdAt ?? now,
    },
    {merge: true},
  );

  const subRef = db.collection('coachSubscriptions').doc(uid);
  const subSnap = await subRef.get();

  if (isSupervisor) {
    const payload: CoachSubscriptionDoc = {
      coachId: uid,
      coachEmail: email,
      coachName: displayName || '',
      coachCode,
      isSupervisor: true,
      status: 'active_paid',
      trialDays: 15,
      renewalPeriod: 'yearly',
      accessBlocked: false,
      expiresAt: null,
      updatedBySupervisor: uid,
      updatedAt: now,
      createdAt: subSnap.exists ? (subSnap.data()?.createdAt ?? now) : now,
    };
    await subRef.set(payload, {merge: true});
    return payload;
  }

  const current = (subSnap.data() as CoachSubscriptionDoc | undefined) ?? null;
  if (!current) {
    const payload: CoachSubscriptionDoc = {
      coachId: uid,
      coachEmail: email,
      coachName: displayName || '',
      coachCode,
      isSupervisor: false,
      status: 'trial_pending',
      trialDays: 15,
      trialAcceptedAt: null,
      trialStartedAt: null,
      trialEndsAt: null,
      subscriptionStartedAt: null,
      subscriptionEndsAt: null,
      renewalPeriod: 'yearly',
      accessBlocked: false,
      expiresAt: null,
      updatedBySupervisor: null,
      createdAt: now,
      updatedAt: now,
    };
    await subRef.set(payload, {merge: true});
    return payload;
  }

  const resolvedStatus = resolveCoachSubscriptionStatus(current, nowDate.getTime());
  const nextStatus: CoachSubscriptionStatus = resolvedStatus;
  const payload: Partial<CoachSubscriptionDoc> = {
    coachEmail: email,
    coachName: displayName || current.coachName || '',
    coachCode,
    isSupervisor: false,
    status: nextStatus,
    renewalPeriod: 'yearly',
    accessBlocked: current.accessBlocked === true ? false : current.accessBlocked ?? false,
    updatedAt: now,
  };

  if (nextStatus === 'expired') {
    const expiresMillis = Math.max(toMillis(current.subscriptionEndsAt), toMillis(current.trialEndsAt));
    payload.expiresAt = expiresMillis > 0 ? admin.firestore.Timestamp.fromMillis(expiresMillis) : now;
  }

  await subRef.set(payload, {merge: true});

  return {
    ...current,
    ...payload,
  } as CoachSubscriptionDoc;
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

export const syncAdminRoleByEmail = onDocumentWritten('users/{uid}', async (event) => {
  const after = event.data?.after;
  if (!after?.exists) return;

  const uid = event.params.uid;
  const data = after.data();
  if (!data) return;

  const email = normalizeEmail(data.email);
  const supervisor = isSupervisorEmail(email);
  const currentRole = typeof data.role === 'string' ? data.role : '';

  const updates: Record<string, unknown> = {};

  if (supervisor) {
    if (currentRole !== 'trainer' && currentRole !== 'admin') updates.role = 'trainer';
    if (data.supervisor !== true) updates.supervisor = true;
    await applyUserClaims(uid, 'trainer', true);
  } else if (currentRole === 'client' || data.onboardingCompleted === true || data.requestedRole === 'client') {
    if (currentRole !== 'client') updates.role = 'client';
    if (data.supervisor) updates.supervisor = false;
    await applyUserClaims(uid, 'client', false);
  }

  if (Object.keys(updates).length > 0) {
    updates.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    await after.ref.set(updates, {merge: true});
  }
});

export const cleanupPlanMediaOnDelete = onDocumentDeleted('plans/{planId}', async (event) => {
  const snapshot = event.data;
  if (!snapshot?.exists) return;

  const data = snapshot.data() as {trainerId?: unknown; clientId?: unknown};
  const trainerId = typeof data.trainerId === 'string' ? data.trainerId : '';
  const clientId = typeof data.clientId === 'string' ? data.clientId : '';
  if (!trainerId || !clientId) return;

  const prefix = `workout-media/${trainerId}/${clientId}/`;
  await admin.storage().bucket().deleteFiles({prefix, force: true});
});

export const ensureCoachAccess = onCall({region: 'us-central1', cors: allowedOrigins, invoker: 'public'}, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const uid = request.auth.uid;
  const email = normalizeEmail(request.auth.token.email);
  if (!email) {
    throw new HttpsError('invalid-argument', 'Email account required for coach access.');
  }

  const displayName = typeof request.auth.token.name === 'string' ? request.auth.token.name : '';
  const subscription = await upsertCoachSubscription(uid, email, displayName);
  const nowMillis = Date.now();

  return buildCoachAccessResponse(subscription, nowMillis);
});

export const acceptCoachTrial = onCall({region: 'us-central1', cors: allowedOrigins, invoker: 'public'}, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const uid = request.auth.uid;
  const email = normalizeEmail(request.auth.token.email);
  if (isSupervisorEmail(email)) {
    const userSnap = await db.collection('users').doc(uid).get();
    const coachCode = typeof userSnap.data()?.coachCode === 'string' ? userSnap.data()?.coachCode : '';
    return {
      ok: true,
      coachCode,
      isSupervisor: true,
      status: 'active_paid',
      requiresTrialAcceptance: false,
      isExpired: false,
    };
  }

  const subRef = db.collection('coachSubscriptions').doc(uid);
  const subSnap = await subRef.get();
  if (!subSnap.exists) {
    throw new HttpsError('not-found', 'Coach subscription not found. Retry coach login.');
  }

  const current = subSnap.data() as CoachSubscriptionDoc;
  if (current.status !== 'trial_pending' && current.status !== 'trial_active') {
    const nowMillis = Date.now();
    return buildCoachAccessResponse(current, nowMillis);
  }

  const now = new Date();
  const trialEndsAt = addDays(now, 15);
  const payload: Partial<CoachSubscriptionDoc> = {
    status: 'trial_active',
    trialAcceptedAt: admin.firestore.Timestamp.fromDate(now),
    trialStartedAt: admin.firestore.Timestamp.fromDate(now),
    trialEndsAt: admin.firestore.Timestamp.fromDate(trialEndsAt),
    expiresAt: admin.firestore.Timestamp.fromDate(trialEndsAt),
    updatedAt: admin.firestore.Timestamp.fromDate(now),
  };

  await subRef.set(payload, {merge: true});
  const merged = {...current, ...payload} as CoachSubscriptionDoc;
  return buildCoachAccessResponse(merged, now.getTime());
});

export const getCoachAccessState = onCall({region: 'us-central1', cors: allowedOrigins, invoker: 'public'}, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const uid = request.auth.uid;
  const email = normalizeEmail(request.auth.token.email);
  if (isSupervisorEmail(email)) {
    const userSnap = await db.collection('users').doc(uid).get();
    const coachCode = typeof userSnap.data()?.coachCode === 'string' ? userSnap.data()?.coachCode : '';
    return {
      ok: true,
      coachCode,
      isSupervisor: true,
      status: 'active_paid',
      requiresTrialAcceptance: false,
      isExpired: false,
    };
  }

  const subSnap = await db.collection('coachSubscriptions').doc(uid).get();
  if (!subSnap.exists) {
    return {
      ok: true,
      isSupervisor: false,
      status: 'trial_pending',
      requiresTrialAcceptance: true,
      isExpired: false,
    };
  }

  const data = subSnap.data() as CoachSubscriptionDoc;
  return buildCoachAccessResponse(data, Date.now());
});

export const completeClientOnboarding = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const payload = request.data as {
      fullName?: string;
      email?: string;
      phone?: string;
      coachCode?: string;
    };

    const fullName = typeof payload.fullName === 'string' ? payload.fullName.trim() : '';
    const email = normalizeEmail(payload.email);
    const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
    const coachCode = typeof payload.coachCode === 'string' ? normalizeCoachCodeInput(payload.coachCode) : '';

    if (!fullName || !email || !phone || !coachCode) {
      throw new HttpsError('invalid-argument', 'fullName, email, phone and coachCode are required.');
    }

    const coachQuery = await db.collection('users').where('coachCode', '==', coachCode).limit(1).get();
    if (coachQuery.empty) {
      throw new HttpsError('not-found', 'Coach code not valid.');
    }

    const coachDoc = coachQuery.docs[0];
    const coachData = coachDoc.data();
    const coachUid = coachDoc.id;
    const coachRole = typeof coachData.role === 'string' ? coachData.role : '';
    const coachEmail = normalizeEmail(coachData.email);
    const coachPhone = typeof coachData.phone === 'string' ? coachData.phone.trim() : '';
    const coachName = typeof coachData.displayName === 'string' ? coachData.displayName.trim() : '';
    if (coachRole !== 'trainer' && coachRole !== 'admin') {
      throw new HttpsError('failed-precondition', 'Coach not active.');
    }

    await applyUserClaims(uid, 'client', false);

    const userRef = db.collection('users').doc(uid);
    await userRef.set(
      {
        uid,
        role: 'client',
        supervisor: false,
        requestedRole: 'client',
        displayName: fullName,
        email,
        onboardingStatus: 'completed',
        onboardingCompleted: true,
        onboardingUpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
        assignedCoachId: coachUid,
        assignedCoachCode: coachCode,
        assignedCoachEmail: coachEmail,
        assignedCoachPhone: coachPhone,
        assignedCoachName: coachName,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );

    await db.collection('users').doc(uid).collection('private').doc('onboarding').set(
      {
        fullName,
        email,
        phone,
        coachCode,
        coachId: coachUid,
        coachPhone,
        coachName,
        compiledBy: 'client',
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );

    await db.collection('trainerClients').doc(`${coachUid}_${uid}`).set(
      {
        trainerId: coachUid,
        clientId: uid,
        source: 'coach_code',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );

    return {ok: true, coachId: coachUid, coachCode};
  },
);

export const getMyAssignedPlans = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const [assignedSnap, legacySnap] = await Promise.all([
      db.collection('plans').where('assignedClientIds', 'array-contains', uid).get(),
      db.collection('plans').where('clientId', '==', uid).get(),
    ]);

    const merged = new Map<string, FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>>();
    assignedSnap.docs.forEach((docSnap) => merged.set(docSnap.id, docSnap));
    legacySnap.docs.forEach((docSnap) => merged.set(docSnap.id, docSnap));

    const now = Date.now();
    const plans: Array<Record<string, unknown>> = [];
    for (const [id, docSnap] of merged.entries()) {
      const data = docSnap.data();
      const assignedClientIds = Array.isArray(data.assignedClientIds)
        ? data.assignedClientIds.filter((item: unknown): item is string => typeof item === 'string')
        : [];
      const assignmentDetails = parseAssignmentDetails(data.assignmentDetails);
      const clientAssignment = assignmentDetails[uid];
      const assignmentMode = typeof clientAssignment?.mode === 'string' ? clientAssignment.mode : 'permanent';
      const assignmentStartsAt = toMillis(clientAssignment?.startsAt);
      const assignmentExpiresAt = toMillis(clientAssignment?.expiresAt);
      const assignmentNotStarted = assignmentMode === 'timed' && assignmentStartsAt > now;
      const assignmentExpired = assignmentMode === 'timed' && assignmentExpiresAt > 0 && assignmentExpiresAt <= now;

      if (assignmentExpired) {
        await docSnap.ref.set(
          {
            assignedClientIds: admin.firestore.FieldValue.arrayRemove(uid),
            [`assignmentDetails.${uid}`]: admin.firestore.FieldValue.delete(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          },
          {merge: true},
        );
        continue;
      }

      const isLegacyClientPlan = typeof data.clientId === 'string' && data.clientId === uid;
      const isAssigned = assignedClientIds.includes(uid) || isLegacyClientPlan;
      if (!isAssigned) continue;
      if (assignmentNotStarted) continue;
      const baseExercises = Array.isArray(data.exercises) ? data.exercises : [];
      const clientOverridesByUser = parseClientWeightOverridesFromPlanData(data);
      const clientOverrides = clientOverridesByUser[uid] ?? {};
      const exercises = baseExercises.map((exercise, index) => {
        if (!exercise || typeof exercise !== 'object' || Array.isArray(exercise)) return exercise;
        const override = clientOverrides[String(index)];
        if (!Number.isFinite(override)) return exercise;
        return {
          ...exercise,
          weightKg: override,
        };
      });

      plans.push({
        id,
        trainerId: typeof data.trainerId === 'string' ? data.trainerId : '',
        clientId: typeof data.clientId === 'string' ? data.clientId : '',
        title: typeof data.title === 'string' ? data.title : '',
        status: typeof data.status === 'string' ? data.status : 'active',
        kind: data.kind === 'circuit' ? 'circuit' : 'series_reps',
        notes: typeof data.notes === 'string' ? data.notes : '',
        assignedClientIds,
        exercises,
        createdAt: data.createdAt instanceof admin.firestore.Timestamp ? data.createdAt.toDate().toISOString() : null,
        updatedAt: data.updatedAt instanceof admin.firestore.Timestamp ? data.updatedAt.toDate().toISOString() : null,
      });
    }

    return {ok: true, plans};
  },
);

export const updateMyPlanExerciseWeight = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const payload = request.data as {planId?: unknown; exerciseIndex?: unknown; weightKg?: unknown};
    const planId = typeof payload.planId === 'string' ? payload.planId.trim() : '';
    const exerciseIndex = typeof payload.exerciseIndex === 'number' ? payload.exerciseIndex : Number(payload.exerciseIndex);
    const weightKg = typeof payload.weightKg === 'number' ? payload.weightKg : Number(payload.weightKg);

    if (!planId) {
      throw new HttpsError('invalid-argument', 'planId is required.');
    }
    if (!Number.isInteger(exerciseIndex) || exerciseIndex < 0) {
      throw new HttpsError('invalid-argument', 'exerciseIndex must be a non-negative integer.');
    }
    if (!Number.isFinite(weightKg) || weightKg < 0) {
      throw new HttpsError('invalid-argument', 'weightKg must be a non-negative number.');
    }

    const planRef = db.collection('plans').doc(planId);
    const planSnap = await planRef.get();
    if (!planSnap.exists) {
      throw new HttpsError('not-found', 'Plan not found.');
    }
    const data = planSnap.data() ?? {};
    const exercises = Array.isArray(data.exercises) ? data.exercises : [];
    if (exerciseIndex >= exercises.length) {
      throw new HttpsError('invalid-argument', 'exerciseIndex out of bounds.');
    }

    const assignedClientIds = Array.isArray(data.assignedClientIds)
      ? data.assignedClientIds.filter((item: unknown): item is string => typeof item === 'string')
      : [];
    const assignmentDetails = parseAssignmentDetails(data.assignmentDetails);
    const clientAssignment = assignmentDetails[uid];
    const assignmentMode = typeof clientAssignment?.mode === 'string' ? clientAssignment.mode : 'permanent';
    const assignmentStartsAt = toMillis(clientAssignment?.startsAt);
    const assignmentExpiresAt = toMillis(clientAssignment?.expiresAt);
    const assignmentNotStarted = assignmentMode === 'timed' && assignmentStartsAt > Date.now();
    const assignmentExpired = assignmentMode === 'timed' && assignmentExpiresAt > 0 && assignmentExpiresAt <= Date.now();
    const isLegacyClientPlan = typeof data.clientId === 'string' && data.clientId === uid;
    const isAssigned = assignedClientIds.includes(uid) || isLegacyClientPlan;

    if (!isAssigned || assignmentNotStarted || assignmentExpired) {
      throw new HttpsError('permission-denied', 'Plan not currently assigned to this client.');
    }

    const legacyFieldPath = new admin.firestore.FieldPath(`clientWeightOverrides.${uid}.${exerciseIndex}`);
    const privateWeightsRef = db.collection('users').doc(uid).collection('private').doc('planWeights');
    await Promise.all([
      planRef.update(
        `clientWeightOverrides.${uid}.${exerciseIndex}`,
        weightKg,
        legacyFieldPath,
        admin.firestore.FieldValue.delete(),
        'updatedAt',
        admin.firestore.FieldValue.serverTimestamp(),
      ),
      privateWeightsRef.set(
        {
          weights: {
            [planId]: {
              [String(exerciseIndex)]: weightKg,
            },
          },
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        {merge: true},
      ),
    ]);

    return {ok: true};
  },
);

export const syncMyPlanWeightOverrides = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const privateSnap = await db.collection('users').doc(uid).collection('private').doc('planWeights').get();
    const privateData = privateSnap.data() ?? {};
    const rawWeights = privateData.weights;
    if (!rawWeights || typeof rawWeights !== 'object' || Array.isArray(rawWeights)) {
      return {ok: true, synced: 0};
    }

    const weightsByPlan = rawWeights as Record<string, unknown>;
    let synced = 0;
    const writeJobs: Array<Promise<unknown>> = [];

    for (const [planId, rawExerciseMap] of Object.entries(weightsByPlan)) {
      if (!planId || !rawExerciseMap || typeof rawExerciseMap !== 'object' || Array.isArray(rawExerciseMap)) continue;
      const planRef = db.collection('plans').doc(planId);
      const planSnap = await planRef.get();
      if (!planSnap.exists) continue;

      const planData = planSnap.data() ?? {};
      const exercises = Array.isArray(planData.exercises) ? planData.exercises : [];
      const assignedClientIds = Array.isArray(planData.assignedClientIds)
        ? planData.assignedClientIds.filter((item: unknown): item is string => typeof item === 'string')
        : [];
      const assignmentDetails = parseAssignmentDetails(planData.assignmentDetails);
      const clientAssignment = assignmentDetails[uid];
      const assignmentMode = typeof clientAssignment?.mode === 'string' ? clientAssignment.mode : 'permanent';
      const assignmentStartsAt = toMillis(clientAssignment?.startsAt);
      const assignmentExpiresAt = toMillis(clientAssignment?.expiresAt);
      const assignmentNotStarted = assignmentMode === 'timed' && assignmentStartsAt > Date.now();
      const assignmentExpired = assignmentMode === 'timed' && assignmentExpiresAt > 0 && assignmentExpiresAt <= Date.now();
      const isLegacyClientPlan = typeof planData.clientId === 'string' && planData.clientId === uid;
      const isAssigned = assignedClientIds.includes(uid) || isLegacyClientPlan;
      if (!isAssigned || assignmentNotStarted || assignmentExpired) continue;

      const mapByExercise = rawExerciseMap as Record<string, unknown>;
      const patch: Record<string, unknown> = {updatedAt: admin.firestore.FieldValue.serverTimestamp()};
      let hasPatch = false;

      for (const [rawIndex, rawWeight] of Object.entries(mapByExercise)) {
        const exerciseIndex = Number(rawIndex);
        const weight = typeof rawWeight === 'number' ? rawWeight : Number(rawWeight);
        if (!Number.isInteger(exerciseIndex) || exerciseIndex < 0 || exerciseIndex >= exercises.length) continue;
        if (!Number.isFinite(weight) || weight < 0) continue;
        patch[`clientWeightOverrides.${uid}.${exerciseIndex}`] = weight;
        synced += 1;
        hasPatch = true;
      }

      if (hasPatch) writeJobs.push(planRef.update(patch));
    }

    if (writeJobs.length > 0) {
      await Promise.all(writeJobs);
    }

    return {ok: true, synced};
  },
);

export const syncPlanWeightOverridesForCoach = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const token = request.auth.token ?? {};
    const isSupervisor = hasSupervisorAccess(token);
    const isCoach = token.role === 'trainer' || token.role === 'admin';
    if (!isCoach && !isSupervisor) {
      throw new HttpsError('permission-denied', 'Coach access required.');
    }

    const payload = request.data as {planId?: unknown};
    const planId = typeof payload.planId === 'string' ? payload.planId.trim() : '';
    if (!planId) {
      throw new HttpsError('invalid-argument', 'planId is required.');
    }

    const planRef = db.collection('plans').doc(planId);
    const planSnap = await planRef.get();
    if (!planSnap.exists) {
      throw new HttpsError('not-found', 'Plan not found.');
    }

    const planData = planSnap.data() ?? {};
    const trainerId = typeof planData.trainerId === 'string' ? planData.trainerId : '';
    if (!isSupervisor && trainerId !== uid) {
      throw new HttpsError('permission-denied', 'You cannot sync this plan.');
    }

    const exercises = Array.isArray(planData.exercises) ? planData.exercises : [];
    const assignedClientIds = Array.isArray(planData.assignedClientIds)
      ? planData.assignedClientIds.filter((item: unknown): item is string => typeof item === 'string')
      : [];
    const legacyClientId = typeof planData.clientId === 'string' ? planData.clientId : '';
    const targetClientIds = new Set<string>(assignedClientIds);
    if (legacyClientId) targetClientIds.add(legacyClientId);

    const existingOverrides = parseClientWeightOverridesFromPlanData(planData);
    const mergedOverrides: Record<string, Record<string, number>> = {...existingOverrides};
    const patch: Record<string, unknown> = {updatedAt: admin.firestore.FieldValue.serverTimestamp()};
    let synced = 0;

    for (const clientId of targetClientIds) {
      const privateSnap = await db.collection('users').doc(clientId).collection('private').doc('planWeights').get();
      const privateData = privateSnap.data() ?? {};
      const rawWeights = privateData.weights;
      if (!rawWeights || typeof rawWeights !== 'object' || Array.isArray(rawWeights)) continue;
      const planWeights = (rawWeights as Record<string, unknown>)[planId];
      if (!planWeights || typeof planWeights !== 'object' || Array.isArray(planWeights)) continue;

      for (const [rawIndex, rawWeight] of Object.entries(planWeights as Record<string, unknown>)) {
        const exerciseIndex = Number(rawIndex);
        const weight = typeof rawWeight === 'number' ? rawWeight : Number(rawWeight);
        if (!Number.isInteger(exerciseIndex) || exerciseIndex < 0 || exerciseIndex >= exercises.length) continue;
        if (!Number.isFinite(weight) || weight < 0) continue;
        patch[`clientWeightOverrides.${clientId}.${exerciseIndex}`] = weight;
        mergedOverrides[clientId] = mergedOverrides[clientId] ?? {};
        mergedOverrides[clientId][String(exerciseIndex)] = weight;
        synced += 1;
      }
    }

    if (synced > 0) await planRef.update(patch);

    return {ok: true, synced, clientWeightOverrides: mergedOverrides};
  },
);

export const cleanupExpiredPlanAssignments = onSchedule(
  {region: 'us-central1', schedule: 'every 24 hours', timeZone: 'Europe/Rome'},
  async () => {
    const plansSnap = await db.collection('plans').get();
    const now = Date.now();
    let batch = db.batch();
    let writes = 0;

    for (const docSnap of plansSnap.docs) {
      const data = docSnap.data();
      const assignedClientIds = Array.isArray(data.assignedClientIds)
        ? data.assignedClientIds.filter((item: unknown): item is string => typeof item === 'string')
        : [];
      const assignmentDetails = parseAssignmentDetails(data.assignmentDetails);
      const expiredClientIds = Object.entries(assignmentDetails)
        .filter(([clientId, detail]) => {
          if (!assignedClientIds.includes(clientId)) return false;
          const mode = typeof detail?.mode === 'string' ? detail.mode : 'permanent';
          const expiresAt = toMillis(detail?.expiresAt);
          return mode === 'timed' && expiresAt > 0 && expiresAt <= now;
        })
        .map(([clientId]) => clientId);

      if (expiredClientIds.length === 0) continue;

      const patch: Record<string, unknown> = {
        assignedClientIds: assignedClientIds.filter((id) => !expiredClientIds.includes(id)),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      };
      expiredClientIds.forEach((clientId) => {
        patch[`assignmentDetails.${clientId}`] = admin.firestore.FieldValue.delete();
      });
      batch.set(docSnap.ref, patch, {merge: true});
      writes += 1;

      if (writes >= 400) {
        await batch.commit();
        batch = db.batch();
        writes = 0;
      }
    }

    if (writes > 0) {
      await batch.commit();
    }
  },
);

function assertSupervisor(request: {auth?: {uid: string; token?: Record<string, unknown>}}): string {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }
  if (!hasSupervisorAccess(request.auth.token)) {
    throw new HttpsError('permission-denied', 'Only supervisors can perform this action.');
  }
  return request.auth.uid;
}

function subscriptionStatePayload(current: CoachSubscriptionDoc, now: Date, status: CoachSubscriptionStatus, endsAt: Date | null, supervisorUid: string): Partial<CoachSubscriptionDoc> {
  return {
    status,
    subscriptionStartedAt: status === 'active_paid' ? admin.firestore.Timestamp.fromDate(now) : current.subscriptionStartedAt ?? null,
    subscriptionEndsAt: endsAt ? admin.firestore.Timestamp.fromDate(endsAt) : null,
    expiresAt: endsAt ? admin.firestore.Timestamp.fromDate(endsAt) : null,
    updatedBySupervisor: supervisorUid,
    updatedAt: admin.firestore.Timestamp.fromDate(now),
  };
}

async function deleteQueryDocs(query: admin.firestore.Query): Promise<void> {
  const snapshot = await query.get();
  if (snapshot.empty) return;
  const batch = db.batch();
  snapshot.docs.forEach((docSnap) => {
    batch.delete(docSnap.ref);
  });
  await batch.commit();
}

async function deleteUserPrivateDocs(uid: string): Promise<void> {
  const privateCollection = db.collection('users').doc(uid).collection('private');
  const privateDocs = await privateCollection.listDocuments();
  await Promise.all(privateDocs.map((docRef) => docRef.delete()));
}

async function clearCoachAssignments(coachUid: string): Promise<void> {
  const assignedClients = await db.collection('users').where('assignedCoachId', '==', coachUid).get();
  const batch = db.batch();
  assignedClients.docs.forEach((docSnap) => {
    batch.set(
      docSnap.ref,
      {
        assignedCoachId: admin.firestore.FieldValue.delete(),
        assignedCoachCode: admin.firestore.FieldValue.delete(),
        assignedCoachEmail: admin.firestore.FieldValue.delete(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );
  });
  if (!assignedClients.empty) await batch.commit();
}

async function deleteCoachOwnedData(coachUid: string): Promise<void> {
  await clearCoachAssignments(coachUid);
  await deleteQueryDocs(db.collection('trainerClients').where('trainerId', '==', coachUid));
  await deleteQueryDocs(db.collection('plans').where('trainerId', '==', coachUid));
  await deleteQueryDocs(db.collection('sessions').where('trainerId', '==', coachUid));
  await deleteQueryDocs(db.collection('workoutLogs').where('trainerId', '==', coachUid));
  await deleteQueryDocs(db.collection('metrics').where('trainerId', '==', coachUid));
  await db.collection('coachSubscriptions').doc(coachUid).delete().catch(() => undefined);
  await deleteUserPrivateDocs(coachUid);
  await db.collection('users').doc(coachUid).delete().catch(() => undefined);
  await admin.storage().bucket().deleteFiles({prefix: `workout-media/${coachUid}/`, force: true}).catch(() => undefined);
  await admin.storage().bucket().deleteFiles({prefix: `profile-images/${coachUid}/`, force: true}).catch(() => undefined);
}

async function deleteClientOwnedData(clientUid: string): Promise<void> {
  await deleteQueryDocs(db.collection('trainerClients').where('clientId', '==', clientUid));
  await db.collection('plans').doc(clientUid).delete().catch(() => undefined);
  const assignedPlans = await db.collection('plans').where('assignedClientIds', 'array-contains', clientUid).get();
  if (!assignedPlans.empty) {
    const batch = db.batch();
    assignedPlans.docs.forEach((docSnap) => {
      batch.set(
        docSnap.ref,
        {
          assignedClientIds: admin.firestore.FieldValue.arrayRemove(clientUid),
          [`assignmentDetails.${clientUid}`]: admin.firestore.FieldValue.delete(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        {merge: true},
      );
    });
    await batch.commit();
  }
  await deleteQueryDocs(db.collection('sessions').where('clientId', '==', clientUid));
  await deleteQueryDocs(db.collection('workoutLogs').where('clientId', '==', clientUid));
  await deleteQueryDocs(db.collection('metrics').where('clientId', '==', clientUid));
  await deleteUserPrivateDocs(clientUid);
  await db.collection('users').doc(clientUid).delete().catch(() => undefined);
  await admin.storage().bucket().deleteFiles({prefix: `profile-images/${clientUid}/`, force: true}).catch(() => undefined);
}

export const listCoachesForSupervisor = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    assertSupervisor(request as {auth?: {token?: Record<string, unknown>; uid: string}});

    const [usersSnap, subsSnap] = await Promise.all([
      db.collection('users').where('role', '==', 'trainer').get(),
      db.collection('coachSubscriptions').get(),
    ]);

    const subMap = new Map<string, CoachSubscriptionDoc>();
    for (const docSnap of subsSnap.docs) {
      subMap.set(docSnap.id, docSnap.data() as CoachSubscriptionDoc);
    }

    const now = Date.now();
    const coaches = usersSnap.docs.map((docSnap) => {
      const data = docSnap.data();
      const sub = subMap.get(docSnap.id);
      const normalizedSub = sub ? buildCoachAccessResponse(sub, now) : {
        status: 'trial_pending',
        requiresTrialAcceptance: true,
        isExpired: false,
        trialEndsAt: null,
        subscriptionEndsAt: null,
        expiresAt: null,
      };

      return {
        uid: docSnap.id,
        displayName: typeof data.displayName === 'string' ? data.displayName : '',
        email: normalizeEmail(data.email),
        coachCode: typeof data.coachCode === 'string' ? data.coachCode : '',
        isSupervisor: data.supervisor === true,
        status: normalizedSub.status,
        trialEndsAt: normalizedSub.trialEndsAt,
        subscriptionEndsAt: normalizedSub.subscriptionEndsAt,
        expiresAt: normalizedSub.expiresAt,
      };
    });

    return {
      ok: true,
      coaches,
    };
  },
);

export const activateCoachSubscription = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    const supervisorUid = assertSupervisor(request as {auth?: {token?: Record<string, unknown>; uid: string}});
    const targetUid = typeof (request.data as {uid?: unknown}).uid === 'string' ? (request.data as {uid: string}).uid : '';
    if (!targetUid) throw new HttpsError('invalid-argument', 'uid is required.');

    const subRef = db.collection('coachSubscriptions').doc(targetUid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) throw new HttpsError('not-found', 'Coach subscription not found.');

    const current = subSnap.data() as CoachSubscriptionDoc;
    if (current.isSupervisor) throw new HttpsError('failed-precondition', 'Supervisor account cannot be modified.');

    const now = new Date();
    const nowMillis = now.getTime();
    const wasBlocked = current.accessBlocked === true || current.status === 'disabled';
    if (wasBlocked) {
      const trialEndsMillis = toMillis(current.trialEndsAt);
      const subscriptionEndsMillis = toMillis(current.subscriptionEndsAt);
      const restoredStatus: CoachSubscriptionStatus = subscriptionEndsMillis > nowMillis
        ? 'active_paid'
        : trialEndsMillis > nowMillis
          ? 'trial_active'
          : 'expired';
      const patch: Partial<CoachSubscriptionDoc> = {
        accessBlocked: false,
        status: restoredStatus,
        updatedBySupervisor: supervisorUid,
        updatedAt: admin.firestore.Timestamp.fromDate(now),
      };
      await subRef.set(patch, {merge: true});
      return {
        ok: true,
        uid: targetUid,
        status: restoredStatus,
        subscriptionEndsAt: current.subscriptionEndsAt?.toDate().toISOString() ?? null,
        mode: 'unblocked',
      };
    }

    const currentEndsMillis = toMillis(current.subscriptionEndsAt);
    const baseDate = currentEndsMillis > now.getTime() ? new Date(currentEndsMillis) : now;
    const nextEnd = addYears(baseDate, 1);

    const patch = subscriptionStatePayload(current, now, 'active_paid', nextEnd, supervisorUid);
    patch.accessBlocked = false;
    await subRef.set(patch, {merge: true});

    return {
      ok: true,
      uid: targetUid,
      status: 'active_paid',
      subscriptionEndsAt: nextEnd.toISOString(),
      mode: 'activated',
    };
  },
);

export const renewCoachSubscription = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    const supervisorUid = assertSupervisor(request as {auth?: {token?: Record<string, unknown>; uid: string}});
    const targetUid = typeof (request.data as {uid?: unknown}).uid === 'string' ? (request.data as {uid: string}).uid : '';
    if (!targetUid) throw new HttpsError('invalid-argument', 'uid is required.');

    const subRef = db.collection('coachSubscriptions').doc(targetUid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) throw new HttpsError('not-found', 'Coach subscription not found.');

    const current = subSnap.data() as CoachSubscriptionDoc;
    if (current.isSupervisor) throw new HttpsError('failed-precondition', 'Supervisor account cannot be modified.');

    const now = new Date();
    const currentEndsMillis = toMillis(current.subscriptionEndsAt);
    const baseDate = currentEndsMillis > 0 ? new Date(currentEndsMillis) : now;
    const nextEnd = addYears(baseDate, 1);

    const patch = subscriptionStatePayload(current, now, 'active_paid', nextEnd, supervisorUid);
    patch.accessBlocked = false;
    await subRef.set(patch, {merge: true});

    return {
      ok: true,
      uid: targetUid,
      status: 'active_paid',
      subscriptionEndsAt: nextEnd.toISOString(),
      mode: 'renewed',
    };
  },
);

export const disableCoachSubscription = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    const supervisorUid = assertSupervisor(request as {auth?: {token?: Record<string, unknown>; uid: string}});
    const targetUid = typeof (request.data as {uid?: unknown}).uid === 'string' ? (request.data as {uid: string}).uid : '';
    if (!targetUid) throw new HttpsError('invalid-argument', 'uid is required.');

    const subRef = db.collection('coachSubscriptions').doc(targetUid);
    const subSnap = await subRef.get();
    if (!subSnap.exists) throw new HttpsError('not-found', 'Coach subscription not found.');

    const current = subSnap.data() as CoachSubscriptionDoc;
    if (current.isSupervisor) throw new HttpsError('failed-precondition', 'Supervisor account cannot be modified.');

    const now = new Date();
    const patch: Partial<CoachSubscriptionDoc> = {
      accessBlocked: true,
      updatedBySupervisor: supervisorUid,
      updatedAt: admin.firestore.Timestamp.fromDate(now),
    };
    await subRef.set(patch, {merge: true});

    return {ok: true, uid: targetUid, status: 'disabled'};
  },
);

export const deleteMyProfile = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const token = request.auth.token as Record<string, unknown>;
    const roleFromClaim = typeof token.role === 'string' ? token.role : '';
    const supervisorClaim = token.supervisor === true;
    const userSnap = await db.collection('users').doc(uid).get();
    const userData = userSnap.data() ?? {};
    const roleFromDoc = typeof userData.role === 'string' ? userData.role : '';
    const isSupervisor = supervisorClaim || userData.supervisor === true || isSupervisorEmail(userData.email);

    if (isSupervisor) {
      throw new HttpsError('failed-precondition', 'Supervisor account cannot be deleted from app.');
    }

    const resolvedRole = roleFromClaim || roleFromDoc;
    if (resolvedRole === 'trainer' || resolvedRole === 'admin') {
      await deleteCoachOwnedData(uid);
    } else {
      await deleteClientOwnedData(uid);
    }

    await admin.auth().deleteUser(uid);
    return {ok: true};
  },
);

export const updateMyCoachPhone = onCall(
  {region: 'us-central1', cors: allowedOrigins, invoker: 'public'},
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Authentication required.');
    }

    const uid = request.auth.uid;
    const phone = typeof (request.data as {phone?: unknown}).phone === 'string'
      ? (request.data as {phone: string}).phone.trim()
      : '';
    if (phone.length < 8) {
      throw new HttpsError('invalid-argument', 'Valid phone number is required.');
    }

    const userRef = db.collection('users').doc(uid);
    const userSnap = await userRef.get();
    const userData = userSnap.data() ?? {};
    const roleFromDoc = typeof userData.role === 'string' ? userData.role : '';
    const roleFromClaim = typeof request.auth.token.role === 'string' ? request.auth.token.role : '';
    const resolvedRole = roleFromClaim || roleFromDoc;
    if (resolvedRole !== 'trainer' && resolvedRole !== 'admin') {
      throw new HttpsError('permission-denied', 'Only coach accounts can update this field.');
    }

    await userRef.set(
      {
        phone,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );

    const assignedClients = await db.collection('users').where('assignedCoachId', '==', uid).get();
    if (!assignedClients.empty) {
      const batch = db.batch();
      assignedClients.docs.forEach((docSnap) => {
        batch.set(
          docSnap.ref,
          {
            assignedCoachPhone: phone,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          },
          {merge: true},
        );
      });
      await batch.commit();
    }

    return {ok: true, phone};
  },
);

export const setUserRole = onCall({region: 'us-central1', cors: allowedOrigins, invoker: 'public'}, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required.');
  }

  const callerUid = request.auth.uid;
  const callerToken = request.auth.token as Record<string, unknown>;
  const payload = request.data as {uid?: string; role?: AppRole};

  if (!hasSupervisorAccess(callerToken)) {
    throw new HttpsError('permission-denied', 'Only supervisors can assign roles.');
  }

  if (!payload.uid || typeof payload.uid !== 'string') {
    throw new HttpsError('invalid-argument', 'uid is required.');
  }

  assertRole(payload.role);

  await applyUserClaims(payload.uid, payload.role, false);

  await db.collection('users').doc(payload.uid).set(
    {
      role: payload.role,
      supervisor: false,
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
    const email = normalizeEmail(request.auth.token.email);
    if (!isSupervisorEmail(email)) {
      throw new HttpsError('permission-denied', 'Account is not allowed to become supervisor.');
    }

    await applyUserClaims(uid, 'trainer', true);

    await db.collection('users').doc(uid).set(
      {
        uid,
        role: 'trainer',
        supervisor: true,
        roleAssignedBy: uid,
        roleAssignedAt: admin.firestore.FieldValue.serverTimestamp(),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true},
    );

    return {ok: true, uid, role: 'trainer', supervisor: true};
  },
);
