import { useEffect, useMemo, useRef, useState, type FocusEvent } from 'react';
import Select, { type MultiValue, type StylesConfig } from 'react-select';
import { useNavigate } from 'react-router-dom';

import { DurationPicker } from '../components/DurationPicker';
import { useToast } from '../components/ToastProvider';
import {
  assignPlanToClientAsCoach,
  activateCoachSubscription,
  disableCoachSubscription,
  deleteClientAsCoach,
  deleteMyProfile,
  getUserProfile,
  createPlanAsCoach,
  deletePlanAsCoach,
  acceptCoachTrial,
  getCoachAccessState,
  getCoachVideoLibraryDoc,
  getPlanById,
  getUserPrivateDoc,
  listAssignedClientsAsCoach,
  listPlansForRole,
  listCoachesForSupervisor,
  logoutCurrentUser,
  renewCoachSubscription,
  removePlanAssignmentAsCoach,
  saveCoachVideoLibrary,
  setPlanAssignmentDurationWithStartAsCoach,
  syncPlanWeightOverridesForCoach,
  setClientOnboardingAsCoach,
  updateMyCoachPhone,
  uploadWorkoutMediaAsCoach,
  updatePlanAsCoach,
  useAuthState,
  type CoachVideoLibraryItem,
  type CoachAccessState,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { SELECT_THEME } from '../theme';
import { formatDurationLabel, formatRecoveryLabel, formatWorkLabel } from '../utils/duration';
import { buildPlanPdfBaseName } from '../utils/pdf';
import { printHtmlDocument } from '../utils/print';
import { toMessage } from '../utils/firestore';

interface PlanDoc {
  clientId?: string;
  title: string;
  status: string;
  kind?: 'series_reps' | 'circuit';
  circuitRounds?: number | null;
  notes?: string;
  warmup?: string;
  warmupVideoUrl?: string;
  warmupImageUrl?: string;
  warmupMediaUrl?: string;
  assignedClientIds?: string[];
  assignmentDetails?: Record<string, {
    mode?: 'permanent' | 'timed';
    weeks?: number | null;
    startsAt?: unknown;
    expiresAt?: unknown;
    assignedAt?: unknown;
  }>;
  clientWeightOverrides?: Record<string, Record<string, number>>;
  weightOverridesBackfilledAt?: unknown;
  exercises?: Array<{
    displayOrder?: number;
    movementType?: 'exercise' | 'stretching';
    name?: string;
    notes?: string;
    advancedMethod?: 'rest_pause' | 'drop_set' | '';
    advancedMethodNotes?: string;
    restPauseNotes?: string;
    dropSetNotes?: string;
    sets?: number;
    reps?: number;
    repsUnit?: 'reps' | 'seconds';
    workValue?: number;
    weightKg?: number;
    restSeconds?: number;
    weight?: string;
    mediaUrl?: string;
    videoUrl?: string;
    imageUrl?: string;
  }>;
}

interface UserProfileDoc {
  uid?: string;
  email?: string;
  displayName?: string;
  role?: string;
  requestedRole?: string;
  onboardingCompleted?: boolean;
}

interface OnboardingDoc {
  fullName?: string;
  age?: string;
  sex?: string;
  email?: string;
  phone?: string;
  discoverySource?: string;
  heightCm?: string;
  weightKg?: string;
  pastProgram?: string;
  trainingFrequency?: string;
  workoutDuration?: string;
  workoutLocation?: string;
  equipment?: string;
  trainingTypeHistory?: string;
  hasInjuries?: string;
  injuryDetails?: string;
  objectivePrimary?: string;
  objectiveReason?: string;
  expectedTimeline?: string;
  supportPreference?: string;
  supportPreferenceOther?: string;
  investmentRange?: string;
  whatBlockedSoFar?: string;
  oneThingToImprove?: string;
  importanceScore?: number;
  riskIfNoChange?: string;
  readiness?: string;
  goal?: string;
  experienceLevel?: string;
  trainingDaysPerWeek?: number;
  notes?: string;
  compiledBy?: string;
}

interface OnboardingDraft {
  fullName: string;
  age: string;
  sex: string;
  email: string;
  phone: string;
  discoverySource: string;
  heightCm: string;
  weightKg: string;
  pastProgram: string;
  trainingFrequency: string;
  workoutDuration: string;
  workoutLocation: string;
  equipment: string;
  trainingTypeHistory: string;
  hasInjuries: string;
  injuryDetails: string;
  objectivePrimary: string;
  objectiveReason: string;
  expectedTimeline: string;
  supportPreference: string;
  supportPreferenceOther: string;
  investmentRange: string;
  whatBlockedSoFar: string;
  oneThingToImprove: string;
  importanceScore: string;
  riskIfNoChange: string;
  readiness: string;
  notes: string;
}

type PlanGroupBucket = {
  id: string;
  label: string;
  plans: Array<PlanDoc & { id: string }>;
  kind: 'client' | 'unassigned';
};

type ClientOption = { value: string; label: string };
type VideoLibraryItemDraft = CoachVideoLibraryItem;
type SupervisorCoachItem = {
  uid: string;
  displayName: string;
  email: string;
  coachCode: string;
  isSupervisor: boolean;
  status: string;
  trialEndsAt: string | null;
  subscriptionEndsAt: string | null;
  expiresAt: string | null;
};

type CoachTabId = 'code' | 'clients' | 'plans' | 'overview' | 'supervisor';

const COACH_TAB_STORAGE_KEY = 'beastly-coach-active-tab';

function parseCoachTab(value: string | null | undefined): CoachTabId | null {
  return value === 'code' || value === 'clients' || value === 'plans' || value === 'overview' || value === 'supervisor'
    ? value
    : null;
}

function getInitialCoachTab(): CoachTabId {
  if (typeof window === 'undefined') return 'clients';
  const hashTab = parseCoachTab(window.location.hash.replace(/^#/, ''));
  if (hashTab) return hashTab;
  const storedTab = parseCoachTab(window.localStorage.getItem(COACH_TAB_STORAGE_KEY));
  return storedTab ?? 'clients';
}
type PlanBuilderSection = 'details' | 'exercises';
type ExerciseRepsUnit = 'reps' | 'seconds';
type ExerciseMovementType = 'exercise' | 'stretching';
type VideoLibraryExerciseTarget = {
  exerciseIndex: number;
  movementType: ExerciseMovementType;
  label: string;
};
type ExerciseDraft = {
  displayOrder: number;
  movementType: ExerciseMovementType;
  name: string;
  notes: string;
  advancedMethod: '' | 'rest_pause' | 'drop_set';
  advancedMethodNotes: string;
  restPauseNotes: string;
  dropSetNotes: string;
  sets: number | '';
  reps: number | '';
  repsUnit: ExerciseRepsUnit;
  workValue: number | '';
  weightKg: number | '';
  restSeconds: number | '';
  videoUrl: string;
  imageUrl: string;
  mediaUrl: string;
};

const PROFILE_STEPS = ['Anagrafica', 'Stato fisico', 'Obiettivi'] as const;

function asText(value: unknown): string {
  return typeof value === 'string' ? value : value == null ? '' : String(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getClientAuthUid(profile: UserProfileDoc & { id: string }): string {
  const docId = asText(profile.id).trim();
  const uid = asText(profile.uid).trim();
  return docId || uid;
}

function shouldSyncPlanWeightOverrides(plan: PlanDoc | null | undefined) {
  if (!plan) return false;
  const assignedClientIds = Array.isArray(plan.assignedClientIds)
    ? plan.assignedClientIds.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];
  const hasLegacyClient = asText(plan.clientId).trim().length > 0;
  return (assignedClientIds.length > 0 || hasLegacyClient) && !plan.weightOverridesBackfilledAt;
}

function isYoutubeVideoUrl(url: string): boolean {
  return /(^https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(url.trim());
}

function normalizeVideoLibraryItems(value: unknown): VideoLibraryItemDraft[] {
  if (!Array.isArray(value)) return [];
  const items: VideoLibraryItemDraft[] = [];
  value.forEach((item) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) return;
    const raw = item as Record<string, unknown>;
    const id = asText(raw.id).trim();
    const name = asText(raw.name).trim();
    const url = asText(raw.url).trim();
    if (!id || !name || !url || !isYoutubeVideoUrl(url)) return;
    const createdAt = asText(raw.createdAt).trim();
    const updatedAt = asText(raw.updatedAt).trim();
    items.push({
      id,
      name,
      url,
      createdAt: createdAt || undefined,
      updatedAt: updatedAt || undefined,
    });
  });
  return items.sort((a, b) => a.name.localeCompare(b.name, 'it', {sensitivity: 'base'}));
}

function createVideoLibraryItemId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `video-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizePlanExercises(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item, index, array) => {
      if (!item || typeof item !== 'object') return null;
      const raw = item as Record<string, unknown>;
      const legacyWeight = Number(asText(raw.weight).replace(/[^\d.-]/g, ''));
      const rawAdvancedMethod = asText(raw.advancedMethod).trim();
      const advancedMethod = rawAdvancedMethod === 'rest_pause' || rawAdvancedMethod === 'drop_set' ? rawAdvancedMethod : '';
      const legacyAdvancedMethodNotes = asText(raw.advancedMethodNotes);
      const rawRestPauseNotes = asText(raw.restPauseNotes);
      const rawDropSetNotes = asText(raw.dropSetNotes);
      const rawMediaUrl = asText(raw.mediaUrl).trim();
      const rawVideoUrl = asText(raw.videoUrl).trim();
      const rawImageUrl = asText(raw.imageUrl).trim();
      const normalizedVideoUrl = rawVideoUrl || (isVideoMediaUrl(rawMediaUrl) ? rawMediaUrl : '');
      const normalizedImageUrl = rawImageUrl || (isImageMediaUrl(rawMediaUrl) ? rawMediaUrl : '');
      const repsUnit = normalizeExerciseRepsUnit(raw.repsUnit);
      const movementType = normalizeExerciseMovementType(raw.movementType);
      return {
        displayOrder: normalizeDisplayOrder(raw.displayOrder, array.length - index),
        movementType,
        name: asText(raw.name),
        notes: asText(raw.notes),
        advancedMethod,
        advancedMethodNotes: legacyAdvancedMethodNotes,
        restPauseNotes: rawRestPauseNotes || (advancedMethod === 'rest_pause' ? legacyAdvancedMethodNotes : ''),
        dropSetNotes: rawDropSetNotes || (advancedMethod === 'drop_set' ? legacyAdvancedMethodNotes : ''),
        sets: normalizeExerciseNumber(raw.sets, 3),
        reps: normalizeExerciseNumber(raw.reps, 10),
        repsUnit,
        workValue: normalizeExerciseNumber(raw.workValue ?? raw.reps, 10),
        weightKg: normalizeExerciseNumber(raw.weightKg, Number.isFinite(legacyWeight) ? legacyWeight : 0),
        restSeconds: normalizeExerciseNumber(raw.restSeconds, 60),
        videoUrl: normalizedVideoUrl,
        imageUrl: normalizedImageUrl,
        mediaUrl: rawMediaUrl || normalizedVideoUrl || normalizedImageUrl,
      };
    })
    .filter((item): item is {
      displayOrder: number;
      movementType: ExerciseMovementType;
      name: string;
      notes: string;
      advancedMethod: '' | 'rest_pause' | 'drop_set';
      advancedMethodNotes: string;
      restPauseNotes: string;
      dropSetNotes: string;
      sets: number;
      reps: number;
      repsUnit: ExerciseRepsUnit;
      workValue: number;
      weightKg: number;
      restSeconds: number;
      videoUrl: string;
      imageUrl: string;
      mediaUrl: string;
    } => Boolean(item));
}

function normalizeExerciseRepsUnit(value: unknown): ExerciseRepsUnit {
  return asText(value).trim() === 'seconds' ? 'seconds' : 'reps';
}

function normalizeExerciseMovementType(value: unknown): ExerciseMovementType {
  return asText(value).trim() === 'stretching' ? 'stretching' : 'exercise';
}

function normalizeDisplayOrder(value: unknown, fallback: number): number {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (Number.isFinite(numeric) && numeric > 0) return Math.floor(numeric);
  return fallback;
}

function normalizeExerciseNumber(value: unknown, fallback: number): number {
  if (value === undefined || value === null) return fallback;
  if (typeof value === 'string' && value.trim() === '') return 0;
  const numeric = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function normalizeCircuitRounds(value: unknown, fallback = 1): number {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.min(5, Math.max(1, Math.floor(numeric)));
}

function formatCircuitRoundsLabel(value: unknown): string {
  const rounds = normalizeCircuitRounds(value, 1);
  return `${rounds} ${rounds === 1 ? 'giro' : 'giri'}`;
}

function formatSeriesTarget(value: number, unit: ExerciseRepsUnit): string {
  if (unit === 'seconds') return formatDurationLabel(value);
  return `${value || '-'} reps`;
}

function formatWorkTarget(value: number, unit: ExerciseRepsUnit): string {
  if (unit === 'seconds') return formatWorkLabel(value);
  return `${value || '-'} reps`;
}

function formatExerciseSummary(
  exercise: Pick<ExerciseDraft, 'sets' | 'reps' | 'repsUnit' | 'workValue' | 'weightKg' | 'restSeconds'>,
  kind: 'series_reps' | 'circuit',
): string {
  const primary = kind === 'circuit'
    ? formatWorkTarget(Number(exercise.workValue) || 0, exercise.repsUnit)
    : `${Number(exercise.sets) || 0} serie · ${formatSeriesTarget(Number(exercise.reps) || 0, exercise.repsUnit)}`;
  return `${primary} · ${Number(exercise.weightKg) || 0} kg · ${formatRecoveryLabel(exercise.restSeconds)}`;
}

function movementTypeLabel(value: ExerciseMovementType): string {
  return value === 'stretching' ? 'Stretching' : 'Esercizio';
}

function splitExercisesByMovementType<T extends { movementType: ExerciseMovementType }>(items: T[]) {
  return {
    exercises: items.filter((item) => item.movementType === 'exercise'),
    stretchings: items.filter((item) => item.movementType === 'stretching'),
  };
}

function sortExercisesForDisplay<T extends { displayOrder: number }>(items: T[]) {
  return [...items].sort((a, b) => a.displayOrder - b.displayOrder);
}

function onboardingValue(value: unknown): string {
  const text = asText(value).trim();
  return text || 'Non compilato';
}

function normalizeWhatsappPhone(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, '').replace(/\s+/g, '');
  if (!digits) return '';
  if (digits.startsWith('+')) return digits.slice(1);
  if (digits.startsWith('00')) return digits.slice(2);
  if (digits.startsWith('39')) return digits;
  if (digits.length >= 9) return `39${digits}`;
  return digits;
}

function buildClientWhatsappUrl(phone: string, clientName?: string): string {
  const normalized = normalizeWhatsappPhone(phone);
  const intro = clientName?.trim() ? `Ciao ${clientName.trim()},` : 'Ciao,';
  const text = encodeURIComponent(`${intro} la tua scheda tecnica è pronta. Quando vuoi possiamo rivederla insieme.`);
  return normalized ? `https://wa.me/${normalized}?text=${text}` : '';
}

function isVideoMediaUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be') || /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(url);
}

function isImageMediaUrl(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i.test(url);
}

function getPlanWarmupVideoUrl(plan: PlanDoc | null | undefined): string {
  if (!plan) return '';
  const explicit = asText((plan as {warmupVideoUrl?: unknown}).warmupVideoUrl).trim();
  if (explicit) return explicit;
  const legacy = asText((plan as {warmupMediaUrl?: unknown}).warmupMediaUrl).trim();
  return isVideoMediaUrl(legacy) ? legacy : '';
}

function getPlanWarmupImageUrl(plan: PlanDoc | null | undefined): string {
  if (!plan) return '';
  const explicit = asText((plan as {warmupImageUrl?: unknown}).warmupImageUrl).trim();
  if (explicit) return explicit;
  const legacy = asText((plan as {warmupMediaUrl?: unknown}).warmupMediaUrl).trim();
  return isImageMediaUrl(legacy) ? legacy : '';
}

function defaultExercise(movementType: ExerciseMovementType = 'exercise', displayOrder = 1) {
  return {
    displayOrder,
    movementType,
    name: '',
    notes: '',
    advancedMethod: '' as '' | 'rest_pause' | 'drop_set',
    advancedMethodNotes: '',
    restPauseNotes: '',
    dropSetNotes: '',
    sets: 3,
    reps: 10,
    repsUnit: 'reps' as ExerciseRepsUnit,
    workValue: 10,
    weightKg: 0,
    restSeconds: 60 as number | '',
    videoUrl: '',
    imageUrl: '',
    mediaUrl: '',
  } satisfies ExerciseDraft;
}

function hasExerciseDraftData(exercise: ExerciseDraft): boolean {
  return (
    exercise.name.trim().length > 0 ||
    exercise.notes.trim().length > 0 ||
    exercise.advancedMethod.trim().length > 0 ||
    exercise.advancedMethodNotes.trim().length > 0 ||
    exercise.restPauseNotes.trim().length > 0 ||
    exercise.dropSetNotes.trim().length > 0 ||
    exercise.videoUrl.trim().length > 0 ||
    exercise.imageUrl.trim().length > 0 ||
    exercise.mediaUrl.trim().length > 0 ||
    Number(exercise.sets || 0) !== 3 ||
    Number(exercise.reps || 0) !== 10 ||
    exercise.repsUnit !== 'reps' ||
    Number(exercise.workValue || 0) !== 10 ||
    Number(exercise.weightKg || 0) > 0 ||
    Number(exercise.restSeconds || 0) !== 60
  );
}

function selectNumericInputContents(event: FocusEvent<HTMLInputElement>) {
  event.currentTarget.select();
}

function normalizeNumericRawInput(raw: string): string {
  if (!raw) return '';
  if (raw === '0') return '0';
  return raw.replace(/^0+(?=\d)/, '');
}

function parseExerciseNumericInput(raw: string): number | '' {
  const normalized = normalizeNumericRawInput(raw);
  if (!normalized) return '';
  const value = Number(normalized);
  return Number.isFinite(value) ? value : '';
}

function nextExerciseDisplayOrder(items: Array<Pick<ExerciseDraft, 'displayOrder'>>): number {
  return items.reduce((max, item) => Math.max(max, Number(item.displayOrder) || 0), 0) + 1;
}

function renumberExerciseDisplayOrder(items: ExerciseDraft[]): ExerciseDraft[] {
  const ordered = sortExercisesForDisplay(items.map((item, index) => ({ index, displayOrder: item.displayOrder })));
  const nextOrderByIndex = new Map(ordered.map((item, position) => [item.index, position + 1]));
  return items.map((item, index) => ({
    ...item,
    displayOrder: nextOrderByIndex.get(index) ?? index + 1,
  }));
}

function emptyOnboardingDraft(base?: { name?: string; email?: string }): OnboardingDraft {
  return {
    fullName: base?.name ?? '',
    age: '',
    sex: '',
    email: base?.email ?? '',
    phone: '',
    discoverySource: '',
    heightCm: '',
    weightKg: '',
    pastProgram: '',
    trainingFrequency: '',
    workoutDuration: '',
    workoutLocation: '',
    equipment: '',
    trainingTypeHistory: '',
    hasInjuries: '',
    injuryDetails: '',
    objectivePrimary: '',
    objectiveReason: '',
    expectedTimeline: '',
    supportPreference: '',
    supportPreferenceOther: '',
    investmentRange: '',
    whatBlockedSoFar: '',
    oneThingToImprove: '',
    importanceScore: '',
    riskIfNoChange: '',
    readiness: '',
    notes: '',
  };
}

function toOnboardingDraft(data: OnboardingDoc | null, base?: { name?: string; email?: string }): OnboardingDraft {
  const seed = emptyOnboardingDraft(base);
  if (!data) return seed;
  return {
    ...seed,
    fullName: asText(data.fullName).trim() || seed.fullName,
    age: asText(data.age).trim(),
    sex: asText(data.sex).trim(),
    email: asText(data.email).trim() || seed.email,
    phone: asText(data.phone).trim(),
    discoverySource: asText(data.discoverySource).trim(),
    heightCm: asText(data.heightCm).trim(),
    weightKg: asText(data.weightKg).trim(),
    pastProgram: asText(data.pastProgram).trim(),
    trainingFrequency: asText(data.trainingFrequency).trim(),
    workoutDuration: asText(data.workoutDuration).trim(),
    workoutLocation: asText(data.workoutLocation).trim(),
    equipment: asText(data.equipment).trim(),
    trainingTypeHistory: asText(data.trainingTypeHistory).trim(),
    hasInjuries: asText(data.hasInjuries).trim(),
    injuryDetails: asText(data.injuryDetails).trim(),
    objectivePrimary: asText(data.objectivePrimary).trim(),
    objectiveReason: asText(data.objectiveReason).trim(),
    expectedTimeline: asText(data.expectedTimeline).trim(),
    supportPreference: asText(data.supportPreference).trim(),
    supportPreferenceOther: asText(data.supportPreferenceOther).trim(),
    investmentRange: asText(data.investmentRange).trim(),
    whatBlockedSoFar: asText(data.whatBlockedSoFar).trim(),
    oneThingToImprove: asText(data.oneThingToImprove).trim(),
    importanceScore: data.importanceScore != null ? String(data.importanceScore) : '',
    riskIfNoChange: asText(data.riskIfNoChange).trim(),
    readiness: asText(data.readiness).trim(),
    notes: asText(data.notes).trim(),
  };
}

function toTrainingDaysPerWeek(value: string): number {
  if (value.includes('1-2')) return 2;
  if (value.includes('3-4')) return 4;
  if (value.includes('5')) return 5;
  return 0;
}

function formatDate(value?: string | null): string {
  if (!value) return 'Non disponibile';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Non disponibile';
  return date.toLocaleDateString('it-IT', {day: '2-digit', month: '2-digit', year: 'numeric'});
}

function toIsoDateString(value: unknown): string | null {
  if (!value) return null;
  if (typeof value === 'string') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date.toISOString();
  }
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value.toISOString();
  }
  if (typeof value === 'object' && value && 'toDate' in value && typeof (value as {toDate: () => Date}).toDate === 'function') {
    const date = (value as {toDate: () => Date}).toDate();
    return Number.isNaN(date.getTime()) ? null : date.toISOString();
  }
  return null;
}

