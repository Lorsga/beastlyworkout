import { useEffect, useState, type FocusEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  deleteMyProfile,
  getMyPlanWeightOverridesDoc,
  getMyAssignedPlans,
  syncMyPlanWeightOverrides,
  setMyPlanExerciseWeightOverride,
  setUserPrivateDoc,
  updateMyPlanExerciseWeight,
  getUserPrivateDoc,
  getUserProfile,
  listPlansForRole,
  logoutCurrentUser,
  useAuthState,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { buildWhatsAppUrl } from '../config/support';
import { mapDocs, toMessage } from '../utils/firestore';

interface PlanDoc {
  trainerId: string;
  title: string;
  status: string;
  kind?: 'series_reps' | 'circuit';
  notes?: string;
  warmup?: string;
  warmupVideoUrl?: string;
  warmupImageUrl?: string;
  warmupMediaUrl?: string;
  clientWeightOverrides?: Record<string, Record<string, number>>;
  exercises?: Array<{
    name?: string;
    notes?: string;
    advancedMethod?: 'rest_pause' | 'drop_set' | '';
    advancedMethodNotes?: string;
    restPauseNotes?: string;
    dropSetNotes?: string;
    sets?: number;
    reps?: number;
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
  clientId?: string;
  assignedCoachId?: string;
  assignedCoachPhone?: string;
  assignedCoachName?: string;
}

interface PlanWeightOverridesDoc {
  weights?: Record<string, Record<string, number>>;
}

interface OnboardingDoc {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  sex?: string;
  heightCm?: string;
  weightKg?: string;
  discoverySource?: string;
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
  importanceScore?: number | string;
  riskIfNoChange?: string;
  readiness?: string;
  notes?: string;
  goal?: string;
  experienceLevel?: string;
  trainingDaysPerWeek?: number | string;
  compiledBy?: string;
}

interface OnboardingDraft {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  sex: string;
  heightCm: string;
  weightKg: string;
  discoverySource: string;
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

type ClientTabId = 'plan' | 'profile';

function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '').trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

function isImageUrl(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i.test(url);
}

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(url);
}

function getPlanWarmupVideoUrl(plan: PlanDoc | null | undefined): string {
  if (!plan) return '';
  const explicit = typeof plan.warmupVideoUrl === 'string' ? plan.warmupVideoUrl.trim() : '';
  if (explicit) return explicit;
  const legacy = typeof plan.warmupMediaUrl === 'string' ? plan.warmupMediaUrl.trim() : '';
  return toYouTubeEmbedUrl(legacy) || isVideoUrl(legacy) ? legacy : '';
}

function getPlanWarmupImageUrl(plan: PlanDoc | null | undefined): string {
  if (!plan) return '';
  const explicit = typeof plan.warmupImageUrl === 'string' ? plan.warmupImageUrl.trim() : '';
  if (explicit) return explicit;
  const legacy = typeof plan.warmupMediaUrl === 'string' ? plan.warmupMediaUrl.trim() : '';
  return isImageUrl(legacy) ? legacy : '';
}

function normalizeExercises(value: unknown): Array<{
  name: string;
  notes: string;
  advancedMethod: '' | 'rest_pause' | 'drop_set';
  advancedMethodNotes: string;
  restPauseNotes: string;
  dropSetNotes: string;
  sets: number;
  reps: number;
  workValue: number;
  weightKg: number;
  restSeconds: number;
  videoUrl: string;
  imageUrl: string;
  mediaUrl: string;
}> {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const raw = item as Record<string, unknown>;
      const legacyWeight = Number((typeof raw.weight === 'string' ? raw.weight : '').replace(/[^\d.-]/g, ''));
      const rawAdvancedMethod = typeof raw.advancedMethod === 'string' ? raw.advancedMethod.trim() : '';
      const advancedMethod = rawAdvancedMethod === 'rest_pause' || rawAdvancedMethod === 'drop_set' ? rawAdvancedMethod : '';
      const legacyAdvancedMethodNotes = typeof raw.advancedMethodNotes === 'string' ? raw.advancedMethodNotes : '';
      const restPauseNotes = typeof raw.restPauseNotes === 'string'
        ? raw.restPauseNotes
        : (advancedMethod === 'rest_pause' ? legacyAdvancedMethodNotes : '');
      const dropSetNotes = typeof raw.dropSetNotes === 'string'
        ? raw.dropSetNotes
        : (advancedMethod === 'drop_set' ? legacyAdvancedMethodNotes : '');
      const rawMediaUrl = typeof raw.mediaUrl === 'string' ? raw.mediaUrl.trim() : '';
      const rawVideoUrl = typeof raw.videoUrl === 'string' ? raw.videoUrl.trim() : '';
      const rawImageUrl = typeof raw.imageUrl === 'string' ? raw.imageUrl.trim() : '';
      const normalizedVideoUrl = rawVideoUrl || (toYouTubeEmbedUrl(rawMediaUrl) || isVideoUrl(rawMediaUrl) ? rawMediaUrl : '');
      const normalizedImageUrl = rawImageUrl || (isImageUrl(rawMediaUrl) ? rawMediaUrl : '');
      return {
        name: typeof raw.name === 'string' ? raw.name : '',
        notes: typeof raw.notes === 'string' ? raw.notes : '',
        advancedMethod,
        advancedMethodNotes: legacyAdvancedMethodNotes,
        restPauseNotes,
        dropSetNotes,
        sets: typeof raw.sets === 'number' ? raw.sets : Number(raw.sets ?? 0) || 0,
        reps: typeof raw.reps === 'number' ? raw.reps : Number(raw.reps ?? 0) || 0,
        workValue: typeof raw.workValue === 'number' ? raw.workValue : Number(raw.workValue ?? raw.reps ?? 0) || 0,
        weightKg: typeof raw.weightKg === 'number' ? raw.weightKg : Number(raw.weightKg ?? legacyWeight ?? 0) || 0,
        restSeconds: typeof raw.restSeconds === 'number' ? raw.restSeconds : Number(raw.restSeconds ?? 0) || 0,
        videoUrl: normalizedVideoUrl,
        imageUrl: normalizedImageUrl,
        mediaUrl: rawMediaUrl || normalizedVideoUrl || normalizedImageUrl,
      };
    })
    .filter((item): item is {
      name: string;
      notes: string;
      advancedMethod: '' | 'rest_pause' | 'drop_set';
      advancedMethodNotes: string;
      restPauseNotes: string;
      dropSetNotes: string;
      sets: number;
      reps: number;
      workValue: number;
      weightKg: number;
      restSeconds: number;
      videoUrl: string;
      imageUrl: string;
      mediaUrl: string;
    } => Boolean(item));
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

