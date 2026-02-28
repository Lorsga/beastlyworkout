import {
  arrayUnion,
  arrayRemove,
  addDoc,
  collection,
  deleteField,
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
  Timestamp,
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
  clientId?: string;
  status: PlanStatus;
  title: string;
  warmup?: string;
  description?: string;
  kind?: 'series_reps' | 'circuit';
  notes?: string;
  assignedClientIds?: string[];
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

const IMAGE_UPLOAD_MAX_SIDE = 1920;
const IMAGE_UPLOAD_TARGET_BYTES = 700 * 1024;
const IMAGE_UPLOAD_START_QUALITY = 0.88;
const IMAGE_UPLOAD_MIN_QUALITY = 0.62;
const IMAGE_UPLOAD_QUALITY_STEP = 0.06;

function outputMimeForImage(fileType: string): 'image/webp' | 'image/jpeg' {
  if (fileType === 'image/png' || fileType === 'image/webp') return 'image/webp';
  return 'image/jpeg';
}

function extensionFromMime(mime: string): string {
  if (mime === 'image/webp') return 'webp';
  if (mime === 'image/jpeg') return 'jpg';
  return 'bin';
}

async function loadImageBitmapOrElement(file: File): Promise<{ width: number; height: number; draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void; cleanup: () => void }> {
  if (typeof createImageBitmap === 'function') {
    const bitmap = await createImageBitmap(file);
    return {
      width: bitmap.width,
      height: bitmap.height,
      draw: (ctx, w, h) => ctx.drawImage(bitmap, 0, 0, w, h),
      cleanup: () => bitmap.close(),
    };
  }

  const objectUrl = URL.createObjectURL(file);
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('image-load-failed'));
    img.src = objectUrl;
  });

  return {
    width: image.naturalWidth || image.width,
    height: image.naturalHeight || image.height,
    draw: (ctx, w, h) => ctx.drawImage(image, 0, 0, w, h),
    cleanup: () => URL.revokeObjectURL(objectUrl),
  };
}

async function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
}