function toInputDate(value: Date): string {
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
}

function accessStatusLabel(status?: string): string {
  switch (status) {
  case 'trial_pending':
    return 'Prova da attivare';
  case 'trial_active':
    return 'Prova attiva';
  case 'active_paid':
    return 'Abbonamento attivo';
  case 'expired':
    return 'Scaduto';
  case 'disabled':
    return 'Disattivato';
  case 'supervisor_active':
    return 'Supervisor attivo';
  default:
    return 'Non disponibile';
  }
}

function toTimestamp(value?: string | null): number | null {
  if (!value) return null;
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? null : time;
}

function getPlanCreatedAtIso(plan: PlanDoc & { id: string }): string | null {
  return toIsoDateString((plan as {createdAt?: unknown}).createdAt);
}

function comparePlansChronologically(a: PlanDoc & { id: string }, b: PlanDoc & { id: string }): number {
  const byTime = (toTimestamp(getPlanCreatedAtIso(a)) ?? 0) - (toTimestamp(getPlanCreatedAtIso(b)) ?? 0);
  if (byTime !== 0) return byTime;
  return asText(a.title).localeCompare(asText(b.title), 'it');
}

function getCoachEffectiveExpiry(coach: Pick<SupervisorCoachItem, 'status' | 'expiresAt' | 'trialEndsAt' | 'subscriptionEndsAt'>): string | null {
  if (coach.status === 'trial_active') return coach.trialEndsAt ?? coach.expiresAt ?? coach.subscriptionEndsAt ?? null;
  if (coach.status === 'active_paid') return coach.subscriptionEndsAt ?? coach.expiresAt ?? coach.trialEndsAt ?? null;
  return coach.expiresAt ?? coach.trialEndsAt ?? coach.subscriptionEndsAt ?? null;
}

function coachExpiryChip(status: string, expiresAt: string | null): {label: string; tone: 'warning' | 'danger'} | null {
  if (status === 'expired') {
    return {label: 'Scaduto', tone: 'danger'};
  }
  const expiresTime = toTimestamp(expiresAt);
  if (!expiresTime) return null;
  const now = Date.now();
  if (expiresTime <= now) {
    return {label: 'Scaduto', tone: 'danger'};
  }
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  if (expiresTime - now <= sevenDaysMs) {
    return {label: 'In scadenza', tone: 'warning'};
  }
  return null;
}

function extractClientWeightOverridesFromPlan(plan: PlanDoc & { id: string }): Record<string, Record<string, number>> {
  const output: Record<string, Record<string, number>> = {};
  const nested = plan.clientWeightOverrides;
  if (nested && typeof nested === 'object') {
    for (const [clientId, rawByExercise] of Object.entries(nested)) {
      if (!rawByExercise || typeof rawByExercise !== 'object') continue;
      for (const [exerciseIndex, rawWeight] of Object.entries(rawByExercise)) {
        const weight = Number(rawWeight);
        if (!Number.isFinite(weight) || weight < 0) continue;
        output[clientId] = output[clientId] ?? {};
        output[clientId][exerciseIndex] = weight;
      }
    }
  }
  for (const [key, rawWeight] of Object.entries(plan as unknown as Record<string, unknown>)) {
    if (!key.startsWith('clientWeightOverrides.')) continue;
    const [, clientId, exerciseIndex] = key.split('.');
    if (!clientId || exerciseIndex == null) continue;
    if (output[clientId]?.[exerciseIndex] !== undefined) continue;
    const weight = Number(rawWeight);
    if (!Number.isFinite(weight) || weight < 0) continue;
    output[clientId] = output[clientId] ?? {};
    output[clientId][exerciseIndex] = weight;
  }
  return output;
}

function getPlanWeightFeedback(
  plan: PlanDoc & { id: string },
  clientLabelById: Record<string, string>,
) {
  const overrides = extractClientWeightOverridesFromPlan(plan);
  if (Object.keys(overrides).length === 0) return [];
  const baseExercises = normalizePlanExercises(plan.exercises);
  const feedback: Array<{clientId: string; clientLabel: string; lines: string[]}> = [];

  for (const [clientId, rawExerciseMap] of Object.entries(overrides)) {
    if (!rawExerciseMap || typeof rawExerciseMap !== 'object') continue;
    const lines: string[] = [];
    for (const [rawIndex, rawWeight] of Object.entries(rawExerciseMap)) {
      const exerciseIndex = Number(rawIndex);
      if (!Number.isInteger(exerciseIndex) || exerciseIndex < 0 || exerciseIndex >= baseExercises.length) continue;
      const nextWeight = Number(rawWeight);
      if (!Number.isFinite(nextWeight)) continue;
      const base = baseExercises[exerciseIndex];
      const baseWeight = Number(base.weightKg || 0);
      if (nextWeight === baseWeight) continue;
      const exerciseName = base.name.trim() || `Esercizio ${exerciseIndex + 1}`;
      lines.push(`${exerciseName}: ${baseWeight} kg -> ${nextWeight} kg`);
    }
    if (lines.length === 0) continue;
    feedback.push({
      clientId,
      clientLabel: clientLabelById[clientId] || clientId,
      lines,
    });
  }

  return feedback;
}

function getPlanWeightFeedbackCount(
  plan: PlanDoc & { id: string },
  clientLabelById: Record<string, string>,
): number {
  return getPlanWeightFeedback(plan, clientLabelById).reduce((total, item) => total + item.lines.length, 0);
}

