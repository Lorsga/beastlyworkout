import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  type DocumentData,
} from 'firebase/firestore';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes, type StorageReference } from 'firebase/storage';

import {
  auth,
  db,
  storage,
  type AppRole,
  newWriteTimestamps,
  updateTimestamp,
} from './firebase';

export type PlanStatus = 'draft' | 'active' | 'archived';

export interface PlanInput {
  clientId: string;
  status: PlanStatus;
  title: string;
  description?: string;
  kind?: 'series_reps' | 'circuit';
  notes?: string;
  exercises: PlanExerciseInput[];
}

export interface PlanExerciseInput {
  name: string;
  sets: number;
  reps: number;
  workValue?: number;
  weightKg?: number;
  restSeconds?: number;
  videoUrl?: string;
  imageUrl?: string;
  mediaUrl?: string;
}

export interface WorkoutLogInput {
  trainerId: string;
  sessionDate: string;
  notes?: string;
  durationMinutes?: number;
}

export interface SessionInput {
  clientId: string;
  startsAt: string;
  endsAt: string;
  type?: string;
  notes?: string;
}

export interface MetricInput {
  trainerId: string;
  metricType: string;
  value: number;
  unit: string;
  measuredAt: string;
}

function requireUid(): string {
  const uid = auth.currentUser?.uid;
  if (!uid) throw new Error('unauthenticated');
  return uid;
}

export async function createUserProfile(profile: Record<string, unknown> = {}) {
  const uid = requireUid();
  const userRef = doc(db, 'users', uid);

  await setDoc(
    userRef,
    {
      uid,
      ...newWriteTimestamps(),
      ...profile,
    },
    {merge: true},
  );

  return userRef;
}

export async function getUserProfile(uid?: string) {
  const userId = uid ?? requireUid();
  return getDoc(doc(db, 'users', userId));
}

export async function setUserPrivateDoc(docId: string, payload: Record<string, unknown>) {
  const uid = requireUid();
  await setDoc(
    doc(db, 'users', uid, 'private', docId),
    {
      ...payload,
      ...updateTimestamp(),
    },
    {merge: true},
  );
}

export async function createTrainerClient(clientId: string, extra: Record<string, unknown> = {}) {
  const trainerId = requireUid();
  return addDoc(collection(db, 'trainerClients'), {
    trainerId,
    clientId,
    ...newWriteTimestamps(),
    ...extra,
  });
}

export async function listTrainerClients(trainerId?: string) {
  const trainer = trainerId ?? requireUid();
  const q = query(collection(db, 'trainerClients'), where('trainerId', '==', trainer));
  return getDocs(q);
}

export async function listRegisteredUsers() {
  return getDocs(collection(db, 'users'));
}

export async function listAssignedClientsAsCoach(coachId?: string) {
  const uid = coachId ?? requireUid();
  const q = query(collection(db, 'users'), where('assignedCoachId', '==', uid));
  return getDocs(q);
}

export async function getUserPrivateDoc(uid: string, docId: string) {
  return getDoc(doc(db, 'users', uid, 'private', docId));
}

export async function setClientOnboardingAsCoach(clientId: string, payload: Record<string, unknown>) {
  await setDoc(
    doc(db, 'users', clientId, 'private', 'onboarding'),
    {
      ...payload,
      ...updateTimestamp(),
    },
    {merge: true},
  );
}

export async function createPlanAsCoach(input: PlanInput) {
  const trainerId = requireUid();
  const planRef = doc(db, 'plans', input.clientId);
  await setDoc(planRef, {
    trainerId,
    clientId: input.clientId,
    status: input.status,
    title: input.title,
    description: input.description ?? '',
    kind: input.kind ?? 'series_reps',
    notes: input.notes ?? '',
    exercises: input.exercises,
    clientNotes: '',
    lastViewedAt: null,
    ...newWriteTimestamps(),
  });
  return planRef;
}

export async function listPlansForRole(role: AppRole, userId?: string) {
  const uid = userId ?? requireUid();
  const field = role === 'client' ? 'clientId' : 'trainerId';
  const q = query(collection(db, 'plans'), where(field, '==', uid));
  return getDocs(q);
}

export async function getPlanByClientId(clientId?: string) {
  const uid = clientId ?? requireUid();
  return getDoc(doc(db, 'plans', uid));
}

export async function updatePlanAsCoach(planId: string, patch: Record<string, unknown>) {
  await updateDoc(doc(db, 'plans', planId), {
    ...patch,
    ...updateTimestamp(),
  });
}

export async function deletePlanAsCoach(planId: string) {
  const planRef = doc(db, 'plans', planId);
  const planSnap = await getDoc(planRef);

  if (planSnap.exists()) {
    const data = planSnap.data() as {
      trainerId?: unknown;
      clientId?: unknown;
      exercises?: Array<{ imageUrl?: unknown; mediaUrl?: unknown }>;
    };
    const mediaUrls = collectPlanStorageUrls(data.exercises);
    await Promise.allSettled(mediaUrls.map((url) => deleteStorageUrl(url)));

    const trainerId = typeof data.trainerId === 'string' ? data.trainerId : '';
    const clientId = typeof data.clientId === 'string' ? data.clientId : '';
    if (trainerId && clientId) {
      await deleteWorkoutMediaFolder(trainerId, clientId);
    }
  }

  await deleteDoc(planRef);
}