async function optimizeImageForUpload(file: File): Promise<File> {
  if (!file.type.startsWith('image/')) return file;
  if (file.type === 'image/gif' || file.type === 'image/svg+xml') return file;
  if (file.size <= 450 * 1024) return file;

  const image = await loadImageBitmapOrElement(file);
  try {
    const scale = Math.min(1, IMAGE_UPLOAD_MAX_SIDE / Math.max(image.width, image.height));
    const outWidth = Math.max(1, Math.round(image.width * scale));
    const outHeight = Math.max(1, Math.round(image.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = outWidth;
    canvas.height = outHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    image.draw(ctx, outWidth, outHeight);

    const mime = outputMimeForImage(file.type);
    let quality = IMAGE_UPLOAD_START_QUALITY;
    let candidate = await canvasToBlob(canvas, mime, quality);
    if (!candidate) return file;

    while (candidate.size > IMAGE_UPLOAD_TARGET_BYTES && quality > IMAGE_UPLOAD_MIN_QUALITY) {
      quality = Math.max(IMAGE_UPLOAD_MIN_QUALITY, quality - IMAGE_UPLOAD_QUALITY_STEP);
      const next = await canvasToBlob(canvas, mime, quality);
      if (!next) break;
      candidate = next;
    }

    if (candidate.size >= file.size) return file;

    const dot = file.name.lastIndexOf('.');
    const baseName = dot > 0 ? file.name.slice(0, dot) : file.name;
    const extension = extensionFromMime(mime);
    return new File([candidate], `${baseName}.${extension}`, { type: mime, lastModified: Date.now() });
  } catch {
    return file;
  } finally {
    image.cleanup();
  }
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

export async function getMyPlanWeightOverridesDoc() {
  const uid = requireUid();
  return getDoc(doc(db, 'users', uid, 'private', 'planWeights'));
}

export async function setMyPlanExerciseWeightOverride(planId: string, exerciseIndex: number, weightKg: number) {
  const uid = requireUid();
  await setDoc(
    doc(db, 'users', uid, 'private', 'planWeights'),
    {
      weights: {
        [planId]: {
          [String(exerciseIndex)]: weightKg,
        },
      },
      ...updateTimestamp(),
    },
    {merge: true},
  );
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
  const planRef = await addDoc(collection(db, 'plans'), {
    trainerId,
    clientId: input.clientId ?? '',
    status: input.status,
    title: input.title,
    warmup: input.warmup ?? '',
    description: input.description ?? '',
    kind: input.kind ?? 'series_reps',
    notes: input.notes ?? '',
    assignedClientIds: input.assignedClientIds ?? [],
    exercises: input.exercises,
    clientNotes: '',
    lastViewedAt: null,
    ...newWriteTimestamps(),
  });
  return planRef;
}

export async function listPlansForRole(role: AppRole, userId?: string) {
  const uid = userId ?? requireUid();
  const q = role === 'client'
    ? query(collection(db, 'plans'), where('assignedClientIds', 'array-contains', uid))
    : query(collection(db, 'plans'), where('trainerId', '==', uid));
  return getDocs(q);
}

export async function assignPlanToClientAsCoach(planId: string, clientId: string) {
  await updateDoc(doc(db, 'plans', planId), {
    assignedClientIds: arrayUnion(clientId),
    [`assignmentDetails.${clientId}`]: {
      mode: 'permanent',
      weeks: null,
      expiresAt: null,
      assignedAt: serverTimestamp(),
    },
    ...updateTimestamp(),
  });
}

export async function setPlanAssignmentDurationAsCoach(planId: string, clientId: string, weeks: number | null) {
  return setPlanAssignmentDurationWithStartAsCoach(planId, clientId, weeks, null);
}

export async function setPlanAssignmentDurationWithStartAsCoach(
  planId: string,
  clientId: string,
  weeks: number | null,
  startDateIso: string | null,
) {
  const startsAtDate = startDateIso ? new Date(startDateIso) : new Date();
  const safeStart = Number.isNaN(startsAtDate.getTime()) ? new Date() : startsAtDate;
  const assignment = weeks && weeks > 0
    ? {
        mode: 'timed',
        weeks,
        startsAt: Timestamp.fromDate(safeStart),
        expiresAt: Timestamp.fromDate(new Date(safeStart.getTime() + weeks * 7 * 24 * 60 * 60 * 1000)),
        assignedAt: serverTimestamp(),
      }
    : {
        mode: 'permanent',
        weeks: null,
        startsAt: null,
        expiresAt: null,
        assignedAt: serverTimestamp(),
      };

  await updateDoc(doc(db, 'plans', planId), {
    assignedClientIds: arrayUnion(clientId),
    [`assignmentDetails.${clientId}`]: assignment,
    ...updateTimestamp(),
  });
}

export async function removePlanAssignmentAsCoach(planId: string, clientId: string) {
  await updateDoc(doc(db, 'plans', planId), {
    assignedClientIds: arrayRemove(clientId),
    [`assignmentDetails.${clientId}`]: deleteField(),
    ...updateTimestamp(),
  });
}

export async function getPlanByClientId(clientId?: string) {
  const uid = clientId ?? requireUid();
  return getDoc(doc(db, 'plans', uid));
}

export async function getPlanById(planId: string) {
  return getDoc(doc(db, 'plans', planId));
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
      exercises?: Array<{ imageUrl?: unknown; mediaUrl?: unknown }>;
    };
    const mediaUrls = collectPlanStorageUrls(data.exercises);
    await Promise.allSettled(mediaUrls.map((url) => deleteStorageUrl(url)));
  }

  await deleteDoc(planRef);
}

export async function uploadWorkoutMediaAsCoach(clientId: string, file: File): Promise<string> {
  const trainerId = requireUid();
  const uploadFile = await optimizeImageForUpload(file);
  const safeName = uploadFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const fileName = `${Date.now()}-${safeName}`;
  const mediaRef = workoutMediaRef(trainerId, clientId, fileName);
  await uploadBytes(mediaRef, uploadFile, { contentType: uploadFile.type || 'application/octet-stream' });
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