export function CoachDashboardPage() {
  const { role, user, isSupervisor } = useAuthState();
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const [registeredClients, setRegisteredClients] = useState<Array<UserProfileDoc & { id: string }>>([]);
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [selectedClientOnboarding, setSelectedClientOnboarding] = useState<OnboardingDoc | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isPlanPreviewOpen, setIsPlanPreviewOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [previewImageLoading, setPreviewImageLoading] = useState<Record<string, boolean>>({});
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingProfile, setDeletingProfile] = useState(false);
  const [isClientDeleteModalOpen, setIsClientDeleteModalOpen] = useState(false);
  const [deletingClient, setDeletingClient] = useState(false);
  const [coachPhone, setCoachPhone] = useState('');
  const [coachPhoneDraft, setCoachPhoneDraft] = useState('');
  const [editingCoachPhone, setEditingCoachPhone] = useState(false);
  const [savingCoachPhone, setSavingCoachPhone] = useState(false);
  const [profileStep, setProfileStep] = useState(0);
  const [onboardingDraft, setOnboardingDraft] = useState<OnboardingDraft>(emptyOnboardingDraft());
  const [uploadingExerciseIndex, setUploadingExerciseIndex] = useState<number | null>(null);
  const [uploadingWarmupMedia, setUploadingWarmupMedia] = useState(false);
  const [coachAccess, setCoachAccess] = useState<CoachAccessState | null>(null);
  const [loadingCoachAccess, setLoadingCoachAccess] = useState(false);
  const [supervisorCoaches, setSupervisorCoaches] = useState<SupervisorCoachItem[]>([]);
  const [supervisorSearch, setSupervisorSearch] = useState('');
  const [supervisorActionUid, setSupervisorActionUid] = useState('');
  const [previewLoadingPlanId, setPreviewLoadingPlanId] = useState('');
  const [videoLibrary, setVideoLibrary] = useState<VideoLibraryItemDraft[]>([]);
  const [isVideoLibraryModalOpen, setIsVideoLibraryModalOpen] = useState(false);
  const [videoLibraryDraftName, setVideoLibraryDraftName] = useState('');
  const [videoLibraryDraftUrl, setVideoLibraryDraftUrl] = useState('');
  const [videoLibraryEditingId, setVideoLibraryEditingId] = useState('');
  const [videoLibrarySearch, setVideoLibrarySearch] = useState('');
  const [videoLibraryPickerSearch, setVideoLibraryPickerSearch] = useState('');
  const [videoLibrarySaving, setVideoLibrarySaving] = useState(false);
  const [videoLibraryTarget, setVideoLibraryTarget] = useState<VideoLibraryExerciseTarget | null>(null);
  const [activeTab, setActiveTab] = useState<CoachTabId>(() => getInitialCoachTab());
  const [planBuilderSection, setPlanBuilderSection] = useState<PlanBuilderSection>('details');
  const planBuilderScrollRef = useRef<HTMLElement | null>(null);

  const [selectedClientId, setSelectedClientId] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState('');
  const [isCreatingPlan, setIsCreatingPlan] = useState(false);
  const [planKind, setPlanKind] = useState<'series_reps' | 'circuit'>('series_reps');
  const [planCircuitRounds, setPlanCircuitRounds] = useState(1);
  const [planTitle, setPlanTitle] = useState('');
  const [planWarmup, setPlanWarmup] = useState('');
  const [planWarmupVideoUrl, setPlanWarmupVideoUrl] = useState('');
  const [planWarmupImageUrl, setPlanWarmupImageUrl] = useState('');
  const [planNotes, setPlanNotes] = useState('');
  const [exercises, setExercises] = useState<ExerciseDraft[]>([defaultExercise()]);
  const [assigningClientIds, setAssigningClientIds] = useState<string[]>([]);
  const [isAssignmentModeModalOpen, setIsAssignmentModeModalOpen] = useState(false);
  const [assignmentTargetClientId, setAssignmentTargetClientId] = useState('');
  const [assignmentModeDraft, setAssignmentModeDraft] = useState<'permanent' | 'timed'>('permanent');
  const [assignmentWeeksDraft, setAssignmentWeeksDraft] = useState('4');
  const [assignmentStartDateDraft, setAssignmentStartDateDraft] = useState(toInputDate(new Date()));
  const isUploadingMedia = uploadingExerciseIndex !== null || uploadingWarmupMedia;

  const selectedClientProfile = registeredClients.find((item) => getClientAuthUid(item) === selectedClientId) ?? null;
  const selectedClientLabel = asText(selectedClientProfile?.displayName).trim()
    || asText(selectedClientProfile?.email).trim()
    || (selectedClientProfile ? getClientAuthUid(selectedClientProfile) : '');
  const coachPlanTemplates = [...plans].sort((a, b) => {
    const aTime = toTimestamp(asText((a as {createdAt?: unknown}).createdAt as string)) ?? 0;
    const bTime = toTimestamp(asText((b as {createdAt?: unknown}).createdAt as string)) ?? 0;
    return bTime - aTime;
  });
  const coachPlanTemplatesChronological = [...plans].sort(comparePlansChronologically);
  const selectedPlan = coachPlanTemplates.find((plan) => plan.id === selectedPlanId) ?? null;
  const editingPlan = isPlanModalOpen ? selectedPlan : null;
  const previewPlan = isPlanPreviewOpen ? selectedPlan : null;
  const selectedClientWhatsappUrl = buildClientWhatsappUrl(
    asText(selectedClientOnboarding?.phone),
    asText(selectedClientOnboarding?.fullName),
  );
  const clientLabelById = registeredClients.reduce<Record<string, string>>((acc, client) => {
    const label = asText(client.displayName).trim() || asText(client.email).trim() || client.id;
    acc[getClientAuthUid(client)] = label;
    acc[client.id] = label;
    return acc;
  }, {});
  const sortedVideoLibrary = useMemo(
    () => [...videoLibrary].sort((a, b) => a.name.localeCompare(b.name, 'it', {sensitivity: 'base'})),
    [videoLibrary],
  );
  const filteredVideoLibrary = useMemo(() => {
    const needle = videoLibrarySearch.trim().toLowerCase();
    if (!needle) return sortedVideoLibrary;
    return sortedVideoLibrary.filter((item) =>
      item.name.toLowerCase().includes(needle) || item.url.toLowerCase().includes(needle),
    );
  }, [sortedVideoLibrary, videoLibrarySearch]);
  const pickerVideoLibrary = useMemo(() => {
    const needle = videoLibraryPickerSearch.trim().toLowerCase();
    if (!needle) return sortedVideoLibrary;
    return sortedVideoLibrary.filter((item) =>
      item.name.toLowerCase().includes(needle) || item.url.toLowerCase().includes(needle),
    );
  }, [sortedVideoLibrary, videoLibraryPickerSearch]);
  const videoLibraryByUrl = useMemo(() => {
    const lookup = new Map<string, VideoLibraryItemDraft>();
    sortedVideoLibrary.forEach((item) => lookup.set(item.url, item));
    return lookup;
  }, [sortedVideoLibrary]);
  const groupedPlanBuckets = useMemo<PlanGroupBucket[]>(() => {
    const assignedGroups: PlanGroupBucket[] = registeredClients
      .map((client) => {
        const clientId = getClientAuthUid(client);
        const clientPlans = coachPlanTemplatesChronological.filter((plan) => Array.isArray(plan.assignedClientIds) && plan.assignedClientIds.includes(clientId));
        return {
          id: clientId,
          label: asText(client.displayName).trim() || asText(client.email).trim() || client.id,
          plans: clientPlans,
          kind: 'client' as const,
        };
      })
      .filter((group) => group.plans.length > 0)
      .sort((a, b) => {
        const byTime = comparePlansChronologically(a.plans[0], b.plans[0]);
        if (byTime !== 0) return byTime;
        return a.label.localeCompare(b.label, 'it');
      });

    const unassignedPlans = coachPlanTemplatesChronological.filter((plan) => !Array.isArray(plan.assignedClientIds) || plan.assignedClientIds.length === 0);

    if (unassignedPlans.length > 0) {
      assignedGroups.push({
        id: 'unassigned',
        label: 'Schede non assegnate',
        plans: unassignedPlans,
        kind: 'unassigned',
      });
    }

    return assignedGroups;
  }, [registeredClients, coachPlanTemplatesChronological]);
  const previewPlanWeightFeedback = previewPlan ? getPlanWeightFeedback(previewPlan, clientLabelById) : [];
  const previewPlanMovements = previewPlan ? normalizePlanExercises(previewPlan.exercises) : [];
  const previewPlanDisplayItems = sortExercisesForDisplay(
    previewPlanMovements.map((exercise, index) => ({ exercise, index, displayOrder: exercise.displayOrder })),
  );
  const planBuilderDisplayItems = sortExercisesForDisplay(
    exercises.map((exercise, index) => ({ exercise, index, displayOrder: exercise.displayOrder })),
  );

  const clientOptions: ClientOption[] = registeredClients.map((client) => ({
    value: getClientAuthUid(client),
    label: asText(client.displayName).trim() || asText(client.email) || client.id,
  }));
  const unassignedClientOptions: ClientOption[] = selectedPlan
    ? clientOptions.filter((option) => !(selectedPlan.assignedClientIds ?? []).includes(option.value))
    : clientOptions;
  const assigningClientOptions = clientOptions.filter((option) => assigningClientIds.includes(option.value));

  const selectedClientOption = clientOptions.find((option) => option.value === selectedClientId) ?? null;
  const profileProgress = Math.round(((profileStep + 1) / PROFILE_STEPS.length) * 100);
  const coachSections = [
    { id: 'code', label: 'Codice', mobileLabel: 'Codice', icon: '🔑' },
    { id: 'clients', label: 'Clienti', mobileLabel: 'Clienti', icon: '👥' },
    { id: 'plans', label: 'Schede', mobileLabel: 'Schede', icon: '🔥' },
    { id: 'overview', label: 'Panoramica', mobileLabel: 'Dashboard', icon: '📊' },
    ...(isSupervisor ? [{ id: 'supervisor', label: 'Supervisor', mobileLabel: 'Admin', icon: '🛡️' }] : []),
  ];
  const filteredSupervisorCoaches = supervisorCoaches
    .filter((coach) => coach.uid !== user?.uid)
    .filter((coach) => !coach.isSupervisor)
    .filter((coach) => {
      const needle = supervisorSearch.trim().toLowerCase();
      if (!needle) return true;
      return coach.displayName.toLowerCase().includes(needle) || coach.email.toLowerCase().includes(needle);
    })
    .sort((a, b) => {
      const aTime = toTimestamp(getCoachEffectiveExpiry(a)) ?? Number.MAX_SAFE_INTEGER;
      const bTime = toTimestamp(getCoachEffectiveExpiry(b)) ?? Number.MAX_SAFE_INTEGER;
      return aTime - bTime;
    });

  useEffect(() => {
    if (!isSupervisor && activeTab === 'supervisor') {
      setActiveTab('clients');
    }
  }, [isSupervisor, activeTab]);

  useEffect(() => {
    const applyLocationTab = () => {
      const hashTab = parseCoachTab(window.location.hash.replace(/^#/, ''));
      if (hashTab) {
        setActiveTab(hashTab);
      }
    };

    applyLocationTab();
    window.addEventListener('hashchange', applyLocationTab);
    return () => window.removeEventListener('hashchange', applyLocationTab);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const nextHash = `#${activeTab}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`);
    }
    window.localStorage.setItem(COACH_TAB_STORAGE_KEY, activeTab);
  }, [activeTab]);

  const customStyles: StylesConfig<ClientOption, boolean> = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        minHeight: 48,
        borderRadius: 12,
        borderColor: state.isFocused ? SELECT_THEME.accent : SELECT_THEME.border,
        boxShadow: state.isFocused ? `0 0 0 3px ${SELECT_THEME.accentFocus}` : 'none',
        backgroundColor: SELECT_THEME.surface,
        '&:hover': { borderColor: SELECT_THEME.accent },
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 12,
        overflow: 'hidden',
        zIndex: 50,
        backgroundColor: SELECT_THEME.surface,
        border: `1px solid ${SELECT_THEME.border}`,
      }),
      singleValue: (base) => ({
        ...base,
        color: SELECT_THEME.text,
      }),
      multiValue: (base) => ({
        ...base,
        backgroundColor: SELECT_THEME.surface2,
        borderRadius: 999,
      }),
      multiValueLabel: (base) => ({
        ...base,
        color: SELECT_THEME.text,
      }),
      multiValueRemove: (base) => ({
        ...base,
        color: SELECT_THEME.textMuted,
        ':hover': {
          backgroundColor: SELECT_THEME.accentSoft,
          color: SELECT_THEME.text,
        },
      }),
      placeholder: (base) => ({
        ...base,
        color: SELECT_THEME.textMuted,
      }),
      input: (base) => ({
        ...base,
        color: SELECT_THEME.text,
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? SELECT_THEME.accent : state.isFocused ? SELECT_THEME.accentSoft : SELECT_THEME.surface,
        color: state.isSelected ? SELECT_THEME.accentForeground : SELECT_THEME.text,
        cursor: 'pointer',
      }),
    }),
    [],
  );

  useEffect(() => {
    async function loadSelectedClientOnboarding() {
      if (!selectedClientId) {
        setSelectedClientOnboarding(null);
        return;
      }
      try {
        const onboardingSnap = await getUserPrivateDoc(selectedClientId, 'onboarding');
        setSelectedClientOnboarding((onboardingSnap.data() as OnboardingDoc | undefined) ?? null);
      } catch {
        setSelectedClientOnboarding(null);
      }
    }

    void loadSelectedClientOnboarding();
  }, [selectedClientId]);

  useEffect(() => {
    if (!selectedPlanId && coachPlanTemplates.length > 0 && !isCreatingPlan) {
      setSelectedPlanId(coachPlanTemplates[0].id);
    }
    if (selectedPlanId && !coachPlanTemplates.some((plan) => plan.id === selectedPlanId)) {
      setSelectedPlanId(coachPlanTemplates[0]?.id ?? '');
    }
  }, [selectedPlanId, isCreatingPlan, coachPlanTemplates.map((plan) => plan.id).join('|')]);

  useEffect(() => {
    if (!selectedPlan) {
      setIsPlanPreviewOpen(false);
    }
  }, [selectedPlan?.id]);

  useEffect(() => {
    if (!isPlanPreviewOpen) {
      setPreviewImageLoading({});
    }
  }, [isPlanPreviewOpen, selectedPlan?.id]);

  async function loadData(preferredSelectedClientId?: string) {
    if (!role) return;
    setLoading(true);
    try {
      const [usersSnap, videoLibrarySnap] = await Promise.all([
        listAssignedClientsAsCoach(user?.uid),
        getCoachVideoLibraryDoc().catch(() => null),
      ]);
      const allUsers = usersSnap.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as UserProfileDoc),
      }));
      const candidates = allUsers
        .sort((a, b) => {
          const aLabel = asText(a.displayName || a.email || a.id).toLowerCase();
          const bLabel = asText(b.displayName || b.email || b.id).toLowerCase();
          return aLabel.localeCompare(bLabel);
        });
      setRegisteredClients(candidates);
      const requestedClientId = preferredSelectedClientId === undefined ? selectedClientId : preferredSelectedClientId;
      const hasRequestedClient = requestedClientId
        ? candidates.some((item) => getClientAuthUid(item) === requestedClientId)
        : false;
      const nextSelectedClientId = hasRequestedClient ? requestedClientId : (candidates[0] ? getClientAuthUid(candidates[0]) : '');
      if (nextSelectedClientId !== selectedClientId) {
        setSelectedClientId(nextSelectedClientId);
      }
      if (!nextSelectedClientId) {
        setSelectedClientOnboarding(null);
      }
      const rawVideoItems = (videoLibrarySnap?.data() as {items?: unknown} | undefined)?.items;
      setVideoLibrary(normalizeVideoLibraryItems(rawVideoItems));

      try {
        const plansSnap = await listPlansForRole(role);
        setPlans(
          plansSnap.docs.map((docItem) => ({
            id: docItem.id,
            ...(docItem.data() as PlanDoc),
          })),
        );
      } catch (error) {
        setPlans([]);
        showError(toMessage(error));
      }
    } catch (error) {
      console.error('Coach action failed:', error);
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadData();
  }, [role, user?.uid]);

  useEffect(() => {
    if (!coachAccess || coachAccess.isSupervisor) return;
    if (coachAccess.isExpired) {
      void logoutCurrentUser().finally(() => {
        sessionStorage.setItem('bw_login_intent', 'coach');
        navigate('/auth', {replace: true});
      });
    }
  }, [coachAccess?.status, coachAccess?.isExpired, coachAccess?.isSupervisor]);

  useEffect(() => {
    async function loadAccessState() {
      if (!role || role === 'client') return;
      setLoadingCoachAccess(true);
      try {
        const access = await getCoachAccessState();
        setCoachAccess(access);
      } catch (error) {
        showError(toMessage(error));
      } finally {
        setLoadingCoachAccess(false);
      }
    }
    void loadAccessState();
  }, [role, user?.uid]);

  useEffect(() => {
    async function loadCoachPhone() {
      if (!user?.uid) return;
      try {
        const profileSnap = await getUserProfile(user.uid);
        const data = profileSnap.data() as { phone?: unknown } | undefined;
        const nextPhone = asText(data?.phone).trim();
        setCoachPhone(nextPhone);
        setCoachPhoneDraft(nextPhone);
      } catch {
        setCoachPhone('');
        setCoachPhoneDraft('');
      }
    }
    void loadCoachPhone();
  }, [user?.uid]);

  async function loadSupervisorCoaches() {
    if (!isSupervisor) return;
    try {
      const result = await listCoachesForSupervisor();
      setSupervisorCoaches(result.coaches ?? []);
    } catch (error) {
      showError(toMessage(error));
    }
  }

  useEffect(() => {
    void loadSupervisorCoaches();
  }, [isSupervisor, user?.uid]);

  function resetVideoLibraryDraft() {
    setVideoLibraryDraftName('');
    setVideoLibraryDraftUrl('');
    setVideoLibraryEditingId('');
  }

  function openVideoLibraryModal() {
    setVideoLibrarySearch('');
    resetVideoLibraryDraft();
    setIsVideoLibraryModalOpen(true);
  }

  function editVideoLibraryItem(item: VideoLibraryItemDraft) {
    setVideoLibraryEditingId(item.id);
    setVideoLibraryDraftName(item.name);
    setVideoLibraryDraftUrl(item.url);
    setIsVideoLibraryModalOpen(true);
  }

  async function persistVideoLibrary(nextItems: VideoLibraryItemDraft[], okMessage: string) {
    setVideoLibrarySaving(true);
    try {
      await saveCoachVideoLibrary(nextItems);
      setVideoLibrary(normalizeVideoLibraryItems(nextItems));
      showSuccess(okMessage);
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setVideoLibrarySaving(false);
    }
  }

  async function saveVideoLibraryItem() {
    const normalizedName = videoLibraryDraftName.trim();
    const normalizedUrl = videoLibraryDraftUrl.trim();
    if (!normalizedName) {
      showError('Inserisci un nome per il video.');
      return;
    }
    if (!normalizedUrl || !isYoutubeVideoUrl(normalizedUrl)) {
      showError('Inserisci un link YouTube valido da salvare nella raccolta.');
      return;
    }
    const duplicate = videoLibrary.find((item) => item.id !== videoLibraryEditingId && item.url === normalizedUrl);
    if (duplicate) {
      showError('Questo link è già presente nella raccolta video.');
      return;
    }
    const now = new Date().toISOString();
    const nextItems = videoLibraryEditingId
      ? videoLibrary.map((item) => (
        item.id === videoLibraryEditingId
          ? {...item, name: normalizedName, url: normalizedUrl, updatedAt: now}
          : item
      ))
      : [
        {
          id: createVideoLibraryItemId(),
          name: normalizedName,
          url: normalizedUrl,
          createdAt: now,
          updatedAt: now,
        },
        ...videoLibrary,
      ];

    await persistVideoLibrary(nextItems, videoLibraryEditingId ? 'Video aggiornato nella raccolta.' : 'Video aggiunto alla raccolta.');
    resetVideoLibraryDraft();
  }

  async function deleteVideoLibraryItem(item: VideoLibraryItemDraft) {
    const confirmed = window.confirm(`Vuoi rimuovere "${item.name}" dalla raccolta video?`);
    if (!confirmed) return;
    const nextItems = videoLibrary.filter((entry) => entry.id !== item.id);
    await persistVideoLibrary(nextItems, 'Video rimosso dalla raccolta.');
    if (videoLibraryEditingId === item.id) {
      resetVideoLibraryDraft();
    }
  }

  function openVideoLibraryPicker(exerciseIndex: number, movementType: ExerciseMovementType, label: string) {
    if (sortedVideoLibrary.length === 0) {
      openVideoLibraryModal();
      return;
    }
    setVideoLibraryPickerSearch('');
    setVideoLibraryTarget({exerciseIndex, movementType, label});
  }

  function applyVideoLibraryToExercise(item: VideoLibraryItemDraft) {
    if (!videoLibraryTarget) return;
    const currentExercise = exercises[videoLibraryTarget.exerciseIndex];
    updateExercise(videoLibraryTarget.exerciseIndex, {
      videoUrl: item.url,
      mediaUrl: item.url || currentExercise?.imageUrl || '',
    });
    setVideoLibraryTarget(null);
    showSuccess(`Video "${item.name}" collegato alla scheda.`);
  }

  async function runAction<T>(action: () => Promise<T>, okMessage: string): Promise<T | undefined> {
    setLoading(true);
    try {
      const result = await action();
      showSuccess(okMessage);
      await loadData();
      return result;
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
    return undefined;
  }

  function scrollPlanBuilderToTop() {
    window.requestAnimationFrame(() => {
      planBuilderScrollRef.current?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  function addExercise() {
    setExercises((prev) => [defaultExercise('exercise', nextExerciseDisplayOrder(prev)), ...prev]);
    setPlanBuilderSection('exercises');
    scrollPlanBuilderToTop();
  }

  function addStretching() {
    setExercises((prev) => [defaultExercise('stretching', nextExerciseDisplayOrder(prev)), ...prev]);
    setPlanBuilderSection('exercises');
    scrollPlanBuilderToTop();
  }

  function removeExercise(index: number) {
    setExercises((prev) => (prev.length <= 1 ? prev : renumberExerciseDisplayOrder(prev.filter((_, idx) => idx !== index))));
  }

  function resetExercise(index: number) {
    setExercises((prev) =>
      prev.map((item, idx) => (idx === index ? defaultExercise(item.movementType, item.displayOrder) : item)),
    );
  }

  function moveExerciseDisplayOrder(index: number, direction: -1 | 1) {
    setExercises((prev) => {
      const ordered = sortExercisesForDisplay(prev.map((exercise, builderIndex) => ({
        builderIndex,
        displayOrder: exercise.displayOrder,
      })));
      const currentPosition = ordered.findIndex((item) => item.builderIndex === index);
      const nextPosition = currentPosition + direction;
      if (currentPosition < 0 || nextPosition < 0 || nextPosition >= ordered.length) return prev;
      const nextOrdered = [...ordered];
      [nextOrdered[currentPosition], nextOrdered[nextPosition]] = [nextOrdered[nextPosition], nextOrdered[currentPosition]];
      const displayOrderByIndex = new Map(nextOrdered.map((item, position) => [item.builderIndex, position + 1]));
      return prev.map((item, builderIndex) => ({
        ...item,
        displayOrder: displayOrderByIndex.get(builderIndex) ?? item.displayOrder,
      }));
    });
  }

  function updateExercise(
    index: number,
    patch: Partial<ExerciseDraft>,
  ) {
    setExercises((prev) => prev.map((item, idx) => (idx === index ? {...item, ...patch} : item)));
  }

  function updateOnboardingField<K extends keyof OnboardingDraft>(key: K, value: OnboardingDraft[K]) {
    setOnboardingDraft((prev) => ({ ...prev, [key]: value }));
  }

  function reloadModalDraftFromServer() {
    if (!selectedPlan) {
      setPlanKind('series_reps');
      setPlanCircuitRounds(1);
      setPlanTitle('');
      setPlanWarmup('');
      setPlanWarmupVideoUrl('');
      setPlanWarmupImageUrl('');
      setPlanNotes('');
      setExercises([defaultExercise('exercise', 1)]);
      return;
    }
    setPlanKind(selectedPlan.kind === 'circuit' ? 'circuit' : 'series_reps');
    setPlanCircuitRounds(normalizeCircuitRounds(selectedPlan.circuitRounds, 1));
    setPlanTitle(selectedPlan.title ?? '');
    setPlanWarmup(asText((selectedPlan as {warmup?: unknown}).warmup));
    setPlanWarmupVideoUrl(getPlanWarmupVideoUrl(selectedPlan));
    setPlanWarmupImageUrl(getPlanWarmupImageUrl(selectedPlan));
    setPlanNotes(asText(selectedPlan.notes));
    const nextExercises = normalizePlanExercises(selectedPlan.exercises).filter((item) => item.name.trim().length > 0);
    setExercises(nextExercises.length > 0 ? renumberExerciseDisplayOrder(nextExercises) : [defaultExercise('exercise', 1)]);
  }

  function handlePlanKindChange(nextKind: 'series_reps' | 'circuit') {
    if (nextKind === planKind) return;
    const hasDraftData = exercises.some((exercise) => hasExerciseDraftData(exercise))
      || planNotes.trim().length > 0
      || planWarmup.trim().length > 0
      || planWarmupVideoUrl.trim().length > 0
      || planWarmupImageUrl.trim().length > 0;
    if (hasDraftData) {
      const confirmed = window.confirm(
        'Cambiando categoria di allenamento, i dati inseriti in questa scheda verranno cancellati. Vuoi continuare?',
      );
      if (!confirmed) return;
      setExercises([defaultExercise('exercise', 1)]);
      setPlanNotes('');
      setPlanWarmup('');
      setPlanWarmupVideoUrl('');
      setPlanWarmupImageUrl('');
    }
    setPlanKind(nextKind);
    if (nextKind === 'circuit') {
      setPlanCircuitRounds((prev) => normalizeCircuitRounds(prev, 1));
    }
  }

  function printPlanPreview() {
    if (!previewPlan) return;

    const pdfBaseName = buildPlanPdfBaseName({
      assignedClientIds: previewPlan.assignedClientIds,
      legacyClientId: previewPlan.clientId,
      title: previewPlan.title,
      clientLabelById,
    });
    const assignedNames = Array.isArray(previewPlan.assignedClientIds) && previewPlan.assignedClientIds.length > 0
      ? previewPlan.assignedClientIds.map((id) => clientLabelById[id] || id).join(', ')
      : 'Nessuno';

    const feedbackHtml = previewPlanWeightFeedback.length > 0
      ? `
      <section class="block">
        <h3>Feedback peso cliente</h3>
        ${previewPlanWeightFeedback
          .map(
            (item) => `
          <div class="sub">
            <p><strong>${escapeHtml(item.clientLabel)}</strong></p>
            <ul>
              ${item.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}
            </ul>
          </div>`,
          )
          .join('')}
      </section>`
      : '';

    const exercisesHtml = previewPlanDisplayItems.length > 0
      ? `
      <section class="section-block">
        <h3>Sequenza visualizzazione</h3>
        ${previewPlanDisplayItems
          .map(
            ({ exercise, index }, orderIndex) => `
          <article class="exercise">
            <div class="${exercise.imageUrl ? 'exercise-row' : ''}">
              ${exercise.imageUrl ? `<div class="exercise-media"><img src="${escapeHtml(exercise.imageUrl)}" alt="Media ${escapeHtml(movementTypeLabel(exercise.movementType))} ${orderIndex + 1}" /></div>` : ''}
              <div class="exercise-content">
                <p><strong>${escapeHtml(movementTypeLabel(exercise.movementType))}</strong> · Ordine ${orderIndex + 1}</p>
                <h4>${escapeHtml(exercise.name || `${movementTypeLabel(exercise.movementType)} ${orderIndex + 1}`)}</h4>
                <p class="meta">${
                  previewPlan.kind === 'circuit'
                    ? formatWorkTarget(exercise.workValue, exercise.repsUnit)
                    : `${exercise.sets || '-'} serie · ${formatSeriesTarget(exercise.reps, exercise.repsUnit)}`
                } · ${exercise.weightKg || 0} kg · ${formatRecoveryLabel(exercise.restSeconds)}</p>
                ${exercise.advancedMethod ? `<p><strong>Metodo:</strong> ${exercise.advancedMethod === 'rest_pause' ? 'Rest Pause' : 'Drop set'}</p>` : ''}
                ${
                  exercise.advancedMethod && (exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes).trim()
                    ? `<p><strong>Note metodo:</strong> ${escapeHtml(exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes)}</p>`
                    : ''
                }
                ${exercise.notes.trim() ? `<p><strong>Note:</strong> ${escapeHtml(exercise.notes)}</p>` : ''}
                ${exercise.videoUrl ? `<p><a href="${escapeHtml(exercise.videoUrl)}" target="_blank" rel="noreferrer">URL video: ${escapeHtml(exercise.videoUrl)}</a></p>` : ''}
              </div>
            </div>
          </article>`,
          )
          .join('')}
      </section>`
      : '';

    const warmupImageUrl = getPlanWarmupImageUrl(previewPlan);
    const warmupVideoUrl = getPlanWarmupVideoUrl(previewPlan);
    const warmupText = asText((previewPlan as { warmup?: unknown }).warmup).trim();
    const warmupBlockHtml = warmupText || warmupImageUrl || warmupVideoUrl
      ? `<div class="block">
    <div class="${warmupImageUrl ? 'warmup-row' : ''}">
      ${warmupImageUrl ? `<div class="warmup-media"><img src="${escapeHtml(warmupImageUrl)}" alt="Media riscaldamento" /></div>` : ''}
      <div class="warmup-content">
        ${warmupText ? `<p><strong>Riscaldamento:</strong> ${escapeHtml(warmupText)}</p>` : ''}
        ${warmupVideoUrl ? `<p><a href="${escapeHtml(warmupVideoUrl)}" target="_blank" rel="noreferrer">URL video riscaldamento: ${escapeHtml(warmupVideoUrl)}</a></p>` : ''}
      </div>
    </div>
  </div>`
      : '';

    const html = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(pdfBaseName)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 16px; color: #111; }
    h1, h2, h3, h4 { margin: 0 0 8px; }
    .block { border: 1px solid #e5e5e5; border-radius: 12px; padding: 12px; margin: 10px 0; }
    .sub { border-top: 1px solid #eee; margin-top: 8px; padding-top: 8px; }
    .section-block { margin: 18px 0; }
    .exercise { border: 1px solid #e5e5e5; border-radius: 12px; padding: 12px; margin: 10px 0; break-inside: avoid; }
    .exercise-row { display: flex; gap: 12px; align-items: flex-start; }
    .exercise-media { flex: 0 0 180px; width: 180px; }
    .exercise-content { flex: 1 1 auto; min-width: 0; }
    .warmup-row { display: flex; gap: 12px; align-items: flex-start; }
    .warmup-media { flex: 0 0 180px; width: 180px; }
    .warmup-content { flex: 1 1 auto; min-width: 0; }
    .meta { color: #444; margin: 4px 0 8px; }
    img { display: block; width: 100%; max-height: 260px; object-fit: cover; border-radius: 10px; margin-top: 8px; }
    .exercise-media img { margin-top: 0; }
    .warmup-media img { margin-top: 0; }
    a { color: #b31217; }
    .rounds-inline {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin: 12px 0 0;
    }
    .rounds-inline-label { font-size: 15px; font-weight: 500; color: #444; }
    .rounds-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 32px;
      padding: 6px 11px;
      border-radius: 10px;
      background: #050505;
      color: #fff;
      font: italic 900 18px/1 "Space Grotesk", system-ui, sans-serif;
      letter-spacing: -0.04em;
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.16);
    }
    @media (max-width: 720px) { .rounds-badge { font-size: 17px; padding: 6px 10px; } }
    @media print { .rounds-badge { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
    @media print { body { margin: 10mm; } .exercise-row { display: flex; } .warmup-row { display: flex; } }
  </style>
</head>
<body>
  <h1>Scheda</h1>
  <p><strong>Clienti assegnati:</strong> ${escapeHtml(assignedNames)}</p>
  <div class="block">
    <p><strong>Titolo programma:</strong> ${escapeHtml(previewPlan.title || 'Senza titolo')}</p>
    <p><strong>Tipo scheda:</strong> ${escapeHtml(previewPlan.kind === 'circuit' ? 'Circuito' : 'Serie e reps')}</p>
    ${previewPlan.kind === 'circuit' ? `<div class="rounds-inline"><span class="rounds-inline-label">Giri circuito:</span><span class="rounds-badge">${escapeHtml(formatCircuitRoundsLabel(previewPlan.circuitRounds))}</span></div>` : ''}
    ${asText(previewPlan.notes).trim() ? `<p><strong>Note coach:</strong> ${escapeHtml(asText(previewPlan.notes))}</p>` : ''}
  </div>
  ${warmupBlockHtml}
  ${feedbackHtml}
  ${exercisesHtml}
</body>
</html>`;

    void (async () => {
      try {
        await printHtmlDocument({
          html,
          title: pdfBaseName,
        });
      } catch (nextError) {
        if (nextError instanceof Error && nextError.message === 'POPUP_BLOCKED') {
          showError('Consenti l’apertura della finestra di stampa per salvare il PDF con il nome corretto.');
          return;
        }
        showError(toMessage(nextError));
      }
    })();
  }

  function openProfileModal() {
    if (!selectedClientId) {
      showError('Seleziona prima un cliente.');
      return;
    }

    const base = {
      name: asText(selectedClientProfile?.displayName).trim(),
      email: asText(selectedClientProfile?.email).trim(),
    };

    setOnboardingDraft(toOnboardingDraft(selectedClientOnboarding, base));
    setProfileStep(0);
    setIsProfileModalOpen(true);
  }

  function closeProfileModalWithoutSaving() {
    const base = {
      name: asText(selectedClientProfile?.displayName).trim(),
      email: asText(selectedClientProfile?.email).trim(),
    };
    setOnboardingDraft(toOnboardingDraft(selectedClientOnboarding, base));
    setProfileStep(0);
    setIsProfileModalOpen(false);
  }

  function validateCoachProfile(): string | null {
    if (!onboardingDraft.fullName.trim()) return 'Inserisci nome e cognome.';
    if (!onboardingDraft.email.trim()) return 'Inserisci e-mail.';
    if (!onboardingDraft.phone.trim()) return 'Inserisci numero di telefono.';
    if (!onboardingDraft.age.trim()) return 'Inserisci età.';
    if (!onboardingDraft.sex.trim()) return 'Inserisci sesso.';
    if (!onboardingDraft.heightCm.trim()) return 'Inserisci altezza.';
    if (!onboardingDraft.weightKg.trim()) return 'Inserisci peso.';
    return null;
  }

  async function saveCoachOnboarding() {
    if (!selectedClientId) {
      showError('Seleziona prima un cliente.');
      return;
    }

    const validationError = validateCoachProfile();
    if (validationError) {
      showError(validationError);
      return;
    }

    const payload: OnboardingDoc = {
      fullName: onboardingDraft.fullName.trim(),
      age: onboardingDraft.age.trim(),
      sex: onboardingDraft.sex.trim(),
      email: onboardingDraft.email.trim(),
      phone: onboardingDraft.phone.trim(),
      discoverySource: onboardingDraft.discoverySource.trim(),
      heightCm: onboardingDraft.heightCm.trim(),
      weightKg: onboardingDraft.weightKg.trim(),
      pastProgram: onboardingDraft.pastProgram.trim(),
      trainingFrequency: onboardingDraft.trainingFrequency.trim(),
      workoutDuration: onboardingDraft.workoutDuration.trim(),
      workoutLocation: onboardingDraft.workoutLocation.trim(),
      equipment: onboardingDraft.equipment.trim(),
      trainingTypeHistory: onboardingDraft.trainingTypeHistory.trim(),
      hasInjuries: onboardingDraft.hasInjuries.trim(),
      injuryDetails: onboardingDraft.injuryDetails.trim(),
      objectivePrimary: onboardingDraft.objectivePrimary.trim(),
      objectiveReason: onboardingDraft.objectiveReason.trim(),
      expectedTimeline: onboardingDraft.expectedTimeline.trim(),
      supportPreference: onboardingDraft.supportPreference.trim(),
      supportPreferenceOther: onboardingDraft.supportPreferenceOther.trim(),
      investmentRange: onboardingDraft.investmentRange.trim(),
      whatBlockedSoFar: onboardingDraft.whatBlockedSoFar.trim(),
      oneThingToImprove: onboardingDraft.oneThingToImprove.trim(),
      importanceScore: Number(onboardingDraft.importanceScore || 0),
      riskIfNoChange: onboardingDraft.riskIfNoChange.trim(),
      readiness: onboardingDraft.readiness.trim(),
      goal: onboardingDraft.objectivePrimary.trim(),
      experienceLevel: onboardingDraft.pastProgram.trim(),
      trainingDaysPerWeek: toTrainingDaysPerWeek(onboardingDraft.trainingFrequency),
      notes: onboardingDraft.notes.trim(),
      compiledBy: 'coach',
    };

    setLoading(true);
    try {
      await setClientOnboardingAsCoach(selectedClientId, payload as Record<string, unknown>);
      setSelectedClientOnboarding(payload);
      showSuccess('Anagrafica cliente salvata con successo.');
      setIsProfileModalOpen(false);
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  async function savePlan() {
    const normalizedTitle = planTitle.trim();
    if (!normalizedTitle) {
      showError('Inserisci un titolo per la scheda.');
      return;
    }

    const preparedExercises = exercises
      .map((item) => ({
        displayOrder: item.displayOrder,
        movementType: item.movementType,
        name: item.name.trim(),
        notes: item.notes.trim(),
        advancedMethod: item.advancedMethod || '',
        restPauseNotes: item.restPauseNotes.trim(),
        dropSetNotes: item.dropSetNotes.trim(),
        advancedMethodNotes: item.advancedMethod === 'rest_pause'
          ? item.restPauseNotes.trim()
          : item.advancedMethod === 'drop_set'
            ? item.dropSetNotes.trim()
            : '',
        sets: planKind === 'series_reps' ? Number(item.sets) || 0 : 0,
        reps: planKind === 'series_reps' ? Number(item.reps) || 0 : 0,
        repsUnit: item.repsUnit,
        workValue: planKind === 'circuit' ? Number(item.workValue) || 0 : 0,
        weightKg: Number(item.weightKg) || 0,
        restSeconds: Number(item.restSeconds) || 0,
        videoUrl: item.videoUrl.trim(),
        imageUrl: item.imageUrl.trim(),
        mediaUrl: (item.videoUrl || item.imageUrl || item.mediaUrl).trim(),
      }))
      .filter((item) => item.name.length > 0);

    if (preparedExercises.length === 0) {
      showError('Aggiungi almeno un esercizio con nome.');
      return;
    }

    if (editingPlan) {
      const updated = await runAction(
        () =>
          updatePlanAsCoach(editingPlan.id, {
            title: normalizedTitle,
            kind: planKind,
            circuitRounds: planKind === 'circuit' ? normalizeCircuitRounds(planCircuitRounds, 1) : null,
            warmup: planWarmup.trim(),
            warmupVideoUrl: planWarmupVideoUrl.trim(),
            warmupImageUrl: planWarmupImageUrl.trim(),
            warmupMediaUrl: (planWarmupVideoUrl || planWarmupImageUrl).trim(),
            notes: planNotes.trim(),
            status: 'active',
            exercises: preparedExercises,
          }),
        'Scheda aggiornata con successo.',
      );
      if (updated !== undefined) {
        setSelectedPlanId(editingPlan.id);
      }
      return;
    } else {
      const created = await runAction(
        () =>
          createPlanAsCoach({
            title: normalizedTitle,
            kind: planKind,
            circuitRounds: planKind === 'circuit' ? normalizeCircuitRounds(planCircuitRounds, 1) : null,
            warmup: planWarmup.trim(),
            warmupVideoUrl: planWarmupVideoUrl.trim(),
            warmupImageUrl: planWarmupImageUrl.trim(),
            warmupMediaUrl: (planWarmupVideoUrl || planWarmupImageUrl).trim(),
            notes: planNotes.trim(),
            status: 'active',
            exercises: preparedExercises,
          }),
        'Scheda creata.',
      );
      if (created?.id) setSelectedPlanId(created.id);
    }
    setIsCreatingPlan(false);
    setIsPlanModalOpen(false);
  }

  function openCreatePlanModal() {
    setIsCreatingPlan(true);
    setSelectedPlanId('');
    setPlanKind('series_reps');
    setPlanCircuitRounds(1);
    setPlanTitle('');
    setPlanWarmup('');
    setPlanWarmupVideoUrl('');
    setPlanWarmupImageUrl('');
    setPlanNotes('');
    setExercises([defaultExercise('exercise', 1)]);
    setPlanBuilderSection('details');
    setIsPlanModalOpen(true);
  }

  function openEditPlanModal(planId: string) {
    const plan = coachPlanTemplates.find((item) => item.id === planId);
    if (!plan) return;
    setIsCreatingPlan(false);
    setSelectedPlanId(plan.id);
    setPlanKind(plan.kind === 'circuit' ? 'circuit' : 'series_reps');
    setPlanCircuitRounds(normalizeCircuitRounds(plan.circuitRounds, 1));
    setPlanTitle(plan.title ?? '');
    setPlanWarmup(asText((plan as {warmup?: unknown}).warmup));
    setPlanWarmupVideoUrl(getPlanWarmupVideoUrl(plan));
    setPlanWarmupImageUrl(getPlanWarmupImageUrl(plan));
    setPlanNotes(asText(plan.notes));
    const nextExercises = normalizePlanExercises(plan.exercises).filter((item) => item.name.trim().length > 0);
    setExercises(nextExercises.length > 0 ? renumberExerciseDisplayOrder(nextExercises) : [defaultExercise('exercise', 1)]);
    setPlanBuilderSection('details');
    setIsPlanModalOpen(true);
  }

  async function openPlanPreview(planId: string) {
    const plan = coachPlanTemplates.find((item) => item.id === planId);
    if (!plan) return;
    setPreviewLoadingPlanId(planId);
    try {
      let syncOverrides: Record<string, Record<string, number>> | undefined;
      if (shouldSyncPlanWeightOverrides(plan)) {
        try {
          const syncResult = await syncPlanWeightOverridesForCoach(planId);
          syncOverrides = syncResult.clientWeightOverrides;
        } catch {
          // Best effort sync from legacy private weights to plan overrides.
        }
      }
      if (syncOverrides && Object.keys(syncOverrides).length > 0) {
        setPlans((prev) => prev.map((item) => (
          item.id === planId
            ? {...item, clientWeightOverrides: syncOverrides, weightOverridesBackfilledAt: new Date().toISOString()}
            : item
        )));
      }
      try {
        const freshSnap = await getPlanById(planId);
        if (freshSnap.exists()) {
          const freshPlan = { id: freshSnap.id, ...(freshSnap.data() as PlanDoc) };
          setPlans((prev) => prev.map((item) => (item.id === planId ? freshPlan : item)));
        }
      } catch {
        // If fresh fetch fails, open preview with local cached data.
      }
      setSelectedPlanId(planId);
      setIsPlanPreviewOpen(true);
    } finally {
      setPreviewLoadingPlanId('');
    }
  }

  function closePlanModalWithoutSaving() {
    setIsCreatingPlan(false);
    reloadModalDraftFromServer();
    setPlanBuilderSection('details');
    setIsPlanModalOpen(false);
  }

  async function onUploadMedia(index: number, file: File | null) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showError('Puoi caricare solo immagini. Per i video usa il campo URL.');
      return;
    }
    setUploadingExerciseIndex(index);
    try {
      const mediaScopeId = selectedPlan?.id || user?.uid || 'coach-draft';
      const url = await uploadWorkoutMediaAsCoach(mediaScopeId, file);
      updateExercise(index, { imageUrl: url, mediaUrl: url });
      showSuccess('Media caricato con successo.');
    } catch (error) {
      console.error('Media upload failed:', error);
      showError(toMessage(error));
    } finally {
      setUploadingExerciseIndex(null);
    }
  }

  async function onUploadWarmupMedia(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showError('Puoi caricare solo immagini. Per i video usa il campo URL.');
      return;
    }
    setUploadingWarmupMedia(true);
    try {
      const mediaScopeId = selectedPlan?.id || user?.uid || 'coach-draft';
      const url = await uploadWorkoutMediaAsCoach(mediaScopeId, file);
      setPlanWarmupImageUrl(url);
      showSuccess('Immagine riscaldamento caricata.');
    } catch (error) {
      console.error('Warmup media upload failed:', error);
      showError(toMessage(error));
    } finally {
      setUploadingWarmupMedia(false);
    }
  }

  async function deletePlan(planId: string) {
    const target = coachPlanTemplates.find((plan) => plan.id === planId);
    if (!target) return;
    const confirmDelete = window.confirm('Vuoi davvero eliminare tutta la scheda tecnica di questo cliente?');
    if (!confirmDelete) return;
    await runAction(() => deletePlanAsCoach(target.id), 'Scheda eliminata con successo.');
    setSelectedPlanId((prev) => (prev === target.id ? '' : prev));
    setIsPlanModalOpen(false);
    setIsPlanPreviewOpen(false);
  }

  async function duplicatePlan(planId: string) {
    const source = coachPlanTemplates.find((plan) => plan.id === planId);
    if (!source) return;
    const sourceExercises = normalizePlanExercises(source.exercises).map((exercise) => ({
      displayOrder: exercise.displayOrder,
      movementType: exercise.movementType,
      name: exercise.name,
      notes: exercise.notes,
      advancedMethod: exercise.advancedMethod,
      advancedMethodNotes: exercise.advancedMethodNotes,
      restPauseNotes: exercise.restPauseNotes,
      dropSetNotes: exercise.dropSetNotes,
      sets: exercise.sets,
      reps: exercise.reps,
      repsUnit: exercise.repsUnit,
      workValue: exercise.workValue,
      weightKg: exercise.weightKg,
      restSeconds: exercise.restSeconds,
      videoUrl: exercise.videoUrl,
      imageUrl: exercise.imageUrl,
      mediaUrl: exercise.mediaUrl,
    }));
    const duplicated = await runAction(
      () =>
        createPlanAsCoach({
          title: `${source.title || 'Scheda'} (Copia)`,
          kind: source.kind === 'circuit' ? 'circuit' : 'series_reps',
          warmup: asText(source.warmup),
          warmupVideoUrl: getPlanWarmupVideoUrl(source),
          warmupImageUrl: getPlanWarmupImageUrl(source),
          warmupMediaUrl: (getPlanWarmupVideoUrl(source) || getPlanWarmupImageUrl(source)).trim(),
          notes: asText(source.notes),
          status: source.status === 'archived' ? 'draft' : 'active',
          exercises: sourceExercises,
        }),
      'Scheda duplicata.',
    );
    if (duplicated?.id) setSelectedPlanId(duplicated.id);
  }

  async function assignPlan() {
    if (!selectedPlan) {
      showError('Seleziona prima una scheda.');
      return;
    }
    if (assigningClientIds.length === 0) {
      showError('Seleziona almeno un cliente da assegnare.');
      return;
    }
    await runAction(
      () => Promise.all(assigningClientIds.map((clientId) => assignPlanToClientAsCoach(selectedPlan.id, clientId))),
      assigningClientIds.length === 1 ? 'Scheda assegnata al cliente.' : 'Scheda assegnata ai clienti selezionati.',
    );
    setAssigningClientIds([]);
  }

  async function removeAssignedClient(clientId: string) {
    if (!selectedPlan) return;
    await runAction(
      () => removePlanAssignmentAsCoach(selectedPlan.id, clientId),
      'Assegnazione rimossa.',
    );
  }

  function assignmentStatus(plan: PlanDoc & { id: string }, clientId: string): { label: string; tone: 'success' | 'warning' | 'danger' } {
    const detail = plan.assignmentDetails?.[clientId];
    if (!detail || detail.mode !== 'timed') return { label: 'Permanente', tone: 'success' };
    const startIso = toIsoDateString(detail.startsAt);
    const iso = toIsoDateString(detail.expiresAt);
    if (!iso) return { label: 'Permanente', tone: 'success' };
    if (startIso) {
      const startsAt = new Date(startIso).getTime();
      if (!Number.isNaN(startsAt) && startsAt > Date.now()) {
        return { label: `Inizia il ${formatDate(startIso)}`, tone: 'warning' };
      }
    }
    const expiresAt = new Date(iso).getTime();
    if (Number.isNaN(expiresAt)) return { label: 'Permanente', tone: 'success' };
    const now = Date.now();
    if (expiresAt <= now) return { label: 'Scaduta', tone: 'danger' };
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    const tone = expiresAt - now <= oneWeekMs ? 'warning' : 'success';
    return { label: `Scade il ${formatDate(iso)}`, tone };
  }

  function openAssignmentModeModal(clientId: string) {
    if (!selectedPlan) return;
    const detail = selectedPlan.assignmentDetails?.[clientId];
    const isTimed = detail?.mode === 'timed';
    const weeks = typeof detail?.weeks === 'number' && detail.weeks > 0 ? detail.weeks : 4;
    const startsAtIso = toIsoDateString(detail?.startsAt);
    const startsAt = startsAtIso ? new Date(startsAtIso) : new Date();
    setAssignmentTargetClientId(clientId);
    setAssignmentModeDraft(isTimed ? 'timed' : 'permanent');
    setAssignmentWeeksDraft(String(weeks));
    setAssignmentStartDateDraft(toInputDate(startsAt));
    setIsAssignmentModeModalOpen(true);
  }

  function assignmentPreviewRange(): { from: string; to: string } | null {
    if (assignmentModeDraft !== 'timed') return null;
    const weeks = Number(assignmentWeeksDraft);
    if (!Number.isFinite(weeks) || weeks < 1) return null;
    const start = new Date(assignmentStartDateDraft);
    if (Number.isNaN(start.getTime())) return null;
    const end = new Date(start.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
    return {from: formatDate(start.toISOString()), to: formatDate(end.toISOString())};
  }

  async function saveAssignmentMode() {
    if (!selectedPlan || !assignmentTargetClientId) return;
    if (assignmentModeDraft === 'timed') {
      const weeks = Number(assignmentWeeksDraft);
      if (!Number.isFinite(weeks) || weeks < 1) {
        showError('Inserisci un numero settimane valido.');
        return;
      }
      const start = new Date(assignmentStartDateDraft);
      if (Number.isNaN(start.getTime())) {
        showError('Seleziona una data di inizio valida.');
        return;
      }
      await runAction(
        () => setPlanAssignmentDurationWithStartAsCoach(selectedPlan.id, assignmentTargetClientId, weeks, start.toISOString()),
        'Durata assegnazione aggiornata.',
      );
    } else {
      await runAction(
        () => setPlanAssignmentDurationWithStartAsCoach(selectedPlan.id, assignmentTargetClientId, null, null),
        'Assegnazione impostata come permanente.',
      );
    }
    setIsAssignmentModeModalOpen(false);
    setAssignmentTargetClientId('');
  }

  async function runSupervisorAction(uid: string, action: 'activate' | 'disable') {
    setSupervisorActionUid(uid);
    try {
      if (action === 'activate') {
        const targetCoach = supervisorCoaches.find((coach) => coach.uid === uid);
        if (targetCoach?.status === 'disabled') {
          await activateCoachSubscription(uid);
          showSuccess('Coach sbloccato con successo.');
        } else if (targetCoach?.status === 'active_paid') {
          await renewCoachSubscription(uid);
          showSuccess('Abbonamento rinnovato di 1 anno.');
        } else {
          await activateCoachSubscription(uid);
          showSuccess('Abbonamento attivato.');
        }
      } else {
        await disableCoachSubscription(uid);
        showSuccess('Abbonamento disattivato.');
      }
      await loadSupervisorCoaches();
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setSupervisorActionUid('');
    }
  }

  async function acceptTrialFromCoachPage() {
    setLoadingCoachAccess(true);
    try {
      await acceptCoachTrial();
      const state = await getCoachAccessState();
      setCoachAccess(state);
      showSuccess('Periodo di prova attivato.');
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoadingCoachAccess(false);
    }
  }

  async function handleDeleteProfile() {
    setDeletingProfile(true);
    try {
      await deleteMyProfile();
      await logoutCurrentUser().catch(() => undefined);
      navigate('/auth', {replace: true});
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setDeletingProfile(false);
      setIsDeleteModalOpen(false);
    }
  }

  async function handleDeleteSelectedClient() {
    if (!selectedClientProfile) return;
    const clientId = getClientAuthUid(selectedClientProfile);
    setDeletingClient(true);
    try {
      await deleteClientAsCoach(clientId);
      setIsClientDeleteModalOpen(false);
      showSuccess('Cliente eliminato correttamente.');
      await loadData('');
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setDeletingClient(false);
    }
  }

  async function saveCoachPhone() {
    const normalized = coachPhoneDraft.replace(/[^\d+]/g, '').trim();
    if (normalized.length < 8) {
      showError('Inserisci un numero WhatsApp valido.');
      return;
    }
    setSavingCoachPhone(true);
    try {
      const result = await updateMyCoachPhone(normalized);
      setCoachPhone(result.phone);
      setCoachPhoneDraft(result.phone);
      setEditingCoachPhone(false);
      showSuccess('Numero aggiornato. I clienti associati useranno subito il nuovo contatto.');
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setSavingCoachPhone(false);
    }
  }

  async function copyCoachCode() {
    const code = asText(coachAccess?.coachCode).trim();
    if (!code) {
      showError('Codice coach non disponibile.');
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
      showSuccess('Codice coach copiato.');
    } catch {
      showError('Copia non riuscita. Copia manualmente il codice.');
    }
  }

  return (
    <AppShell
      role={role === 'trainer' ? 'trainer' : 'admin'}
      subtitle=""
      title="Area Coach"
      sections={coachSections}
      activeSection={activeTab}
      onSectionChange={(nextTab) => setActiveTab(nextTab as CoachTabId)}
    >
      {coachAccess?.requiresTrialAcceptance ? (
        <section
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.currentTarget !== event.target) return;
            void logoutCurrentUser().finally(() => navigate('/auth', {replace: true}));
          }}
        >
          <article className="card modal-card fullscreen-gate" onClick={(event) => event.stopPropagation()}>
            <p className="eyebrow">Accesso Coach</p>
            <h2>Prova gratuita 15 giorni</h2>
            <p className="hero-sub">
              Per entrare nell&apos;area coach devi accettare il periodo gratuito di 15 giorni. Al termine sarà necessario attivare l&apos;abbonamento.
            </p>
            <button className="btn" type="button" disabled={loadingCoachAccess} onClick={() => void acceptTrialFromCoachPage()}>
              {loadingCoachAccess ? 'Attivazione...' : 'Accetta e continua'}
            </button>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => {
                void logoutCurrentUser().finally(() => navigate('/auth', {replace: true}));
              }}
            >
              Esci
            </button>
          </article>
        </section>
      ) : null}

      {activeTab === 'code' ? (
        <article className="card">
          <h2>Il tuo codice coach</h2>
          <p className="hero-sub">Invia questo codice al cliente: è obbligatorio per associarlo a te in onboarding.</p>
          <div className="coach-code-wrap">
            <p className="coach-code">{coachAccess?.coachCode || 'Caricamento...'}</p>
            <button
              className="icon-btn coach-copy-btn"
              type="button"
              aria-label="Copia codice coach"
              title="Copia codice coach"
              onClick={() => void copyCoachCode()}
            >
              ⧉
            </button>
          </div>
          {loadingCoachAccess ? <p className="hint">Sto verificando il tuo accesso...</p> : null}
          <div className="client-info-block">
            <div className="exercise-head">
              <h3>Numero WhatsApp coach</h3>
              {!editingCoachPhone ? (
                <button
                  className="icon-btn"
                  type="button"
                  aria-label="Modifica numero coach"
                  title="Modifica numero coach"
                  onClick={() => setEditingCoachPhone(true)}
                >
                  ✎
                </button>
              ) : null}
            </div>
            {!editingCoachPhone ? (
              <p className="hint"><strong>{coachPhone || 'Non configurato'}</strong></p>
            ) : (
              <>
                <label>
                  Numero telefono / WhatsApp
                  <input
                    type="tel"
                    value={coachPhoneDraft}
                    onChange={(event) => setCoachPhoneDraft(event.target.value)}
                    placeholder="Es. 3405882404"
                  />
                </label>
                <div className="action-row-split">
                  <button
                    className="btn btn-ghost"
                    type="button"
                    disabled={savingCoachPhone}
                    onClick={() => {
                      setCoachPhoneDraft(coachPhone);
                      setEditingCoachPhone(false);
                    }}
                  >
                    Annulla
                  </button>
                  <button className="btn btn-primary" type="button" disabled={savingCoachPhone} onClick={() => void saveCoachPhone()}>
                    {savingCoachPhone ? 'Salvataggio...' : 'Salva'}
                  </button>
                </div>
              </>
            )}
          </div>
          {coachAccess?.isSupervisor ? (
            <p className="hint">Account supervisor: accesso sempre attivo, senza trial.</p>
          ) : (
            <>
              <p className="hint">
                Stato accesso: <strong>{accessStatusLabel(coachAccess?.status)}</strong>
                {' · '}Scadenza: <strong>{formatDate(coachAccess?.expiresAt ?? coachAccess?.trialEndsAt ?? coachAccess?.subscriptionEndsAt)}</strong>
              </p>
              <div className="divider" />
              <h3>Elimina profilo</h3>
              <p className="hint">
                Se elimini il profilo coach perderai accesso, abbonamento, clienti associati e tutti i dati collegati.
              </p>
              <button className="btn btn-danger" type="button" onClick={() => setIsDeleteModalOpen(true)}>
                Elimina il mio profilo
              </button>
            </>
          )}
        </article>
      ) : null}

      {isSupervisor && activeTab === 'supervisor' ? (
        <article className="card">
          <h2>Gestione coach (Supervisor)</h2>
          <label>
            Cerca coach per nome o email
            <input
              value={supervisorSearch}
              onChange={(event) => setSupervisorSearch(event.target.value)}
              placeholder="Es. Mario Rossi o mario@gmail.com"
            />
          </label>
          <div className="supervisor-list">
            {filteredSupervisorCoaches.map((coach) => {
              const effectiveExpiry = getCoachEffectiveExpiry(coach);
              const expiryChip = coachExpiryChip(coach.status, effectiveExpiry);
              return (
                <article className="supervisor-row" key={coach.uid}>
                  <div>
                    <p><strong>{coach.displayName || 'Coach senza nome'}</strong></p>
                    <p className="hint">{coach.email}</p>
                    <p className="hint">Codice: {coach.coachCode || '-'}</p>
                    <p className="hint">Stato: {accessStatusLabel(coach.isSupervisor ? 'supervisor_active' : coach.status)}</p>
                    <p className="hint">Scadenza: {formatDate(effectiveExpiry)}</p>
                    {expiryChip ? <span className={`status-chip status-chip-${expiryChip.tone}`.trim()}>{expiryChip.label}</span> : null}
                  </div>
                  <div className="supervisor-actions">
                    <button
                      className="btn btn-ghost"
                      type="button"
                      disabled={coach.isSupervisor || supervisorActionUid === coach.uid}
                      onClick={() => void runSupervisorAction(coach.uid, 'activate')}
                    >
                      {coach.status === 'disabled' ? 'Sblocca' : coach.status === 'active_paid' ? 'Rinnova +1 anno' : 'Attiva'}
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      disabled={coach.isSupervisor || supervisorActionUid === coach.uid}
                      onClick={() => void runSupervisorAction(coach.uid, 'disable')}
                    >
                      Disattiva
                    </button>
                  </div>
                </article>
              );
            })}
            {filteredSupervisorCoaches.length === 0 ? (
              <article className="supervisor-row">
                <p className="hint">
                  Nessun altro coach disponibile al momento. Quando un coach si registra, lo vedrai qui con stato e scadenza.
                </p>
              </article>
            ) : null}
          </div>
        </article>
      ) : null}

      {activeTab === 'clients' || activeTab === 'plans' ? (
      <article className="card">
        <h2>{activeTab === 'plans' ? 'Schede tecniche' : 'Gestione cliente'}</h2>
        {activeTab === 'clients' ? (
          <label>
            Clienti registrati
            <Select<ClientOption, false>
              styles={customStyles}
              options={clientOptions}
              value={selectedClientOption}
              onChange={(option) => setSelectedClientId(option?.value ?? '')}
              placeholder={registeredClients.length === 0 ? 'Nessun cliente disponibile' : 'Cerca cliente per nome...'}
              noOptionsMessage={() => 'Nessun risultato'}
              isSearchable
            />
          </label>
        ) : null}
        {activeTab !== 'plans' ? (
          <button className="btn btn-ghost" type="button" onClick={() => void loadData()}>
            Aggiorna dati
          </button>
        ) : null}

        {activeTab === 'clients' && registeredClients.length === 0 ? (
          <article className="card card-dashed">
            <h2>Nessun cliente associato</h2>
            <p className="hint">
              Al momento non hai clienti legati al tuo codice coach. Quando un cliente inserisce il tuo codice in onboarding, apparirà qui.
            </p>
          </article>
        ) : (
          <>
            {activeTab === 'clients' ? (
            <article className="card card-dashed">
              <h2>Anagrafica cliente</h2>
              <p className="hint">Sola lettura: l&apos;anagrafica viene compilata e aggiornata direttamente dal cliente nella sua area profilo.</p>
              <div className="action-row-split">
                {selectedClientWhatsappUrl ? (
                  <a className="btn btn-whatsapp" href={selectedClientWhatsappUrl} target="_blank" rel="noreferrer">
                    Scrivi al cliente su WhatsApp
                  </a>
                ) : (
                  <p className="hint">Numero WhatsApp cliente non disponibile.</p>
                )}
                <button
                  className="btn btn-danger"
                  type="button"
                  disabled={!selectedClientProfile}
                  onClick={() => setIsClientDeleteModalOpen(true)}
                >
                  Elimina cliente
                </button>
              </div>

              <div className="client-info-block">
                <h3>Anagrafica</h3>
                <p className="hint"><strong>Nome:</strong> {onboardingValue(selectedClientOnboarding?.fullName)}</p>
                <p className="hint"><strong>Età:</strong> {onboardingValue(selectedClientOnboarding?.age)}</p>
                <p className="hint"><strong>Sesso:</strong> {onboardingValue(selectedClientOnboarding?.sex)}</p>
                <p className="hint"><strong>Email:</strong> {onboardingValue(selectedClientOnboarding?.email)}</p>
                <p className="hint"><strong>Telefono:</strong> {onboardingValue(selectedClientOnboarding?.phone)}</p>
                <p className="hint"><strong>Come ci ha conosciuto:</strong> {onboardingValue(selectedClientOnboarding?.discoverySource)}</p>
              </div>

              <div className="client-info-block">
                <h3>Stato fisico e allenamento</h3>
                <p className="hint"><strong>Altezza:</strong> {onboardingValue(selectedClientOnboarding?.heightCm)} cm</p>
                <p className="hint"><strong>Peso:</strong> {onboardingValue(selectedClientOnboarding?.weightKg)} kg</p>
                <p className="hint"><strong>Esperienza programmi:</strong> {onboardingValue(selectedClientOnboarding?.pastProgram || selectedClientOnboarding?.experienceLevel)}</p>
                <p className="hint"><strong>Allenamenti settimanali:</strong> {onboardingValue(selectedClientOnboarding?.trainingFrequency || selectedClientOnboarding?.trainingDaysPerWeek)}</p>
                <p className="hint"><strong>Durata sessione:</strong> {onboardingValue(selectedClientOnboarding?.workoutDuration)}</p>
                <p className="hint"><strong>Luogo allenamento:</strong> {onboardingValue(selectedClientOnboarding?.workoutLocation)}</p>
                <p className="hint"><strong>Attrezzatura:</strong> {onboardingValue(selectedClientOnboarding?.equipment)}</p>
                <p className="hint"><strong>Allenamenti svolti:</strong> {onboardingValue(selectedClientOnboarding?.trainingTypeHistory)}</p>
                <p className="hint"><strong>Infortuni/problemi:</strong> {onboardingValue(selectedClientOnboarding?.hasInjuries)}</p>
                <p className="hint"><strong>Dettagli infortuni:</strong> {onboardingValue(selectedClientOnboarding?.injuryDetails)}</p>
              </div>

              <div className="client-info-block">
                <h3>Obiettivi</h3>
                <p className="hint"><strong>Obiettivo principale:</strong> {onboardingValue(selectedClientOnboarding?.objectivePrimary || selectedClientOnboarding?.goal)}</p>
                <p className="hint"><strong>Perché:</strong> {onboardingValue(selectedClientOnboarding?.objectiveReason)}</p>
                <p className="hint"><strong>Cosa ti ha bloccato nel raggiungere l'obiettivo:</strong> {onboardingValue(selectedClientOnboarding?.whatBlockedSoFar)}</p>
                <p className="hint"><strong>Obiettivo nei prossimi 3 mesi:</strong> {onboardingValue(selectedClientOnboarding?.oneThingToImprove)}</p>
                <p className="hint"><strong>Importanza obiettivo:</strong> {onboardingValue(selectedClientOnboarding?.importanceScore)} / 10</p>
              </div>
            </article>
            ) : null}

            {activeTab === 'plans' ? (
              <>
                <p className="hint">
                  {coachPlanTemplates.length > 0
                    ? `Hai ${coachPlanTemplates.length} scheda/e create: ora le trovi raggruppate per cliente e ordinate cronologicamente.`
                    : 'Non hai ancora schede create: inizia con una nuova scheda.'}
                </p>

                <article className="card card-outline video-library-card">
                  <div className="video-library-card-head">
                    <div className="video-library-card-copy">
                      <h3>Raccolta video</h3>
                      <p className="hint">
                        {sortedVideoLibrary.length > 0
                          ? `${sortedVideoLibrary.length} video YouTube salvati: puoi riusarli quando compili un esercizio.`
                          : 'Salva una volta i link YouTube che usi spesso e richiamali mentre compili la scheda.'}
                      </p>
                    </div>
                    <button className="btn btn-ghost" type="button" onClick={openVideoLibraryModal}>
                      Apri raccolta
                    </button>
                  </div>
                </article>

                <div className="supervisor-actions">
                  <button className="btn" disabled={loading} onClick={openCreatePlanModal} type="button">
                    Crea nuova scheda
                  </button>
                </div>
                {coachPlanTemplates.length > 0 ? (
                  <div className="plan-groups">
                    {groupedPlanBuckets.map((group, groupIndex) => (
                      <details className="plan-group-accordion" key={group.id} open={groupIndex === 0}>
                        <summary className="plan-group-summary">
                          <div className="plan-group-summary-main">
                            <strong>{group.label}</strong>
                            <p className="hint">
                              {group.kind === 'unassigned'
                                ? `${group.plans.length} ${group.plans.length === 1 ? 'scheda pronta da assegnare' : 'schede pronte da assegnare'}`
                                : `${group.plans.length} ${group.plans.length === 1 ? 'scheda assegnata' : 'schede assegnate'}`}
                            </p>
                          </div>
                          <span className="plan-group-summary-count">{group.plans.length}</span>
                        </summary>
                        <div className="plan-group-body">
                          <div className="plan-carousel">
                            {group.plans.map((plan) => (
                              <article className="card card-outline plan-card" key={`${group.id}-${plan.id}`}>
                                <div className="exercise-head">
                                  <h3>{plan.title || 'Scheda senza titolo'}</h3>
                                  <button
                                    className="icon-btn"
                                    type="button"
                                    aria-label="Duplica scheda"
                                    title="Duplica scheda"
                                    onClick={() => void duplicatePlan(plan.id)}
                                  >
                                    ⧉
                                  </button>
                                </div>
                                <p className="hint">Creata: {formatDate(getPlanCreatedAtIso(plan))}</p>
                                <p className="hint">Tipo: {plan.kind === 'circuit' ? 'Circuito' : 'Serie e reps'}</p>
                                {(() => {
                                  const groupedMovements = splitExercisesByMovementType(normalizePlanExercises(plan.exercises));
                                  return (
                                    <p className="hint">
                                      Esercizi: {groupedMovements.exercises.length} · Stretching: {groupedMovements.stretchings.length}
                                    </p>
                                  );
                                })()}
                                <p className="hint">
                                  {Array.isArray(plan.assignedClientIds) && plan.assignedClientIds.length > 1
                                    ? `Condivisa con altri ${plan.assignedClientIds.length - 1} ${plan.assignedClientIds.length - 1 === 1 ? 'cliente' : 'clienti'}`
                                    : group.kind === 'unassigned'
                                      ? 'Non ancora assegnata'
                                      : 'Assegnata a questo cliente'}
                                </p>
                                <p className="hint">Modifiche peso clienti: {getPlanWeightFeedbackCount(plan, clientLabelById)}</p>
                                <div className="plan-card-actions">
                                  <button
                                    className="btn btn-ghost"
                                    disabled={loading}
                                    onClick={() => navigate(`/app/coach/plan/${plan.id}/preview`)}
                                    type="button"
                                  >
                                    Visualizza
                                  </button>
                                  <button className="btn" disabled={loading} onClick={() => openEditPlanModal(plan.id)} type="button">
                                    Modifica
                                  </button>
                                  <button className="btn btn-danger" disabled={loading} onClick={() => void deletePlan(plan.id)} type="button">
                                    Elimina
                                  </button>
                                </div>
                              </article>
                            ))}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                ) : (
                  <article className="card card-dashed">
                    <p className="hint">Nessuna scheda creata al momento.</p>
                  </article>
                )}
              </>
            ) : null}
          </>
        )}
      </article>
      ) : null}

      {isVideoLibraryModalOpen ? (
        <section className="modal-overlay modal-overlay-level-2" role="dialog" aria-modal="true" onClick={(event) => {
          if (event.currentTarget !== event.target) return;
          setIsVideoLibraryModalOpen(false);
          resetVideoLibraryDraft();
        }}>
          <article className="card modal-card video-library-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="exercise-head">
              <div>
                <h2>Raccolta video</h2>
                <p className="hero-sub">Salva qui i link YouTube che usi spesso e richiamali mentre compili gli esercizi.</p>
              </div>
              <button
                className="icon-btn"
                type="button"
                aria-label="Chiudi raccolta video"
                onClick={() => {
                  setIsVideoLibraryModalOpen(false);
                  resetVideoLibraryDraft();
                }}
              >
                ✕
              </button>
            </div>

            <div className="video-library-manage-grid">
              <div className="video-library-form">
                <label>
                  Nome video *
                  <input
                    value={videoLibraryDraftName}
                    onChange={(event) => setVideoLibraryDraftName(event.target.value)}
                    placeholder="Es. Squat bilanciere"
                  />
                </label>
                <label>
                  Link YouTube *
                  <input
                    value={videoLibraryDraftUrl}
                    onChange={(event) => setVideoLibraryDraftUrl(event.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </label>
                <div className="action-row-split">
                  {videoLibraryEditingId ? (
                    <button className="btn btn-ghost" type="button" onClick={resetVideoLibraryDraft}>
                      Annulla modifica
                    </button>
                  ) : null}
                  <button className="btn btn-primary" type="button" disabled={videoLibrarySaving} onClick={() => void saveVideoLibraryItem()}>
                    {videoLibrarySaving ? 'Salvataggio...' : videoLibraryEditingId ? 'Salva modifiche' : 'Aggiungi video'}
                  </button>
                </div>
              </div>

              <div className="video-library-list-panel">
                <label>
                  Cerca nella raccolta
                  <input
                    value={videoLibrarySearch}
                    onChange={(event) => setVideoLibrarySearch(event.target.value)}
                    placeholder="Cerca per nome o link..."
                  />
                </label>

                {filteredVideoLibrary.length > 0 ? (
                  <ul className="video-library-list">
                    {filteredVideoLibrary.map((item) => (
                      <li key={item.id} className="video-library-item">
                        <div className="video-library-item-main">
                          <strong>{item.name}</strong>
                          <a href={item.url} target="_blank" rel="noreferrer" className="hint video-library-item-link">
                            {item.url}
                          </a>
                        </div>
                        <div className="video-library-item-actions">
                          <button className="btn btn-ghost" type="button" onClick={() => editVideoLibraryItem(item)}>
                            Modifica
                          </button>
                          <button className="icon-btn assigned-client-remove-btn icon-btn-danger" type="button" aria-label={`Elimina ${item.name}`} onClick={() => void deleteVideoLibraryItem(item)}>
                            🗑
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <article className="card card-dashed video-library-empty">
                    <p className="hint">
                      {sortedVideoLibrary.length > 0
                        ? 'Nessun video trovato con questa ricerca.'
                        : 'Non hai ancora video salvati. Aggiungi il primo link YouTube qui sopra.'}
                    </p>
                  </article>
                )}
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {videoLibraryTarget ? (
        <section className="modal-overlay modal-overlay-level-2" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setVideoLibraryTarget(null)}>
          <article className="card modal-card video-library-picker-card" onClick={(event) => event.stopPropagation()}>
            <div className="exercise-head">
              <div>
                <h2>Scegli un video</h2>
                <p className="hero-sub">
                  {videoLibraryTarget.movementType === 'stretching' ? 'Stretching' : 'Esercizio'}: {videoLibraryTarget.label}
                </p>
              </div>
              <button className="icon-btn" type="button" aria-label="Chiudi selezione video" onClick={() => setVideoLibraryTarget(null)}>
                ✕
              </button>
            </div>

            <label>
              Cerca video salvato
              <input
                value={videoLibraryPickerSearch}
                onChange={(event) => setVideoLibraryPickerSearch(event.target.value)}
                placeholder="Cerca per nome o link..."
              />
            </label>

            {pickerVideoLibrary.length > 0 ? (
              <ul className="video-library-list">
                {pickerVideoLibrary.map((item) => (
                  <li key={`picker-${item.id}`} className="video-library-item">
                    <div className="video-library-item-main">
                      <strong>{item.name}</strong>
                      <p className="hint video-library-item-link">{item.url}</p>
                    </div>
                    <div className="video-library-item-actions">
                      <button className="btn btn-primary" type="button" onClick={() => applyVideoLibraryToExercise(item)}>
                        Usa video
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <article className="card card-dashed video-library-empty">
                <p className="hint">
                  {sortedVideoLibrary.length > 0
                    ? 'Nessun video trovato con questa ricerca.'
                    : 'Non hai ancora una raccolta video. Aprila e salva i link YouTube che usi più spesso.'}
                </p>
              </article>
            )}

            <div className="action-row-split">
              <button className="btn btn-ghost" type="button" onClick={() => {
                setVideoLibraryTarget(null);
                openVideoLibraryModal();
              }}>
                Gestisci raccolta
              </button>
              <button className="btn btn-ghost" type="button" onClick={() => setVideoLibraryTarget(null)}>
                Chiudi
              </button>
            </div>
          </article>
        </section>
      ) : null}

      {isProfileModalOpen ? (
        <section className="modal-overlay" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && closeProfileModalWithoutSaving()}>
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <h2>Anagrafica completa cliente</h2>
            <p className="hero-sub">Step {profileStep + 1} di {PROFILE_STEPS.length} · Completamento {profileProgress}%</p>
            <div className="onboarding-progress" aria-hidden="true">
              <div className="onboarding-progress-bar" style={{ width: `${profileProgress}%` }} />
            </div>

            <div className="step-tabs">
              {PROFILE_STEPS.map((label, index) => (
                <button
                  key={label}
                  className={`step-tab ${profileStep === index ? 'step-tab-active' : ''}`.trim()}
                  type="button"
                  onClick={() => setProfileStep(index)}
                >
                  {label}
                </button>
              ))}
            </div>

            {profileStep === 0 ? (
              <div className="modal-grid">
                <label>Nome e cognome *<input value={onboardingDraft.fullName} onChange={(event) => updateOnboardingField('fullName', event.target.value)} /></label>
                <label>Età *<input type="number" min={12} max={99} onFocus={selectNumericInputContents} value={onboardingDraft.age} onChange={(event) => updateOnboardingField('age', normalizeNumericRawInput(event.target.value))} /></label>
                <label>Sesso *<input value={onboardingDraft.sex} onChange={(event) => updateOnboardingField('sex', event.target.value)} /></label>
                <label>E-mail *<input type="email" value={onboardingDraft.email} onChange={(event) => updateOnboardingField('email', event.target.value)} /></label>
                <label>Telefono *<input type="tel" value={onboardingDraft.phone} onChange={(event) => updateOnboardingField('phone', event.target.value)} /></label>
                <label>Come ci ha conosciuto<input value={onboardingDraft.discoverySource} onChange={(event) => updateOnboardingField('discoverySource', event.target.value)} /></label>
              </div>
            ) : null}

            {profileStep === 1 ? (
              <div className="modal-grid">
                <label>Altezza (cm) *<input type="number" min={100} max={250} onFocus={selectNumericInputContents} value={onboardingDraft.heightCm} onChange={(event) => updateOnboardingField('heightCm', normalizeNumericRawInput(event.target.value))} /></label>
                <label>Peso (kg) *<input type="number" min={30} max={250} onFocus={selectNumericInputContents} value={onboardingDraft.weightKg} onChange={(event) => updateOnboardingField('weightKg', normalizeNumericRawInput(event.target.value))} /></label>
                <label>Programmi precedenti<input value={onboardingDraft.pastProgram} onChange={(event) => updateOnboardingField('pastProgram', event.target.value)} placeholder="Es. Si con coach online" /></label>
                <label>Frequenza allenamenti<input value={onboardingDraft.trainingFrequency} onChange={(event) => updateOnboardingField('trainingFrequency', event.target.value)} placeholder="Es. 3-4 a settimana" /></label>
                <label>Durata allenamento<input value={onboardingDraft.workoutDuration} onChange={(event) => updateOnboardingField('workoutDuration', event.target.value)} placeholder="Es. 45 minuti" /></label>
                <label>Dove si allena<input value={onboardingDraft.workoutLocation} onChange={(event) => updateOnboardingField('workoutLocation', event.target.value)} /></label>
                <label>Attrezzatura disponibile<input value={onboardingDraft.equipment} onChange={(event) => updateOnboardingField('equipment', event.target.value)} /></label>
                <label>Allenamenti fatti<textarea value={onboardingDraft.trainingTypeHistory} onChange={(event) => updateOnboardingField('trainingTypeHistory', event.target.value)} /></label>
                <label>Infortuni/problemi<input value={onboardingDraft.hasInjuries} onChange={(event) => updateOnboardingField('hasInjuries', event.target.value)} placeholder="Si/No" /></label>
                <label>Dettagli infortuni<textarea value={onboardingDraft.injuryDetails} onChange={(event) => updateOnboardingField('injuryDetails', event.target.value)} /></label>
              </div>
            ) : null}

            {profileStep === 2 ? (
              <div className="modal-grid">
                <label>Obiettivo principale<input value={onboardingDraft.objectivePrimary} onChange={(event) => updateOnboardingField('objectivePrimary', event.target.value)} /></label>
                <label>Perché questo obiettivo?<textarea value={onboardingDraft.objectiveReason} onChange={(event) => updateOnboardingField('objectiveReason', event.target.value)} /></label>
                <label>Cosa ti ha bloccato nel raggiungere l'obiettivo?<textarea value={onboardingDraft.whatBlockedSoFar} onChange={(event) => updateOnboardingField('whatBlockedSoFar', event.target.value)} /></label>
                <label>Obiettivo nei prossimi 3 mesi<textarea value={onboardingDraft.oneThingToImprove} onChange={(event) => updateOnboardingField('oneThingToImprove', event.target.value)} /></label>
                <label>Importanza obiettivo (1-10)<input type="number" min={1} max={10} onFocus={selectNumericInputContents} value={onboardingDraft.importanceScore} onChange={(event) => updateOnboardingField('importanceScore', normalizeNumericRawInput(event.target.value))} /></label>
              </div>
            ) : null}

            <div className="onboarding-actions">
              <button className="btn btn-ghost" type="button" disabled={profileStep === 0} onClick={() => setProfileStep((prev) => Math.max(prev - 1, 0))}>
                Indietro
              </button>
              {profileStep < PROFILE_STEPS.length - 1 ? (
                <button className="btn" type="button" onClick={() => setProfileStep((prev) => Math.min(prev + 1, PROFILE_STEPS.length - 1))}>
                  Continua
                </button>
              ) : (
                <button className="btn" type="button" onClick={() => void saveCoachOnboarding()} disabled={loading}>
                  {loading ? 'Salvataggio...' : 'Salva'}
                </button>
              )}
            </div>

            <button className="btn btn-ghost" type="button" onClick={closeProfileModalWithoutSaving}>
              Chiudi
            </button>
          </article>
        </section>
      ) : null}

      {isPlanModalOpen ? (
        <section className="modal-overlay plan-builder-overlay" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && closePlanModalWithoutSaving()}>
          <article className="card modal-card plan-builder-modal" ref={planBuilderScrollRef} onClick={(event) => event.stopPropagation()}>
            <div className="plan-builder-sticky">
              <div className="plan-builder-header">
                <div className="plan-builder-heading">
                  <p className="eyebrow">{editingPlan ? 'Modifica scheda' : 'Nuova scheda'}</p>
                  <h2>{editingPlan ? 'Modifica scheda' : 'Compila la scheda'}</h2>
                  <p className="hint">Builder mobile ottimizzato: dettagli separati dagli esercizi e salvataggio sempre visibile.</p>
                </div>
                <div className="plan-builder-header-actions">
                  <button
                    className="btn btn-primary mobile-only"
                    type="button"
                    disabled={loading || isUploadingMedia}
                    onClick={() => void savePlan()}
                  >
                    {isUploadingMedia ? 'Attendi...' : 'Salva'}
                  </button>
                  <button className="icon-btn" type="button" onClick={closePlanModalWithoutSaving} aria-label="Chiudi editor scheda" title="Chiudi">
                    ✕
                  </button>
                </div>
              </div>

              <div className="step-tabs plan-builder-mobile-tabs mobile-only">
                <button
                  className={`step-tab ${planBuilderSection === 'details' ? 'step-tab-active' : ''}`.trim()}
                  type="button"
                  onClick={() => setPlanBuilderSection('details')}
                >
                  Scheda
                </button>
                <button
                  className={`step-tab ${planBuilderSection === 'exercises' ? 'step-tab-active' : ''}`.trim()}
                  type="button"
                  onClick={() => setPlanBuilderSection('exercises')}
                >
                  Contenuti ({exercises.length})
                </button>
              </div>

              {planBuilderSection === 'exercises' ? (
                <div className="plan-builder-sticky-actions mobile-only">
                  <button className="btn btn-ghost" type="button" onClick={addExercise}>
                    + Esercizio
                  </button>
                  <button className="btn btn-ghost" type="button" onClick={addStretching}>
                    + Stretching
                  </button>
                </div>
              ) : null}
            </div>

            <div className={`plan-builder-panel ${planBuilderSection !== 'details' ? 'plan-builder-panel-hidden-mobile' : ''}`.trim()}>
              <p className="hint desktop-only">Imposta prima struttura e dettagli della scheda, poi passa agli esercizi.</p>
              <div className="step-tabs plan-kind-tabs">
                <button
                  className={`step-tab ${planKind === 'series_reps' ? 'step-tab-active' : ''}`.trim()}
                  type="button"
                  onClick={() => handlePlanKindChange('series_reps')}
                >
                  Serie e reps
                </button>
                <button
                  className={`step-tab ${planKind === 'circuit' ? 'step-tab-active' : ''}`.trim()}
                  type="button"
                  onClick={() => handlePlanKindChange('circuit')}
                >
                  Circuito
                </button>
              </div>
              <label>
                Titolo scheda *
                <input
                  value={planTitle}
                  onChange={(event) => setPlanTitle(event.target.value)}
                  placeholder="Forza 4 settimane"
                  required
                />
              </label>
              {planKind === 'circuit' ? (
                <label>
                  Giri circuito
                  <select
                    value={String(planCircuitRounds)}
                    onChange={(event) => setPlanCircuitRounds(normalizeCircuitRounds(event.target.value, 1))}
                  >
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((round) => (
                      <option key={`circuit-rounds-${round}`} value={round}>
                        {round} {round === 1 ? 'giro' : 'giri'}
                      </option>
                    ))}
                  </select>
                </label>
              ) : null}
              <label>
                Riscaldamento (opzionale)
                <textarea
                  value={planWarmup}
                  onChange={(event) => setPlanWarmup(event.target.value)}
                  placeholder="Es. 8-10 min mobilità, attivazione scapole, squat a corpo libero..."
                />
              </label>
              <label>
                URL video riscaldamento (opzionale)
                <input
                  value={planWarmupVideoUrl}
                  onChange={(event) => setPlanWarmupVideoUrl(event.target.value)}
                  placeholder="https://..."
                />
              </label>
              <label>
                Immagine riscaldamento (opzionale)
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => void onUploadWarmupMedia(event.target.files?.[0] ?? null)}
                  disabled={uploadingWarmupMedia}
                />
                {isImageMediaUrl(planWarmupImageUrl) ? <img src={planWarmupImageUrl} alt="Anteprima riscaldamento" className="exercise-upload-preview" /> : null}
              </label>
              {isImageMediaUrl(planWarmupImageUrl) ? (
                <p className="hint">
                  Immagine riscaldamento caricata.
                  {' '}
                  <button className="btn-link" type="button" onClick={() => setPlanWarmupImageUrl('')}>
                    Rimuovi
                  </button>
                </p>
              ) : null}
              {uploadingWarmupMedia ? <p className="hint">Caricamento immagine riscaldamento in corso...</p> : null}
              <label>
                Note (opzionale)
                <textarea
                  value={planNotes}
                  onChange={(event) => setPlanNotes(event.target.value)}
                  placeholder="Note utili per il cliente"
                />
              </label>
              <button
                className="btn btn-ghost mobile-only"
                type="button"
                onClick={() => setPlanBuilderSection('exercises')}
              >
                Vai ai contenuti
              </button>
            </div>

            <div className={`plan-builder-panel ${planBuilderSection !== 'exercises' ? 'plan-builder-panel-hidden-mobile' : ''}`.trim()}>
              <div className="plan-builder-exercises-top">
                <div>
                  <p className="hint">Contenuti in scheda</p>
                  <h3>{exercises.length} {exercises.length === 1 ? 'elemento' : 'elementi'}</h3>
                </div>
              </div>
              {planBuilderDisplayItems.length > 0 ? (
                <div className="plan-display-order-panel">
                  <div className="plan-builder-group-head">
                    <p className="hint">Ordine visualizzazione</p>
                    <strong>{planBuilderDisplayItems.length}</strong>
                  </div>
                  <div className="plan-display-order-list">
                    {planBuilderDisplayItems.map(({ exercise, index }, orderIndex) => {
                      const title = exercise.name.trim() || `${movementTypeLabel(exercise.movementType)} ${orderIndex + 1}`;
                      return (
                        <div className="plan-display-order-row" key={`display-order-${exercise.movementType}-${index}`}>
                          <div className="plan-display-order-main">
                            <div className="plan-display-order-meta">
                              <span className="plan-order-badge">{orderIndex + 1}</span>
                              <span className="hint">{movementTypeLabel(exercise.movementType)}</span>
                            </div>
                            <strong>{title}</strong>
                          </div>
                          <div className="plan-display-order-actions">
                            <button
                              className="icon-btn"
                              type="button"
                              aria-label={`Sposta su ${title}`}
                              title="Sposta su"
                              disabled={orderIndex === 0}
                              onClick={() => moveExerciseDisplayOrder(index, -1)}
                            >
                              ↑
                            </button>
                            <button
                              className="icon-btn"
                              type="button"
                              aria-label={`Sposta giù ${title}`}
                              title="Sposta giù"
                              disabled={orderIndex === planBuilderDisplayItems.length - 1}
                              onClick={() => moveExerciseDisplayOrder(index, 1)}
                            >
                              ↓
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
              {(() => {
                const groupedMovements = splitExercisesByMovementType(
                  exercises.map((exercise, index) => ({ exercise, index, movementType: exercise.movementType })),
                );
                const sections = [
                  { id: 'exercise', title: 'Esercizi', items: groupedMovements.exercises },
                  { id: 'stretching', title: 'Stretching', items: groupedMovements.stretchings },
                ].filter((section) => section.items.length > 0);

                return (
                  <div className="plan-builder-exercise-list">
                    {sections.map((section) => (
                      <section className="plan-builder-group" key={section.id}>
                        <div className="plan-builder-group-head">
                          <p className="hint">{section.title}</p>
                          <strong>{section.items.length}</strong>
                        </div>
                        <div className="plan-builder-group-list">
                          {section.items.map(({ exercise, index }, sectionIndex) => {
                            const exerciseTitle = exercise.name.trim() || `${movementTypeLabel(exercise.movementType)} ${sectionIndex + 1}`;
                            return (
                              <article className="card card-outline plan-exercise-editor" key={`exercise-${exercise.movementType}-${index}`}>
                                <div className="plan-exercise-editor-head">
                                  <div className="plan-exercise-editor-summary">
                                    <span className="hint">{movementTypeLabel(exercise.movementType)} {sectionIndex + 1}</span>
                                    <strong>{exerciseTitle}</strong>
                                    <span className="hint">Ordine visualizzazione {exercise.displayOrder} · {formatExerciseSummary(exercise, planKind)}</span>
                                  </div>
                                  <button className="icon-btn" type="button" onClick={() => resetExercise(index)} aria-label={`Reset ${movementTypeLabel(exercise.movementType).toLowerCase()} ${sectionIndex + 1}`} title="Reset">
                                    ↻
                                  </button>
                                </div>

                                <div className="plan-exercise-editor-body">
                                  <label>
                                    Nome {exercise.movementType === 'stretching' ? 'stretching' : 'esercizio'}
                                    <input value={exercise.name} onChange={(event) => updateExercise(index, {name: event.target.value})} placeholder={exercise.movementType === 'stretching' ? 'Es. Stretching quadricipiti' : 'Es. Squat bilanciere'} />
                                  </label>
                                  <label>
                                    Note {exercise.movementType === 'stretching' ? 'stretching' : 'esercizio'}
                                    <textarea
                                      value={exercise.notes}
                                      onChange={(event) => updateExercise(index, {notes: event.target.value})}
                                      placeholder="Note utili per questo elemento"
                                    />
                                  </label>
                                  <div className="exercise-fields-inline">
                                    {planKind === 'series_reps' ? (
                                      <>
                                        <label>
                                          Serie
                                          <input
                                            type="number"
                                            min={0}
                                            inputMode="numeric"
                                            onFocus={selectNumericInputContents}
                                            value={exercise.sets}
                                            onChange={(event) => updateExercise(index, {sets: parseExerciseNumericInput(event.target.value)})}
                                          />
                                        </label>
                                        {exercise.repsUnit === 'seconds' ? (
                                          <DurationPicker
                                            label="Durata set"
                                            value={exercise.reps}
                                            onFocus={selectNumericInputContents}
                                            onChange={(reps) => updateExercise(index, {reps})}
                                          />
                                        ) : (
                                          <label>
                                            Valore per serie
                                            <input
                                              type="number"
                                              min={0}
                                              inputMode="numeric"
                                              onFocus={selectNumericInputContents}
                                              value={exercise.reps}
                                              onChange={(event) => updateExercise(index, {reps: parseExerciseNumericInput(event.target.value)})}
                                            />
                                          </label>
                                        )}
                                        <div className="exercise-unit-toggle">
                                          <p className="hint">Unità</p>
                                          <div className="exercise-unit-toggle-row">
                                            <button
                                              className={`btn btn-ghost ${exercise.repsUnit === 'reps' ? 'exercise-method-toggle-active' : ''}`.trim()}
                                              type="button"
                                              onClick={() => updateExercise(index, {repsUnit: 'reps'})}
                                            >
                                              Reps
                                            </button>
                                            <button
                                              className={`btn btn-ghost ${exercise.repsUnit === 'seconds' ? 'exercise-method-toggle-active' : ''}`.trim()}
                                              type="button"
                                              onClick={() => updateExercise(index, {repsUnit: 'seconds'})}
                                            >
                                              Sec
                                            </button>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        {exercise.repsUnit === 'seconds' ? (
                                          <DurationPicker
                                            label="Tempo di lavoro"
                                            value={exercise.workValue}
                                            onFocus={selectNumericInputContents}
                                            onChange={(workValue) => updateExercise(index, {workValue})}
                                          />
                                        ) : (
                                          <label>
                                            Reps/tempo di lavoro
                                            <input
                                              type="number"
                                              min={0}
                                              inputMode="numeric"
                                              onFocus={selectNumericInputContents}
                                              value={exercise.workValue}
                                              onChange={(event) => updateExercise(index, {workValue: parseExerciseNumericInput(event.target.value)})}
                                            />
                                          </label>
                                        )}
                                        <div className="exercise-unit-toggle">
                                          <p className="hint">Unità</p>
                                          <div className="exercise-unit-toggle-row">
                                            <button
                                              className={`btn btn-ghost ${exercise.repsUnit === 'reps' ? 'exercise-method-toggle-active' : ''}`.trim()}
                                              type="button"
                                              onClick={() => updateExercise(index, {repsUnit: 'reps'})}
                                            >
                                              Reps
                                            </button>
                                            <button
                                              className={`btn btn-ghost ${exercise.repsUnit === 'seconds' ? 'exercise-method-toggle-active' : ''}`.trim()}
                                              type="button"
                                              onClick={() => updateExercise(index, {repsUnit: 'seconds'})}
                                            >
                                              Sec
                                            </button>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                    <label>
                                      Peso (kg)
                                      <input
                                        type="number"
                                        min={0}
                                        inputMode="decimal"
                                        onFocus={selectNumericInputContents}
                                        value={exercise.weightKg}
                                        onChange={(event) => updateExercise(index, {weightKg: parseExerciseNumericInput(event.target.value)})}
                                      />
                                    </label>
                                    <DurationPicker
                                      label="Recupero"
                                      value={exercise.restSeconds}
                                      onFocus={selectNumericInputContents}
                                      onChange={(restSeconds) => updateExercise(index, {restSeconds})}
                                    />
                                  </div>
                                  <div className="exercise-method-toggle">
                                    <p className="hint">Metodo opzionale</p>
                                    <div className="exercise-method-toggle-row">
                                      <button
                                        className={`btn btn-ghost ${exercise.advancedMethod === 'rest_pause' ? 'exercise-method-toggle-active' : ''}`.trim()}
                                        type="button"
                                        onClick={() => updateExercise(index, exercise.advancedMethod === 'rest_pause'
                                          ? { advancedMethod: '' }
                                          : { advancedMethod: 'rest_pause' })}
                                      >
                                        Rest Pause
                                      </button>
                                      <button
                                        className={`btn btn-ghost ${exercise.advancedMethod === 'drop_set' ? 'exercise-method-toggle-active' : ''}`.trim()}
                                        type="button"
                                        onClick={() => updateExercise(index, exercise.advancedMethod === 'drop_set'
                                          ? { advancedMethod: '' }
                                          : { advancedMethod: 'drop_set' })}
                                      >
                                        Drop set
                                      </button>
                                    </div>
                                  </div>
                                  {exercise.advancedMethod ? (
                                    <label>
                                      {exercise.advancedMethod === 'rest_pause' ? 'Note Rest Pause' : 'Note Drop set'}
                                      <textarea
                                        value={exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes}
                                        onChange={(event) => updateExercise(index, exercise.advancedMethod === 'rest_pause'
                                          ? { restPauseNotes: event.target.value, advancedMethodNotes: event.target.value }
                                          : { dropSetNotes: event.target.value, advancedMethodNotes: event.target.value })}
                                        placeholder="Inserisci indicazioni per il cliente"
                                      />
                                    </label>
                                  ) : null}
                                  <div className="exercise-video-library-row">
                                    <div className="exercise-video-library-copy">
                                      <p className="hint">Raccolta video</p>
                                      <strong>
                                        {videoLibraryByUrl.get(exercise.videoUrl)?.name
                                          ?? (exercise.videoUrl.trim() ? 'Video manuale inserito' : 'Nessun video selezionato')}
                                      </strong>
                                    </div>
                                    <button
                                      className="btn btn-ghost"
                                      type="button"
                                      onClick={() => openVideoLibraryPicker(index, exercise.movementType, exercise.name.trim() || `${movementTypeLabel(exercise.movementType)} ${sectionIndex + 1}`)}
                                    >
                                      {sortedVideoLibrary.length > 0 ? 'Scegli dalla raccolta' : 'Apri raccolta'}
                                    </button>
                                  </div>
                                  <label>
                                    Oppure URL video manuale (YouTube o link diretto)
                                    <input
                                      value={exercise.videoUrl}
                                      onChange={(event) => updateExercise(index, {videoUrl: event.target.value, mediaUrl: event.target.value || exercise.imageUrl})}
                                      placeholder="https://..."
                                    />
                                  </label>
                                  <label>
                                    Carica un&apos;immagine (puoi tenerla insieme al video)
                                    <input
                                      type="file"
                                      accept="image/*"
                                      onChange={(event) => void onUploadMedia(index, event.target.files?.[0] ?? null)}
                                      disabled={uploadingExerciseIndex === index}
                                    />
                                    {isImageMediaUrl(exercise.imageUrl) ? <img src={exercise.imageUrl} alt={`Anteprima ${movementTypeLabel(exercise.movementType).toLowerCase()} ${sectionIndex + 1}`} className="exercise-upload-preview" /> : null}
                                  </label>
                                  {isImageMediaUrl(exercise.imageUrl) ? (
                                    <p className="hint">
                                      Immagine caricata.
                                      {' '}
                                      <button className="btn-link" type="button" onClick={() => updateExercise(index, {imageUrl: '', mediaUrl: exercise.videoUrl})}>
                                        Rimuovi
                                      </button>
                                    </p>
                                  ) : null}
                                  {uploadingExerciseIndex === index ? <p className="hint">Caricamento media in corso...</p> : null}
                                  <button className="btn btn-ghost" type="button" onClick={() => removeExercise(index)}>
                                    Rimuovi {exercise.movementType === 'stretching' ? 'stretching' : 'esercizio'}
                                  </button>
                                </div>
                              </article>
                            );
                          })}
                        </div>
                      </section>
                    ))}
                  </div>
                );
              })()}
            </div>

            <div className="plan-builder-desktop-actions desktop-only">
              <div className="plan-builder-inline-actions">
                <button className="btn btn-ghost" type="button" onClick={addExercise}>
                  + Esercizio
                </button>
                <button className="btn btn-ghost" type="button" onClick={addStretching}>
                  + Stretching
                </button>
              </div>
              <div className="plan-builder-inline-actions">
                <button className="btn btn-ghost" type="button" onClick={closePlanModalWithoutSaving}>
                  Chiudi
                </button>
                <button className="btn btn-primary" type="button" disabled={loading || isUploadingMedia} onClick={() => void savePlan()}>
                  {isUploadingMedia ? 'Attendi caricamento media...' : 'Salva'}
                </button>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {isPlanPreviewOpen && previewPlan ? (
        <section id="plan-print-modal" className="modal-overlay preview-modal-overlay" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setIsPlanPreviewOpen(false)}>
          <article className="card modal-card print-sheet preview-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="exercise-head">
              <div className="preview-head-main">
                <button
                  className="icon-btn mobile-only"
                  type="button"
                  aria-label="Chiudi scheda"
                  title="Chiudi scheda"
                  onClick={() => setIsPlanPreviewOpen(false)}
                >
                  ←
                </button>
                <h2>Scheda</h2>
              </div>
              <div className="preview-head-actions screen-only">
                <button
                  className="btn btn-ghost"
                  type="button"
                  disabled={registeredClients.length === 0}
                  onClick={() => {
                    setAssigningClientIds([]);
                    setIsAssignModalOpen(true);
                  }}
                >
                  Assegna
                </button>
                <button
                  className="icon-btn"
                  type="button"
                  aria-label="Stampa scheda"
                  title="Stampa scheda"
                  onClick={() => void printPlanPreview()}
                >
                  🖨
                </button>
                <button
                  className="icon-btn desktop-only"
                  type="button"
                  aria-label="Chiudi scheda"
                  title="Chiudi scheda"
                  onClick={() => setIsPlanPreviewOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>
            <p className="hint">
              Clienti assegnati:{' '}
              <strong>
                {Array.isArray(previewPlan.assignedClientIds) && previewPlan.assignedClientIds.length > 0
                  ? previewPlan.assignedClientIds.map((id) => clientLabelById[id] || id).join(', ')
                  : 'Nessuno'}
              </strong>
            </p>
            <div className="plan-head">
              <p className="hint">Titolo programma</p>
              <h3>{previewPlan.title || 'Senza titolo'}</h3>
            </div>
            <p className="hint">
              Tipo scheda: <strong>{previewPlan.kind === 'circuit' ? 'Circuito' : 'Serie e reps'}</strong>
            </p>
            {previewPlan.kind === 'circuit' ? (
              <div className="circuit-rounds-inline" aria-label={`Circuito da ${formatCircuitRoundsLabel(previewPlan.circuitRounds)}`}>
                <span className="hint circuit-rounds-inline-label">Giri circuito:</span>
                <span className="circuit-rounds-inline-badge">{formatCircuitRoundsLabel(previewPlan.circuitRounds)}</span>
              </div>
            ) : null}
            {asText((previewPlan as {warmup?: unknown}).warmup).trim() || getPlanWarmupImageUrl(previewPlan) || getPlanWarmupVideoUrl(previewPlan) ? (
              <div className="client-info-block">
                <div className={getPlanWarmupImageUrl(previewPlan) ? 'warmup-media-layout' : ''}>
                  {getPlanWarmupImageUrl(previewPlan) ? (
                    <div className="warmup-media-visual">
                      {(() => {
                        const warmupImageKey = `${previewPlan.id}-warmup`;
                        const isWarmupImageLoading = previewImageLoading[warmupImageKey] !== false;
                        return (
                          <>
                            {isWarmupImageLoading ? (
                              <div className="media-loading" aria-live="polite">
                                <span className="spinner" aria-hidden="true" />
                                <span>Caricamento immagine riscaldamento...</span>
                              </div>
                            ) : null}
                            <img
                              src={getPlanWarmupImageUrl(previewPlan)}
                              alt="Media riscaldamento"
                              className="exercise-upload-preview"
                              style={{display: isWarmupImageLoading ? 'none' : 'block'}}
                              onLoad={() => setPreviewImageLoading((prev) => ({...prev, [warmupImageKey]: false}))}
                              onError={() => setPreviewImageLoading((prev) => ({...prev, [warmupImageKey]: false}))}
                            />
                          </>
                        );
                      })()}
                    </div>
                  ) : null}
                  <div className="warmup-media-content">
                    {asText((previewPlan as {warmup?: unknown}).warmup).trim() ? (
                      <p className="hint"><strong>Riscaldamento:</strong> {asText((previewPlan as {warmup?: unknown}).warmup)}</p>
                    ) : null}
                    {getPlanWarmupVideoUrl(previewPlan) ? (
                      <>
                        <a className="btn-link screen-only" href={getPlanWarmupVideoUrl(previewPlan)} target="_blank" rel="noreferrer">
                          Apri video riscaldamento
                        </a>
                        <a className="hint print-only print-video-link" href={getPlanWarmupVideoUrl(previewPlan)} target="_blank" rel="noreferrer">
                          URL video riscaldamento: {getPlanWarmupVideoUrl(previewPlan)}
                        </a>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
            {asText(previewPlan.notes).trim() ? (
              <div className="client-info-block">
                <p className="hint"><strong>Note coach:</strong> {asText(previewPlan.notes)}</p>
              </div>
            ) : null}
            {previewPlanWeightFeedback.length > 0 ? (
              <div className="client-info-block">
                <h3>Feedback peso cliente</h3>
                <p className="hint">Mostrato solo quando un cliente cambia il peso rispetto alla scheda base.</p>
                {previewPlanWeightFeedback.map((item) => (
                  <div key={`weight-feedback-${item.clientId}`} className="divider-block">
                    <p className="hint"><strong>{item.clientLabel}</strong></p>
                    <ul className="list">
                      {item.lines.map((line) => (
                        <li key={`${item.clientId}-${line}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
            {previewPlanDisplayItems.length > 0 ? (
              <section className="plan-preview-section">
                <div className="plan-builder-group-head">
                  <p className="hint">Sequenza visualizzazione</p>
                  <strong>{previewPlanDisplayItems.length}</strong>
                </div>
                <div className="exercise-grid">
                  {previewPlanDisplayItems.map(({ exercise, index }, orderIndex) => (
                    <article className="exercise-card" key={`preview-${index}`}>
                      {(() => {
                        const imageKey = `${previewPlan.id}-${index}`;
                        const isImageLoading = previewImageLoading[imageKey] !== false;
                        const hasImage = isImageMediaUrl(exercise.imageUrl);
                        const hasVideo = isVideoMediaUrl(exercise.videoUrl);
                        return (
                          <div className={hasImage ? 'coach-exercise-media-layout' : ''}>
                            {hasImage ? (
                              <div className="coach-exercise-media-visual">
                                {isImageLoading ? (
                                  <div className="media-loading" aria-live="polite">
                                    <span className="spinner" aria-hidden="true" />
                                    <span>Caricamento immagine...</span>
                                  </div>
                                ) : null}
                                <img
                                  src={exercise.imageUrl}
                                  alt={`Media ${movementTypeLabel(exercise.movementType).toLowerCase()} ${orderIndex + 1}`}
                                  className="exercise-upload-preview"
                                  style={{display: isImageLoading ? 'none' : 'block'}}
                                  onLoad={() => setPreviewImageLoading((prev) => ({...prev, [imageKey]: false}))}
                                  onError={() => setPreviewImageLoading((prev) => ({...prev, [imageKey]: false}))}
                                />
                              </div>
                            ) : null}
                            <div className={hasImage ? 'coach-exercise-media-content' : ''}>
                              <p className="hint"><strong>{movementTypeLabel(exercise.movementType)}</strong> · Ordine {orderIndex + 1}</p>
                              <p className="exercise-name">{exercise.name || `${movementTypeLabel(exercise.movementType)} ${orderIndex + 1}`}</p>
                              <div className="exercise-meta">
                                {previewPlan.kind === 'circuit' ? (
                                  <span>{formatWorkTarget(exercise.workValue, exercise.repsUnit)}</span>
                                ) : (
                                  <>
                                    <span>{exercise.sets || '-'} serie</span>
                                    <span>{formatSeriesTarget(exercise.reps, exercise.repsUnit)}</span>
                                  </>
                                )}
                                <span>{exercise.weightKg || 0} kg</span>
                                <span>{formatRecoveryLabel(exercise.restSeconds)}</span>
                              </div>
                              {exercise.advancedMethod ? (
                                <p className="hint">
                                  <strong>Metodo:</strong> {exercise.advancedMethod === 'rest_pause' ? 'Rest Pause' : 'Drop set'}
                                </p>
                              ) : null}
                              {exercise.advancedMethod && (exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes).trim() ? (
                                <p className="hint"><strong>Note metodo:</strong> {exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes}</p>
                              ) : null}
                              {exercise.notes.trim() ? <p className="hint"><strong>Note:</strong> {exercise.notes}</p> : null}
                              {hasVideo ? (
                                <>
                                  <a className="btn-link screen-only" href={exercise.videoUrl} target="_blank" rel="noreferrer">
                                    Apri video
                                  </a>
                                  <a className="hint print-only print-video-link" href={exercise.videoUrl} target="_blank" rel="noreferrer">
                                    URL video: {exercise.videoUrl}
                                  </a>
                                </>
                              ) : null}
                              {!hasImage && !hasVideo ? <p className="hint">Nessun media allegato</p> : null}
                            </div>
                          </div>
                        );
                      })()}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </article>
        </section>
      ) : null}

      {isAssignModalOpen && selectedPlan ? (
        <section className="modal-overlay modal-overlay-level-2" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setIsAssignModalOpen(false)}>
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="exercise-head">
              <h2>Gestisci assegnazioni</h2>
              <button
                className="icon-btn"
                type="button"
                aria-label="Chiudi gestione assegnazioni"
                title="Chiudi"
                onClick={() => setIsAssignModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <p className="hint">Scheda: {selectedPlan.title || 'Scheda senza titolo'}</p>
            <label>
              Clienti
              <Select<ClientOption, true>
                styles={customStyles}
                options={unassignedClientOptions}
                value={assigningClientOptions}
                onChange={(options: MultiValue<ClientOption>) => setAssigningClientIds(options.map((option) => option.value))}
                placeholder={unassignedClientOptions.length === 0 ? 'Tutti i clienti sono già assegnati' : 'Cerca cliente per nome...'}
                noOptionsMessage={() => 'Nessun risultato'}
                isSearchable
                isMulti
                closeMenuOnSelect={false}
              />
            </label>
            <div className="action-row-split">
              <button className="btn btn-primary" type="button" disabled={loading || assigningClientIds.length === 0} onClick={() => void assignPlan()}>
                Assegna
              </button>
            </div>
            <div className="client-info-block">
              <h3>Clienti assegnati</h3>
              {Array.isArray(selectedPlan.assignedClientIds) && selectedPlan.assignedClientIds.length > 0 ? (
                <ul className="assigned-client-list">
                  {selectedPlan.assignedClientIds.map((clientId) => {
                    const status = assignmentStatus(selectedPlan, clientId);
                    return (
                      <li key={clientId} className="assigned-client-item">
                      <div>
                        <span className="assigned-client-name">{clientLabelById[clientId] || clientId}</span>
                        <span className={`assignment-status assignment-status-${status.tone}`.trim()}>{status.label}</span>
                      </div>
                      <div className="assigned-client-actions">
                        <button
                          className="icon-btn assigned-client-time-btn"
                          type="button"
                          aria-label={`Imposta durata ${clientLabelById[clientId] || clientId}`}
                          title="Imposta durata"
                          disabled={loading}
                          onClick={() => openAssignmentModeModal(clientId)}
                        >
                          ⏱
                        </button>
                        <button
                          className="icon-btn icon-btn-danger assigned-client-remove-btn"
                          type="button"
                          aria-label={`Rimuovi ${clientLabelById[clientId] || clientId}`}
                          title="Rimuovi cliente"
                          disabled={loading}
                          onClick={() => void removeAssignedClient(clientId)}
                        >
                          🗑
                        </button>
                      </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="hint">Nessun cliente assegnato a questa scheda.</p>
              )}
            </div>
          </article>
        </section>
      ) : null}

      {isAssignmentModeModalOpen && selectedPlan ? (
        <section className="modal-overlay modal-overlay-level-3" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setIsAssignmentModeModalOpen(false)}>
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <h2>Durata assegnazione</h2>
            <p className="hint">
              Cliente: <strong>{clientLabelById[assignmentTargetClientId] || assignmentTargetClientId}</strong>
            </p>
            <div className="step-tabs">
              <button
                className={`step-tab ${assignmentModeDraft === 'permanent' ? 'step-tab-active' : ''}`.trim()}
                type="button"
                onClick={() => setAssignmentModeDraft('permanent')}
              >
                Permanente
              </button>
              <button
                className={`step-tab ${assignmentModeDraft === 'timed' ? 'step-tab-active' : ''}`.trim()}
                type="button"
                onClick={() => setAssignmentModeDraft('timed')}
              >
                A tempo
              </button>
            </div>
            {assignmentModeDraft === 'timed' ? (
              <>
                <label>
                  Data inizio
                  <input
                    type="date"
                    value={assignmentStartDateDraft}
                    onChange={(event) => setAssignmentStartDateDraft(event.target.value)}
                  />
                </label>
                <label>
                  Settimane
                  <input
                    type="number"
                    min={1}
                    step={1}
                    onFocus={selectNumericInputContents}
                    value={assignmentWeeksDraft}
                    onChange={(event) => setAssignmentWeeksDraft(normalizeNumericRawInput(event.target.value))}
                  />
                </label>
                {assignmentPreviewRange() ? (
                  <p className="hint">
                    Disponibile dal <strong>{assignmentPreviewRange()!.from}</strong> al <strong>{assignmentPreviewRange()!.to}</strong>
                  </p>
                ) : null}
              </>
            ) : (
              <p className="hint">La scheda resterà sempre disponibile finché non rimuovi l&apos;assegnazione.</p>
            )}
            <div className="action-row-split">
              <button className="btn btn-ghost" type="button" onClick={() => setIsAssignmentModeModalOpen(false)}>
                Chiudi
              </button>
              <button className="btn btn-primary" type="button" disabled={loading} onClick={() => void saveAssignmentMode()}>
                Salva
              </button>
            </div>
          </article>
        </section>
      ) : null}

      {isDeleteModalOpen && !coachAccess?.isSupervisor ? (
        <section className="modal-overlay" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setIsDeleteModalOpen(false)}>
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <h2>Conferma eliminazione profilo coach</h2>
            <p className="hint">
              Eliminando il profilo perderai definitivamente dati, abbonamento e associazioni clienti legate al tuo account coach.
            </p>
            <p className="hint">
              L&apos;operazione segue le policy aziendali. Termini, Condizioni d&apos;uso e Privacy Policy verranno pubblicati e linkati qui.
            </p>
            <div className="onboarding-actions">
              <button className="btn btn-ghost" type="button" disabled={deletingProfile} onClick={() => setIsDeleteModalOpen(false)}>
                Annulla
              </button>
              <button className="btn btn-danger" type="button" disabled={deletingProfile} onClick={() => void handleDeleteProfile()}>
                {deletingProfile ? 'Eliminazione...' : 'Conferma eliminazione'}
              </button>
            </div>
          </article>
        </section>
      ) : null}

      {isClientDeleteModalOpen ? (
        <section
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(event) => event.currentTarget === event.target && !deletingClient && setIsClientDeleteModalOpen(false)}
        >
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <h2>Conferma eliminazione cliente</h2>
            <p className="hint">
              Stai per eliminare definitivamente il profilo di <strong>{selectedClientLabel || 'questo cliente'}</strong> insieme ai dati collegati,
              incluse assegnazioni, schede associate, progressi e documenti privati.
            </p>
            <p className="hint">
              Vuoi continuare davvero?
            </p>
            <div className="onboarding-actions">
              <button
                className="btn btn-ghost"
                type="button"
                disabled={deletingClient}
                onClick={() => setIsClientDeleteModalOpen(false)}
              >
                No
              </button>
              <button
                className="btn btn-danger"
                type="button"
                disabled={deletingClient}
                onClick={() => void handleDeleteSelectedClient()}
              >
                {deletingClient ? 'Eliminazione...' : 'Sì, elimina'}
              </button>
            </div>
          </article>
        </section>
      ) : null}

      {activeTab === 'overview' ? (
        <article className="card">
          <h2>Panoramica</h2>
          <p className="hint">Clienti registrati: {registeredClients.length}</p>
          <p className="hint">Programmi creati: {plans.length}</p>
          <ul className="list">
            {plans.slice(0, 5).map((plan) => (
              <li key={plan.id}>
                <strong>{plan.title}</strong> · {plan.exercises?.length ?? 0} esercizi · assegnata a {Array.isArray(plan.assignedClientIds) ? plan.assignedClientIds.length : 0} clienti
              </li>
            ))}
          </ul>
        </article>
      ) : null}

      {loading ? <p className="message">Caricamento...</p> : null}
    </AppShell>
  );
}