export async function uploadWorkoutMediaAsCoach(clientId: string, file: File): Promise<string> {
  const trainerId = requireUid();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const fileName = `${Date.now()}-${safeName}`;
  const mediaRef = workoutMediaRef(trainerId, clientId, fileName);
  await uploadBytes(mediaRef, file, { contentType: file.type || 'application/octet-stream' });
  return getDownloadURL(mediaRef);
}

export async function updatePlanClientFields(planId: string, data: {clientNotes?: string; lastViewedAt?: string | null}) {
  const patch: Record<string, unknown> = {};
  if (typeof data.clientNotes === 'string') patch.clientNotes = data.clientNotes;
  if (data.lastViewedAt !== undefined) patch.lastViewedAt = data.lastViewedAt;

  await updateDoc(doc(db, 'plans', planId), patch);
}

export async function createWorkoutLogAsClient(input: WorkoutLogInput) {
  const clientId = requireUid();
  return addDoc(collection(db, 'workoutLogs'), {
    trainerId: input.trainerId,
    clientId,
    sessionDate: input.sessionDate,
    notes: input.notes ?? '',
    durationMinutes: input.durationMinutes ?? null,
    trainerFeedback: '',
    ...newWriteTimestamps(),
  });
}

export async function listWorkoutLogsForClient(clientId?: string) {
  const uid = clientId ?? requireUid();
  const q = query(
    collection(db, 'workoutLogs'),
    where('clientId', '==', uid),
    orderBy('sessionDate', 'desc'),
  );
  return getDocs(q);
}

export async function updateWorkoutLogAsClient(logId: string, patch: Record<string, unknown>) {
  await updateDoc(doc(db, 'workoutLogs', logId), {
    ...patch,
    ...updateTimestamp(),
  });
}

export async function setWorkoutLogTrainerFeedback(logId: string, trainerFeedback: string) {
  await updateDoc(doc(db, 'workoutLogs', logId), {
    trainerFeedback,
    updatedAt: serverTimestamp(),
  });
}

export async function createSessionAsCoach(input: SessionInput) {
  const trainerId = requireUid();
  return addDoc(collection(db, 'sessions'), {
    trainerId,
    clientId: input.clientId,
    startsAt: input.startsAt,
    endsAt: input.endsAt,
    type: input.type ?? 'workout',
    notes: input.notes ?? '',
    ...newWriteTimestamps(),
  });
}

export async function updateSessionAsCoach(sessionId: string, patch: Record<string, unknown>) {
  await updateDoc(doc(db, 'sessions', sessionId), {
    ...patch,
    ...updateTimestamp(),
  });
}

export async function listSessionsForRole(role: AppRole, userId?: string) {
  const uid = userId ?? requireUid();
  const field = role === 'client' ? 'clientId' : 'trainerId';
  const q = query(collection(db, 'sessions'), where(field, '==', uid), orderBy('startsAt', 'desc'));
  return getDocs(q);
}

export async function createMetricAsClient(input: MetricInput) {
  const clientId = requireUid();
  return addDoc(collection(db, 'metrics'), {
    trainerId: input.trainerId,
    clientId,
    metricType: input.metricType,
    value: input.value,
    unit: input.unit,
    measuredAt: input.measuredAt,
    ...newWriteTimestamps(),
  });
}

export async function updateMetricAsClient(metricId: string, patch: Record<string, unknown>) {
  await updateDoc(doc(db, 'metrics', metricId), {
    ...patch,
    ...updateTimestamp(),
  });
}

export async function listMetricsForClient(clientId?: string) {
  const uid = clientId ?? requireUid();
  const q = query(collection(db, 'metrics'), where('clientId', '==', uid), orderBy('measuredAt', 'desc'));
  return getDocs(q);
}

export function profileImageRef(uid: string, fileName: string): StorageReference {
  return ref(storage, `profile-images/${uid}/${fileName}`);
}

export function workoutMediaRef(trainerId: string, clientId: string, fileName: string): StorageReference {
  return ref(storage, `workout-media/${trainerId}/${clientId}/${fileName}`);
}

export function toData<T = DocumentData>(snapshot: { data: () => T }): T {
  return snapshot.data();
}

function collectPlanStorageUrls(exercises: unknown): string[] {
  if (!Array.isArray(exercises)) return [];
  const urls = new Set<string>();
  for (const item of exercises) {
    if (!item || typeof item !== 'object') continue;
    const imageUrl = (item as { imageUrl?: unknown }).imageUrl;
    const mediaUrl = (item as { mediaUrl?: unknown }).mediaUrl;
    if (isStorageUrl(imageUrl)) urls.add(imageUrl);
    if (isStorageUrl(mediaUrl)) urls.add(mediaUrl);
  }
  return [...urls];
}

function isStorageUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  return (
    value.startsWith('gs://') ||
    value.includes('firebasestorage.googleapis.com') ||
    value.includes('firebasestorage.app')
  );
}

async function deleteStorageUrl(url: string): Promise<void> {
  try {
    await deleteObject(ref(storage, url));
  } catch (error) {
    console.warn('Unable to remove storage file', { url, error });
  }
}

async function deleteWorkoutMediaFolder(trainerId: string, clientId: string): Promise<void> {
  const root = ref(storage, `workout-media/${trainerId}/${clientId}`);
  await deleteStorageTree(root);
}

async function deleteStorageTree(node: StorageReference): Promise<void> {
  try {
    const { items, prefixes } = await listAll(node);
    await Promise.allSettled(items.map((item) => deleteObject(item)));
    await Promise.allSettled(prefixes.map((prefix) => deleteStorageTree(prefix)));
  } catch (error) {
    console.warn('Unable to clear storage folder', { path: node.fullPath, error });
  }
}