function selectNumericInputContents(event: FocusEvent<HTMLInputElement>) {
  event.currentTarget.select();
}

function normalizeNumericRawInput(raw: string): string {
  if (!raw) return '';
  if (raw === '0') return '0';
  return raw.replace(/^0+(?=\d)/, '');
}

function emptyOnboardingDraft(user?: { displayName?: string | null; email?: string | null }): OnboardingDraft {
  return {
    fullName: user?.displayName ?? '',
    email: user?.email ?? '',
    phone: '',
    age: '',
    sex: '',
    heightCm: '',
    weightKg: '',
    discoverySource: '',
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

function toOnboardingDraft(
  source: OnboardingDoc | null,
  user?: { displayName?: string | null; email?: string | null },
): OnboardingDraft {
  const base = emptyOnboardingDraft(user);
  if (!source) return base;
  return {
    ...base,
    fullName: source.fullName?.trim() || base.fullName,
    email: source.email?.trim() || base.email,
    phone: source.phone?.trim() || '',
    age: source.age?.trim() || '',
    sex: source.sex?.trim() || '',
    heightCm: source.heightCm?.trim() || '',
    weightKg: source.weightKg?.trim() || '',
    discoverySource: source.discoverySource?.trim() || '',
    pastProgram: source.pastProgram?.trim() || source.experienceLevel?.trim() || '',
    trainingFrequency: source.trainingFrequency?.trim() || (source.trainingDaysPerWeek ? String(source.trainingDaysPerWeek) : ''),
    workoutDuration: source.workoutDuration?.trim() || '',
    workoutLocation: source.workoutLocation?.trim() || '',
    equipment: source.equipment?.trim() || '',
    trainingTypeHistory: source.trainingTypeHistory?.trim() || '',
    hasInjuries: source.hasInjuries?.trim() || '',
    injuryDetails: source.injuryDetails?.trim() || '',
    objectivePrimary: source.objectivePrimary?.trim() || source.goal?.trim() || '',
    objectiveReason: source.objectiveReason?.trim() || '',
    expectedTimeline: source.expectedTimeline?.trim() || '',
    supportPreference: source.supportPreference?.trim() || '',
    supportPreferenceOther: source.supportPreferenceOther?.trim() || '',
    investmentRange: source.investmentRange?.trim() || '',
    whatBlockedSoFar: source.whatBlockedSoFar?.trim() || '',
    oneThingToImprove: source.oneThingToImprove?.trim() || '',
    importanceScore: source.importanceScore != null ? String(source.importanceScore) : '',
    riskIfNoChange: source.riskIfNoChange?.trim() || '',
    readiness: source.readiness?.trim() || '',
    notes: source.notes?.trim() || '',
  };
}

function applyClientWeightOverridesToPlan(plan: PlanDoc & { id: string }, clientUid: string): PlanDoc & { id: string } {
  const byClient = plan.clientWeightOverrides && typeof plan.clientWeightOverrides === 'object'
    ? plan.clientWeightOverrides
    : {};
  const overrides = byClient[clientUid];
  if (!overrides || typeof overrides !== 'object') return plan;
  if (!Array.isArray(plan.exercises) || plan.exercises.length === 0) return plan;

  const nextExercises = plan.exercises.map((exercise, index) => {
    if (!exercise || typeof exercise !== 'object') return exercise;
    const override = overrides[String(index)];
    if (!Number.isFinite(Number(override))) return exercise;
    return {
      ...exercise,
      weightKg: Number(override),
    };
  });

  return {
    ...plan,
    exercises: nextExercises,
  };
}

function applyPersonalWeightOverridesToPlan(
  plan: PlanDoc & { id: string },
  personalOverrides: Record<string, Record<string, number>>,
): PlanDoc & { id: string } {
  const overrides = personalOverrides[plan.id];
  if (!overrides || typeof overrides !== 'object') return plan;
  if (!Array.isArray(plan.exercises) || plan.exercises.length === 0) return plan;

  const nextExercises = plan.exercises.map((exercise, index) => {
    if (!exercise || typeof exercise !== 'object') return exercise;
    const override = overrides[String(index)];
    if (!Number.isFinite(Number(override))) return exercise;
    return {
      ...exercise,
      weightKg: Number(override),
    };
  });

  return {
    ...plan,
    exercises: nextExercises,
  };
}

export function ClientDashboardPage() {
  const { role, user } = useAuthState();
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [mediaPreview, setMediaPreview] = useState<{ url: string; label: string } | null>(null);
  const [mediaPreviewLoading, setMediaPreviewLoading] = useState(false);
  const [onboarding, setOnboarding] = useState<OnboardingDoc | null>(null);
  const [activeTab, setActiveTab] = useState<ClientTabId>('plan');
  const [selectedPlanId, setSelectedPlanId] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingProfile, setDeletingProfile] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [coachWhatsappNumber, setCoachWhatsappNumber] = useState('');
  const [personalWeightOverrides, setPersonalWeightOverrides] = useState<Record<string, Record<string, number>>>({});
  const [exerciseWeightDrafts, setExerciseWeightDrafts] = useState<Record<string, string>>({});
  const [savingWeightKey, setSavingWeightKey] = useState('');
  const [editingWeightKey, setEditingWeightKey] = useState('');
  const [onboardingDraft, setOnboardingDraft] = useState<OnboardingDraft>(emptyOnboardingDraft(user ?? undefined));
  const whatsappMessage = 'Ciao coach, avrei bisogno di un feedback sulla mia scheda.';

  useEffect(() => {
    async function checkOnboardingStatus() {
      if (!user) return;
      try {
        const profileSnap = await getUserProfile(user.uid);
        const profile = profileSnap.data() as { onboardingCompleted?: boolean } | undefined;
        if (!profile?.onboardingCompleted) {
          navigate('/onboarding', { replace: true });
          return;
        }
      } catch {
        navigate('/onboarding', { replace: true });
        return;
      } finally {
        setCheckingOnboarding(false);
      }
    }

    void checkOnboardingStatus();
  }, [user, navigate]);

  async function loadData() {
    setLoading(true);
    try {
      const authUid = user?.uid ?? '';
      if (!authUid) {
        setPlans([]);
        setSelectedPlanId('');
        return;
      }
      const profileSnap = authUid ? await getUserProfile(authUid) : null;
      const profile = (profileSnap?.data() as UserProfileDoc | undefined) ?? {};
      const onboardingSnap = authUid ? await getUserPrivateDoc(authUid, 'onboarding') : null;
      try {
        await syncMyPlanWeightOverrides();
      } catch {
        // Best effort sync for backward compatibility with existing private plan weights.
      }
      const weightOverridesSnap = authUid ? await getMyPlanWeightOverridesDoc() : null;
      const weightOverridesData = (weightOverridesSnap?.data() as PlanWeightOverridesDoc | undefined) ?? {};
      const nextPersonalOverrides = weightOverridesData.weights ?? {};
      setPersonalWeightOverrides(nextPersonalOverrides);
      setOnboarding((onboardingSnap?.data() as OnboardingDoc | undefined) ?? null);
      let nextCoachPhone = normalizeWhatsappPhone(profile.assignedCoachPhone ?? '');
      if (!nextCoachPhone && profile.assignedCoachId) {
        try {
          const coachProfileSnap = await getUserProfile(profile.assignedCoachId);
          const coachProfile = coachProfileSnap.data() as { phone?: unknown } | undefined;
          nextCoachPhone = normalizeWhatsappPhone(typeof coachProfile?.phone === 'string' ? coachProfile.phone : '');
        } catch {
          nextCoachPhone = '';
        }
      }
      setCoachWhatsappNumber(nextCoachPhone);

      const mergedMap = new Map<string, PlanDoc & { id: string }>();
      let callableFailed = false;
      try {
        const callableResult = await getMyAssignedPlans();
        if (callableResult?.ok && Array.isArray(callableResult.plans)) {
          for (const plan of callableResult.plans) {
            mergedMap.set(plan.id, plan as PlanDoc & { id: string });
          }
        }
      } catch {
        callableFailed = true;
      }

      // Fallback minimale: usato solo se la callable non risponde.
      if (callableFailed) {
        try {
          const fallbackSnap = await listPlansForRole('client', authUid);
          for (const plan of mapDocs<PlanDoc>(fallbackSnap.docs)) {
            mergedMap.set(plan.id, plan);
          }
        } catch (error) {
          showError(`Errore caricamento schede: ${toMessage(error)}`);
        }
      }

      const mergedPlans = Array.from(mergedMap.values())
        .map((plan) => applyClientWeightOverridesToPlan(plan, authUid))
        .map((plan) => applyPersonalWeightOverridesToPlan(plan, nextPersonalOverrides))
        .sort((a, b) => {
          const aTime = new Date(String((a as {updatedAt?: unknown}).updatedAt ?? '')).getTime() || 0;
          const bTime = new Date(String((b as {updatedAt?: unknown}).updatedAt ?? '')).getTime() || 0;
          return bTime - aTime;
        });
      setPlans(mergedPlans);
      if (mergedPlans.length > 0 && Object.keys(nextPersonalOverrides).length > 0) {
        void syncPersonalOverridesToCoach(mergedPlans, nextPersonalOverrides);
      }
      if (mergedPlans.length > 0) {
        setSelectedPlanId((prev) => (prev && mergedPlans.some((plan) => plan.id === prev) ? prev : mergedPlans[0].id));
      } else {
        setSelectedPlanId('');
      }
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  async function syncPersonalOverridesToCoach(
    currentPlans: Array<PlanDoc & { id: string }>,
    overridesByPlan: Record<string, Record<string, number>>,
  ) {
    const allowedPlanIds = new Set(currentPlans.map((plan) => plan.id));
    const syncJobs: Array<Promise<unknown>> = [];
    for (const [planId, mapByExercise] of Object.entries(overridesByPlan)) {
      if (!allowedPlanIds.has(planId)) continue;
      if (!mapByExercise || typeof mapByExercise !== 'object') continue;
      for (const [exerciseIndex, rawWeight] of Object.entries(mapByExercise)) {
        const idx = Number(exerciseIndex);
        const weight = Number(rawWeight);
        if (!Number.isInteger(idx) || idx < 0) continue;
        if (!Number.isFinite(weight) || weight < 0) continue;
        syncJobs.push(updateMyPlanExerciseWeight(planId, idx, weight));
      }
    }
    if (syncJobs.length === 0) return;
    await Promise.allSettled(syncJobs);
  }

  useEffect(() => {
    if (user && (role === 'client' || role === null)) void loadData();
  }, [role, user?.uid]);

  async function handleDeleteProfile() {
    setDeletingProfile(true);
    try {
      await deleteMyProfile();
      await logoutCurrentUser().catch(() => undefined);
      navigate('/auth', { replace: true });
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setDeletingProfile(false);
      setIsDeleteModalOpen(false);
    }
  }

  function openMediaPreview(url: string, label: string) {
    setMediaPreview({ url, label });
    setMediaPreviewLoading(isImageUrl(url));
  }

  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[0];
  const selectedPlanExercises = normalizeExercises(selectedPlan?.exercises);
  const hasCoachWhatsapp = coachWhatsappNumber.length > 6;
  const coachWhatsappUrl = hasCoachWhatsapp ? buildWhatsAppUrl(whatsappMessage, coachWhatsappNumber) : '#';
  const profileRows = [
    { label: 'Nome e cognome', value: onboarding?.fullName },
    { label: 'E-mail', value: onboarding?.email ?? user?.email },
    { label: 'Telefono', value: onboarding?.phone },
    { label: 'Età', value: onboarding?.age },
    { label: 'Sesso', value: onboarding?.sex },
    { label: 'Altezza', value: onboarding?.heightCm ? `${onboarding.heightCm} cm` : '' },
    { label: 'Peso', value: onboarding?.weightKg ? `${onboarding.weightKg} kg` : '' },
    { label: 'Obiettivo', value: onboarding?.objectivePrimary },
  ].filter((item) => (item.value ?? '').toString().trim().length > 0);

  useEffect(() => {
    if (isEditingProfile) return;
    setOnboardingDraft(toOnboardingDraft(onboarding, user ?? undefined));
  }, [onboarding, user?.uid, isEditingProfile]);

  useEffect(() => {
    const nextDrafts: Record<string, string> = {};
    for (const plan of plans) {
      const normalized = normalizeExercises(plan.exercises);
      normalized.forEach((exercise, index) => {
        nextDrafts[`${plan.id}:${index}`] = String(exercise.weightKg || 0);
      });
    }
    setExerciseWeightDrafts(nextDrafts);
  }, [plans]);

  async function saveExerciseWeight(planId: string, exerciseIndex: number, fallbackWeight: number) {
    const draftKey = `${planId}:${exerciseIndex}`;
    const rawValue = (exerciseWeightDrafts[draftKey] ?? String(fallbackWeight)).trim();
    if (!rawValue) {
      showError('Inserisci un peso valido (numero >= 0).');
      return;
    }
    const nextWeight = Number(rawValue);
    if (!Number.isFinite(nextWeight) || nextWeight < 0) {
      showError('Inserisci un peso valido (numero >= 0).');
      return;
    }

    setSavingWeightKey(draftKey);
    try {
      try {
        await setMyPlanExerciseWeightOverride(planId, exerciseIndex, nextWeight);
      } catch {
        // Best effort: la fonte autoritativa viene aggiornata dalla callable.
      }
      setPersonalWeightOverrides((prev) => ({
        ...prev,
        [planId]: {
          ...(prev[planId] ?? {}),
          [String(exerciseIndex)]: nextWeight,
        },
      }));
      await updateMyPlanExerciseWeight(planId, exerciseIndex, nextWeight);
      setPlans((prev) =>
        prev.map((plan) => {
          if (plan.id !== planId) return plan;
          const normalized = normalizeExercises(plan.exercises);
          const updatedExercises = normalized.map((exercise, idx) => (idx === exerciseIndex ? { ...exercise, weightKg: nextWeight } : exercise));
          return { ...plan, exercises: updatedExercises };
        }),
      );
      setExerciseWeightDrafts((prev) => ({ ...prev, [draftKey]: String(nextWeight) }));
      setEditingWeightKey('');
      showSuccess('Peso aggiornato.');
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setSavingWeightKey('');
    }
  }

  function openWeightEditor(planId: string, exerciseIndex: number, currentWeight: number) {
    const draftKey = `${planId}:${exerciseIndex}`;
    setExerciseWeightDrafts((prev) => ({
      ...prev,
      [draftKey]: prev[draftKey] ?? String(currentWeight || 0),
    }));
    setEditingWeightKey(draftKey);
  }

  function validateProfileDraft(): string | null {
    if (!onboardingDraft.fullName.trim()) return 'Inserisci nome e cognome.';
    if (!onboardingDraft.age.trim()) return 'Inserisci età.';
    if (!onboardingDraft.sex.trim()) return 'Inserisci sesso.';
    if (!onboardingDraft.email.trim()) return 'Inserisci e-mail.';
    if (!onboardingDraft.phone.trim()) return 'Inserisci telefono.';
    if (!onboardingDraft.heightCm.trim()) return 'Inserisci altezza.';
    if (!onboardingDraft.weightKg.trim()) return 'Inserisci peso.';
    return null;
  }

  async function saveProfileOnboarding() {
    const validationError = validateProfileDraft();
    if (validationError) {
      showError(validationError);
      return;
    }

    const payload: OnboardingDoc = {
      fullName: onboardingDraft.fullName.trim(),
      email: onboardingDraft.email.trim(),
      phone: onboardingDraft.phone.trim(),
      age: onboardingDraft.age.trim(),
      sex: onboardingDraft.sex.trim(),
      heightCm: onboardingDraft.heightCm.trim(),
      weightKg: onboardingDraft.weightKg.trim(),
      discoverySource: onboardingDraft.discoverySource.trim(),
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
      riskIfNoChange: onboardingDraft.riskIfNoChange.trim(),
      readiness: onboardingDraft.readiness.trim(),
      notes: onboardingDraft.notes.trim(),
      goal: onboardingDraft.objectivePrimary.trim(),
      experienceLevel: onboardingDraft.pastProgram.trim(),
      compiledBy: 'client',
    };
    const importanceScore = onboardingDraft.importanceScore.trim();
    if (importanceScore) {
      const parsed = Number(importanceScore);
      if (Number.isFinite(parsed)) payload.importanceScore = parsed;
    }

    setSavingProfile(true);
    try {
      await setUserPrivateDoc('onboarding', payload as Record<string, unknown>);
      setOnboarding(payload);
      setIsEditingProfile(false);
      showSuccess('Anagrafica aggiornata.');
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setSavingProfile(false);
    }
  }

  if (!user) return <Navigate to="/auth" replace />;
  if (checkingOnboarding) {
    return (
      <main className="page page-center">
        <section className="card auth-card">
          <p className="eyebrow">Beastly Workout</p>
          <h1>Prepariamo la tua area</h1>
          <p className="hero-sub">Sto verificando le informazioni del tuo profilo...</p>
        </section>
      </main>
    );
  }

  return (
    <AppShell
      role="client"
      subtitle="Scheda tecnica e anagrafica in un unico spazio chiaro."
      title="La tua area"
      sections={[
        { id: 'plan', label: 'Scheda', mobileLabel: 'Scheda', icon: '🔥' },
        { id: 'profile', label: 'Profilo', mobileLabel: 'Profilo', icon: '👤' },
      ]}
      activeSection={activeTab}
      onSectionChange={(nextTab) => setActiveTab(nextTab as ClientTabId)}
      headerAction={
        <div className="mobile-only">
          <a
            className={`btn btn-whatsapp btn-block ${hasCoachWhatsapp ? '' : 'btn-disabled'}`.trim()}
            href={coachWhatsappUrl}
            onClick={(event) => {
              if (!hasCoachWhatsapp) event.preventDefault();
            }}
            target="_blank"
            rel="noreferrer"
          >
            Scrivi al tuo PT su WhatsApp
          </a>
        </div>
      }
    >
      {activeTab === 'plan' ? (
        <>
          <article className="card desktop-only">
            <h2>Parla con il tuo Personal Trainer</h2>
            <p className="hint">Per feedback sulla scheda o qualsiasi dubbio, scrivi direttamente su WhatsApp.</p>
            <a
              className={`btn btn-whatsapp btn-block ${hasCoachWhatsapp ? '' : 'btn-disabled'}`.trim()}
              href={coachWhatsappUrl}
              onClick={(event) => {
                if (!hasCoachWhatsapp) event.preventDefault();
              }}
              target="_blank"
              rel="noreferrer"
            >
              Apri chat WhatsApp
            </a>
            {!hasCoachWhatsapp ? <p className="message">Numero WhatsApp coach non ancora configurato.</p> : null}
          </article>

          <article className="card">
            <h2>La tua scheda tecnica</h2>
            {selectedPlan ? (
              <>
                {plans.length > 1 ? (
                  <label>
                    Scegli scheda
                    <select value={selectedPlan.id} onChange={(event) => setSelectedPlanId(event.target.value)}>
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.title || 'Scheda senza titolo'}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : null}
                <div className="plan-head">
                  <p className="hint">Programma attivo</p>
                  <h3>{selectedPlan.title}</h3>
                </div>
                <p className="hint">
                  Tipo scheda: <strong>{selectedPlan.kind === 'circuit' ? 'Circuito' : 'Serie e reps'}</strong>
                </p>
                {(() => {
                  const warmupText = (selectedPlan.warmup ?? '').trim();
                  const warmupVideoUrl = getPlanWarmupVideoUrl(selectedPlan);
                  const warmupImageUrl = getPlanWarmupImageUrl(selectedPlan);
                  if (!warmupText && !warmupVideoUrl && !warmupImageUrl) return null;
                  return (
                    <div className="client-info-block warmup-block">
                      <div className="warmup-head">
                        <p className="hint"><strong>Riscaldamento</strong></p>
                      </div>
                      {warmupText ? (
                        <p className="hint">{warmupText}</p>
                      ) : (
                        <p className="hint">Indicazioni testuali non presenti.</p>
                      )}
                      <div className="warmup-actions">
                        {warmupImageUrl ? (
                          <button className="warmup-media-btn" type="button" onClick={() => openMediaPreview(warmupImageUrl, 'Riscaldamento')}>
                            Apri immagine
                          </button>
                        ) : null}
                        {warmupVideoUrl ? (
                          <button className="warmup-media-btn" type="button" onClick={() => openMediaPreview(warmupVideoUrl, 'Riscaldamento')}>
                            Apri video
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })()}
                {(selectedPlan.notes ?? '').trim() ? (
                  <div className="client-info-block">
                    <p className="hint"><strong>Note coach:</strong> {selectedPlan.notes}</p>
                  </div>
                ) : null}
                <div className="exercise-grid">
                  {selectedPlanExercises.map((exercise, index) => (
                    <article className="exercise-card" key={`plan-ex-${index}`}>
                      <p className="exercise-name">{exercise.name || `Esercizio ${index + 1}`}</p>
                      <div className="exercise-meta">
                        {selectedPlan.kind === 'circuit' ? (
                          <span>{exercise.workValue || '-'} reps/tempo</span>
                        ) : (
                          <>
                            <span>{exercise.sets ?? '-'} serie</span>
                            <span>{exercise.reps || '-'} reps</span>
                          </>
                        )}
                        <span>{exercise.weightKg || 0} kg</span>
                        <span>{exercise.restSeconds || 0} sec recupero</span>
                      </div>
                      {exercise.advancedMethod ? (
                        <p className="hint">
                          <strong>Metodo:</strong> {exercise.advancedMethod === 'rest_pause' ? 'Rest Pause' : 'Drop set'}
                        </p>
                      ) : null}
                      {exercise.advancedMethod && (exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes).trim() ? (
                        <p className="hint"><strong>Note metodo:</strong> {exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes}</p>
                      ) : null}
                      {(() => {
                        const weightKey = `${selectedPlan.id}:${index}`;
                        const isEditingWeight = editingWeightKey === weightKey;
                        const isSavingWeight = savingWeightKey === weightKey;
                        return isEditingWeight ? (
                          <div className="exercise-weight-edit-row">
                            <label>
                              Peso (kg)
                              <input
                                type="number"
                                min={0}
                                inputMode="decimal"
                                onFocus={selectNumericInputContents}
                                value={exerciseWeightDrafts[weightKey] ?? String(exercise.weightKg || 0)}
                                onChange={(event) =>
                                  setExerciseWeightDrafts((prev) => ({
                                    ...prev,
                                    [weightKey]: normalizeNumericRawInput(event.target.value),
                                  }))
                                }
                              />
                            </label>
                            <div className="exercise-weight-actions">
                              <button
                                className="btn btn-ghost"
                                type="button"
                                disabled={isSavingWeight}
                                onClick={() => setEditingWeightKey('')}
                              >
                                Annulla
                              </button>
                              <button
                                className="btn"
                                type="button"
                                disabled={isSavingWeight}
                                onClick={() => void saveExerciseWeight(selectedPlan.id, index, exercise.weightKg || 0)}
                              >
                                {isSavingWeight ? 'Salvataggio...' : 'Salva'}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="exercise-weight-readonly">
                            <div>
                              <p className="hint"><strong>Peso (kg)</strong></p>
                              <p className="exercise-weight-value">{exercise.weightKg || 0}</p>
                            </div>
                            <button
                              className="icon-btn"
                              type="button"
                              aria-label="Modifica peso esercizio"
                              title="Modifica peso"
                              onClick={() => openWeightEditor(selectedPlan.id, index, exercise.weightKg || 0)}
                            >
                              ✎
                            </button>
                          </div>
                        );
                      })()}
                      {exercise.notes.trim() ? <p className="hint"><strong>Note:</strong> {exercise.notes}</p> : null}
                      {exercise.videoUrl || exercise.imageUrl ? (
                        <div className="warmup-actions">
                          {exercise.videoUrl ? (
                            <button className="warmup-media-btn" type="button" onClick={() => openMediaPreview(exercise.videoUrl, exercise.name || `Esercizio ${index + 1}`)}>
                              Apri video
                            </button>
                          ) : null}
                          {exercise.imageUrl ? (
                            <button className="warmup-media-btn" type="button" onClick={() => openMediaPreview(exercise.imageUrl, exercise.name || `Esercizio ${index + 1}`)}>
                              Apri immagine
                            </button>
                          ) : null}
                        </div>
                      ) : (
                        <p className="hint">Nessun media allegato</p>
                      )}
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <p className="hint">La tua scheda non è ancora disponibile. Il coach la pubblicherà a breve.</p>
            )}
          </article>
        </>
      ) : null}

      {activeTab === 'profile' ? (
        <article className="card">
          <h2>Profilo e anagrafica</h2>
          {isEditingProfile ? (
            <>
              <p className="hint">Modifica i tuoi dati. Solo tu puoi aggiornare questa anagrafica.</p>
              <div className="modal-grid">
                <label>Nome e cognome *<input value={onboardingDraft.fullName} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, fullName: event.target.value }))} /></label>
                <label>Età *<input type="number" min={12} max={99} onFocus={selectNumericInputContents} value={onboardingDraft.age} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, age: normalizeNumericRawInput(event.target.value) }))} /></label>
                <label>Sesso *<input value={onboardingDraft.sex} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, sex: event.target.value }))} /></label>
                <label>E-mail *<input type="email" value={onboardingDraft.email} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, email: event.target.value }))} /></label>
                <label>Telefono *<input type="tel" value={onboardingDraft.phone} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, phone: event.target.value }))} /></label>
                <label>Come ci hai conosciuto<input value={onboardingDraft.discoverySource} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, discoverySource: event.target.value }))} /></label>
              </div>
              <div className="modal-grid">
                <label>Altezza (cm) *<input type="number" min={100} max={250} onFocus={selectNumericInputContents} value={onboardingDraft.heightCm} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, heightCm: normalizeNumericRawInput(event.target.value) }))} /></label>
                <label>Peso (kg) *<input type="number" min={30} max={250} onFocus={selectNumericInputContents} value={onboardingDraft.weightKg} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, weightKg: normalizeNumericRawInput(event.target.value) }))} /></label>
                <label>Programmi precedenti<input value={onboardingDraft.pastProgram} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, pastProgram: event.target.value }))} /></label>
                <label>Frequenza allenamenti<input value={onboardingDraft.trainingFrequency} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, trainingFrequency: event.target.value }))} /></label>
                <label>Durata allenamento<input value={onboardingDraft.workoutDuration} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, workoutDuration: event.target.value }))} /></label>
                <label>Dove ti alleni<input value={onboardingDraft.workoutLocation} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, workoutLocation: event.target.value }))} /></label>
                <label>Attrezzatura disponibile<input value={onboardingDraft.equipment} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, equipment: event.target.value }))} /></label>
                <label>Allenamenti fatti<textarea value={onboardingDraft.trainingTypeHistory} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, trainingTypeHistory: event.target.value }))} /></label>
                <label>Infortuni/problemi<input value={onboardingDraft.hasInjuries} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, hasInjuries: event.target.value }))} /></label>
                <label>Dettagli infortuni<textarea value={onboardingDraft.injuryDetails} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, injuryDetails: event.target.value }))} /></label>
              </div>
              <div className="modal-grid">
                <label>Obiettivo principale<input value={onboardingDraft.objectivePrimary} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, objectivePrimary: event.target.value }))} /></label>
                <label>Perché questo obiettivo?<textarea value={onboardingDraft.objectiveReason} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, objectiveReason: event.target.value }))} /></label>
                <label>In quanto tempo vuoi risultati?<input value={onboardingDraft.expectedTimeline} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, expectedTimeline: event.target.value }))} /></label>
                <label>Cosa ti ha bloccato?<textarea value={onboardingDraft.whatBlockedSoFar} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, whatBlockedSoFar: event.target.value }))} /></label>
                <label>Cosa vuoi migliorare nei prossimi 3 mesi?<textarea value={onboardingDraft.oneThingToImprove} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, oneThingToImprove: event.target.value }))} /></label>
                <label>Importanza obiettivo (1-10)<input type="number" min={1} max={10} onFocus={selectNumericInputContents} value={onboardingDraft.importanceScore} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, importanceScore: normalizeNumericRawInput(event.target.value) }))} /></label>
                <label>Supporto preferito<input value={onboardingDraft.supportPreference} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, supportPreference: event.target.value }))} /></label>
                <label>Supporto preferito (altro)<input value={onboardingDraft.supportPreferenceOther} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, supportPreferenceOther: event.target.value }))} /></label>
                <label>Fascia investimento<input value={onboardingDraft.investmentRange} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, investmentRange: event.target.value }))} /></label>
                <label>Rischio se non cambi nulla<textarea value={onboardingDraft.riskIfNoChange} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, riskIfNoChange: event.target.value }))} /></label>
                <label>Sei pronto/a?<input value={onboardingDraft.readiness} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, readiness: event.target.value }))} /></label>
                <label>Note personali<textarea value={onboardingDraft.notes} onChange={(event) => setOnboardingDraft((prev) => ({ ...prev, notes: event.target.value }))} /></label>
              </div>
              <div className="action-row-split">
                <button
                  className="btn btn-ghost"
                  type="button"
                  disabled={savingProfile}
                  onClick={() => {
                    setOnboardingDraft(toOnboardingDraft(onboarding, user ?? undefined));
                    setIsEditingProfile(false);
                  }}
                >
                  Annulla
                </button>
                <button className="btn btn-primary" type="button" disabled={savingProfile} onClick={() => void saveProfileOnboarding()}>
                  {savingProfile ? 'Salvataggio...' : 'Salva'}
                </button>
              </div>
            </>
          ) : profileRows.length > 0 ? (
            <>
              <div className="client-info-block">
                {profileRows.map((row) => (
                  <p key={row.label} className="hint">
                    <strong>{row.label}:</strong> {row.value}
                  </p>
                ))}
              </div>
              <button className="btn btn-ghost" type="button" onClick={() => setIsEditingProfile(true)}>
                Modifica anagrafica
              </button>
            </>
          ) : (
            <>
              <p className="hint">Anagrafica non ancora disponibile.</p>
              <button className="btn" type="button" onClick={() => setIsEditingProfile(true)}>
                Compila anagrafica
              </button>
            </>
          )}
          <a
            className={`btn btn-whatsapp btn-block ${hasCoachWhatsapp ? '' : 'btn-disabled'}`.trim()}
            href={coachWhatsappUrl}
            onClick={(event) => {
              if (!hasCoachWhatsapp) event.preventDefault();
            }}
            target="_blank"
            rel="noreferrer"
          >
            Scrivi al tuo PT su WhatsApp
          </a>
          {!hasCoachWhatsapp ? <p className="message">Numero WhatsApp coach non ancora configurato.</p> : null}
          <div className="divider" />
          <h3>Elimina profilo</h3>
          <p className="hint">
            Se elimini il profilo perderai tutti i dati associati al tuo account, in linea con le policy aziendali.
          </p>
          <button className="btn btn-danger" type="button" onClick={() => setIsDeleteModalOpen(true)}>
            Elimina il mio profilo
          </button>
        </article>
      ) : null}

      {loading ? (
        <section className="modal-overlay" role="status" aria-live="polite" aria-label="Caricamento in corso">
          <article className="card loading-overlay-card">
            <span className="spinner" aria-hidden="true" />
            <p className="hint">Caricamento scheda...</p>
          </article>
        </section>
      ) : null}

      {mediaPreview ? (
        <section
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.currentTarget !== event.target) return;
            setMediaPreview(null);
            setMediaPreviewLoading(false);
          }}
        >
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <h2>{mediaPreview.label}</h2>
            {toYouTubeEmbedUrl(mediaPreview.url) ? (
              <iframe
                title={mediaPreview.label}
                src={toYouTubeEmbedUrl(mediaPreview.url) ?? undefined}
                className="media-frame"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : isImageUrl(mediaPreview.url) ? (
              <>
                {mediaPreviewLoading ? (
                  <div className="media-loading" aria-live="polite">
                    <span className="spinner" aria-hidden="true" />
                    <span>Caricamento immagine...</span>
                  </div>
                ) : null}
                <img
                  src={mediaPreview.url}
                  alt={mediaPreview.label}
                  className="media-frame media-image"
                  style={{ display: mediaPreviewLoading ? 'none' : 'block' }}
                  onLoad={() => setMediaPreviewLoading(false)}
                  onError={() => setMediaPreviewLoading(false)}
                />
              </>
            ) : isVideoUrl(mediaPreview.url) ? (
              <video src={mediaPreview.url} controls className="media-frame" />
            ) : (
              <p className="hint">
                Anteprima non disponibile.{' '}
                <a href={mediaPreview.url} target="_blank" rel="noreferrer">
                  Apri il link
                </a>
              </p>
            )}
            <button className="btn btn-ghost" type="button" onClick={() => {
              setMediaPreview(null);
              setMediaPreviewLoading(false);
            }}>
              Chiudi
            </button>
          </article>
        </section>
      ) : null}

      {isDeleteModalOpen ? (
        <section className="modal-overlay" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setIsDeleteModalOpen(false)}>
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <h2>Conferma eliminazione profilo</h2>
            <p className="hint">
              Eliminando il profilo perderai definitivamente account, anagrafica, scheda e dati collegati.
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
    </AppShell>
  );
}
