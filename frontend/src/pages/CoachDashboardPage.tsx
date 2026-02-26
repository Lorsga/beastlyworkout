import { useEffect, useMemo, useState } from 'react';
import Select, { type StylesConfig } from 'react-select';
import { useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  activateCoachSubscription,
  disableCoachSubscription,
  createPlanAsCoach,
  deletePlanAsCoach,
  acceptCoachTrial,
  getCoachAccessState,
  getUserPrivateDoc,
  listAssignedClientsAsCoach,
  listPlansForRole,
  listCoachesForSupervisor,
  logoutCurrentUser,
  renewCoachSubscription,
  setClientOnboardingAsCoach,
  uploadWorkoutMediaAsCoach,
  updatePlanAsCoach,
  useAuthState,
  type CoachAccessState,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { toMessage } from '../utils/firestore';

interface PlanDoc {
  clientId: string;
  title: string;
  status: string;
  exercises?: Array<{
    name?: string;
    sets?: number;
    reps?: number;
    weight?: string;
    mediaUrl?: string;
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

type ClientOption = { value: string; label: string };
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

const PROFILE_STEPS = ['Anagrafica', 'Stato fisico', 'Obiettivi', 'Supporto'] as const;

function asText(value: unknown): string {
  return typeof value === 'string' ? value : value == null ? '' : String(value);
}

function getClientAuthUid(profile: UserProfileDoc & { id: string }): string {
  const uid = asText(profile.uid).trim();
  return uid || profile.id;
}

function normalizePlanExercises(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const raw = item as Record<string, unknown>;
      return {
        name: asText(raw.name),
        sets: Number(raw.sets ?? 3) || 3,
        reps: Number(raw.reps ?? 10) || 10,
        weight: asText(raw.weight),
        mediaUrl: asText(raw.mediaUrl),
      };
    })
    .filter((item): item is {name: string; sets: number; reps: number; weight: string; mediaUrl: string} => Boolean(item));
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

function defaultExercise() {
  return {name: '', sets: 3, reps: 10, weight: '', mediaUrl: ''};
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

export function CoachDashboardPage() {
  const { role, user, isSupervisor } = useAuthState();
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const [registeredClients, setRegisteredClients] = useState<Array<UserProfileDoc & { id: string }>>([]);
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [selectedClientOnboarding, setSelectedClientOnboarding] = useState<OnboardingDoc | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profileStep, setProfileStep] = useState(0);
  const [onboardingDraft, setOnboardingDraft] = useState<OnboardingDraft>(emptyOnboardingDraft());
  const [uploadingExerciseIndex, setUploadingExerciseIndex] = useState<number | null>(null);
  const [coachAccess, setCoachAccess] = useState<CoachAccessState | null>(null);
  const [loadingCoachAccess, setLoadingCoachAccess] = useState(false);
  const [supervisorCoaches, setSupervisorCoaches] = useState<SupervisorCoachItem[]>([]);
  const [supervisorSearch, setSupervisorSearch] = useState('');
  const [supervisorActionUid, setSupervisorActionUid] = useState('');
  const [activeTab, setActiveTab] = useState<CoachTabId>('clients');

  const [selectedClientId, setSelectedClientId] = useState('');
  const [planTitle, setPlanTitle] = useState('');
  const [exercises, setExercises] = useState([defaultExercise()]);
  const isUploadingMedia = uploadingExerciseIndex !== null;

  const selectedClientProfile = registeredClients.find((item) => getClientAuthUid(item) === selectedClientId) ?? null;
  const existingPlanForClient = plans.find((plan) => plan.id === selectedClientId) ?? plans.find((plan) => plan.clientId === selectedClientId);
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

  const clientOptions: ClientOption[] = registeredClients.map((client) => ({
    value: getClientAuthUid(client),
    label: asText(client.displayName).trim() || asText(client.email) || client.id,
  }));

  const selectedClientOption = clientOptions.find((option) => option.value === selectedClientId) ?? null;
  const profileProgress = Math.round(((profileStep + 1) / PROFILE_STEPS.length) * 100);
  const coachSections = [
    { id: 'code', label: 'Codice', icon: '🔑' },
    { id: 'clients', label: 'Clienti', icon: '👥' },
    { id: 'plans', label: 'Schede', icon: '🔥' },
    { id: 'overview', label: 'Panoramica', icon: '📊' },
    ...(isSupervisor ? [{ id: 'supervisor', label: 'Supervisor', icon: '🛡️' }] : []),
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
      const aTime = a.expiresAt ? new Date(a.expiresAt).getTime() : Number.MAX_SAFE_INTEGER;
      const bTime = b.expiresAt ? new Date(b.expiresAt).getTime() : Number.MAX_SAFE_INTEGER;
      return aTime - bTime;
    });

  useEffect(() => {
    if (!isSupervisor && activeTab === 'supervisor') {
      setActiveTab('clients');
    }
  }, [isSupervisor, activeTab]);

  const customStyles: StylesConfig<ClientOption, false> = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        minHeight: 48,
        borderRadius: 12,
        borderColor: state.isFocused ? '#ff6a00' : 'rgba(18,18,18,0.16)',
        boxShadow: state.isFocused ? '0 0 0 2px rgba(255,106,0,0.20)' : 'none',
        backgroundColor: '#fff',
        '&:hover': { borderColor: '#ff6a00' },
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 12,
        overflow: 'hidden',
        zIndex: 50,
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#ff6a00' : state.isFocused ? 'rgba(255,106,0,0.10)' : '#fff',
        color: state.isSelected ? '#fff' : '#121212',
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
    if (!selectedClientId) return;
    if (!existingPlanForClient) {
      setPlanTitle('');
      setExercises([defaultExercise()]);
      return;
    }

    setPlanTitle(existingPlanForClient.title ?? '');
    const nextExercises = normalizePlanExercises(existingPlanForClient.exercises)
      .filter((item) => item.name.trim().length > 0);
    setExercises(nextExercises.length > 0 ? nextExercises : [defaultExercise()]);
  }, [selectedClientId, existingPlanForClient?.id]);

  async function loadData() {
    if (!role) return;
    setLoading(true);
    try {
      const usersSnap = await listAssignedClientsAsCoach(user?.uid);
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
      if (!selectedClientId && candidates[0]) setSelectedClientId(getClientAuthUid(candidates[0]));

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

  async function runAction(action: () => Promise<unknown>, okMessage: string) {
    setLoading(true);
    try {
      await action();
      showSuccess(okMessage);
      await loadData();
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  function addExercise() {
    setExercises((prev) => [...prev, defaultExercise()]);
  }

  function removeExercise(index: number) {
    setExercises((prev) => (prev.length <= 1 ? prev : prev.filter((_, idx) => idx !== index)));
  }

  function resetExercise(index: number) {
    updateExercise(index, defaultExercise());
  }

  function updateExercise(index: number, patch: Partial<{name: string; sets: number; reps: number; weight: string; mediaUrl: string}>) {
    setExercises((prev) => prev.map((item, idx) => (idx === index ? {...item, ...patch} : item)));
  }

  function updateOnboardingField<K extends keyof OnboardingDraft>(key: K, value: OnboardingDraft[K]) {
    setOnboardingDraft((prev) => ({ ...prev, [key]: value }));
  }

  function reloadModalDraftFromServer() {
    if (!existingPlanForClient) {
      setPlanTitle('');
      setExercises([defaultExercise()]);
      return;
    }
    setPlanTitle(existingPlanForClient.title ?? '');
    const nextExercises = normalizePlanExercises(existingPlanForClient.exercises).filter((item) => item.name.trim().length > 0);
    setExercises(nextExercises.length > 0 ? nextExercises : [defaultExercise()]);
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
    if (!onboardingDraft.pastProgram.trim()) return 'Compila esperienza allenamento.';
    if (!onboardingDraft.trainingFrequency.trim()) return 'Compila frequenza allenamento.';
    if (!onboardingDraft.workoutDuration.trim()) return 'Compila durata allenamento.';
    if (!onboardingDraft.workoutLocation.trim()) return 'Compila luogo allenamento.';
    if (!onboardingDraft.equipment.trim()) return 'Compila attrezzatura.';
    if (!onboardingDraft.objectivePrimary.trim()) return 'Compila obiettivo principale.';
    if (!onboardingDraft.objectiveReason.trim()) return 'Compila motivo obiettivo.';
    if (!onboardingDraft.expectedTimeline.trim()) return 'Compila timeline risultati.';
    if (!onboardingDraft.supportPreference.trim()) return 'Compila supporto preferito.';
    if (!onboardingDraft.investmentRange.trim()) return 'Compila fascia investimento.';
    if (!onboardingDraft.readiness.trim()) return 'Compila disponibilità a partire.';
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
        name: item.name.trim(),
        sets: Number(item.sets) || 0,
        reps: Number(item.reps) || 0,
        weight: item.weight.trim(),
        mediaUrl: item.mediaUrl.trim(),
      }))
      .filter((item) => item.name.length > 0);

    if (preparedExercises.length === 0) {
      showError('Aggiungi almeno un esercizio con nome.');
      return;
    }

    if (existingPlanForClient) {
      await runAction(
        () =>
          updatePlanAsCoach(existingPlanForClient.id, {
            title: normalizedTitle,
            status: 'active',
            exercises: preparedExercises,
          }),
        'Scheda aggiornata con successo.',
      );
    } else {
      await runAction(
        () =>
          createPlanAsCoach({
            clientId: selectedClientId,
            title: normalizedTitle,
            status: 'active',
            exercises: preparedExercises,
          }),
        'Scheda creata e subito visibile al cliente.',
      );
    }
    setIsPlanModalOpen(false);
  }

  function openCreatePlanModal() {
    if (!selectedClientId) {
      showError('Seleziona prima un cliente.');
      return;
    }
    reloadModalDraftFromServer();
    setIsPlanModalOpen(true);
  }

  function closePlanModalWithoutSaving() {
    reloadModalDraftFromServer();
    setIsPlanModalOpen(false);
  }

  async function onUploadMedia(index: number, file: File | null) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showError('Puoi caricare solo immagini. Per i video usa il campo URL.');
      return;
    }
    if (!selectedClientId) {
      showError('Seleziona prima un cliente.');
      return;
    }
    setUploadingExerciseIndex(index);
    try {
      const url = await uploadWorkoutMediaAsCoach(selectedClientId, file);
      updateExercise(index, { mediaUrl: url });
      showSuccess('Media caricato con successo.');
    } catch (error) {
      console.error('Media upload failed:', error);
      showError(toMessage(error));
    } finally {
      setUploadingExerciseIndex(null);
    }
  }

  async function deleteCurrentPlan() {
    if (!existingPlanForClient) return;
    const confirmDelete = window.confirm('Vuoi davvero eliminare tutta la scheda tecnica di questo cliente?');
    if (!confirmDelete) return;
    await runAction(() => deletePlanAsCoach(existingPlanForClient.id), 'Scheda eliminata con successo.');
    setPlanTitle('');
    setExercises([defaultExercise()]);
    setIsPlanModalOpen(false);
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

  return (
    <AppShell
      role={role === 'trainer' ? 'trainer' : 'admin'}
      subtitle="Flusso diviso per tab: clienti, schede e controllo accessi."
      title="Area Coach"
      sections={coachSections}
      activeSection={activeTab}
      onSectionChange={(nextTab) => setActiveTab(nextTab as CoachTabId)}
    >
      {coachAccess?.requiresTrialAcceptance ? (
        <section className="modal-overlay" role="dialog" aria-modal="true">
          <article className="card modal-card fullscreen-gate">
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
          <p className="coach-code">{coachAccess?.coachCode || 'Caricamento...'}</p>
          {loadingCoachAccess ? <p className="hint">Sto verificando il tuo accesso...</p> : null}
          {coachAccess?.isSupervisor ? (
            <p className="hint">Account supervisor: accesso sempre attivo, senza trial.</p>
          ) : (
            <p className="hint">
              Stato accesso: <strong>{coachAccess?.status ?? 'non disponibile'}</strong>
              {' · '}Scadenza: <strong>{formatDate(coachAccess?.expiresAt ?? coachAccess?.trialEndsAt ?? coachAccess?.subscriptionEndsAt)}</strong>
            </p>
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
            {filteredSupervisorCoaches.map((coach) => (
              <article className="supervisor-row" key={coach.uid}>
                <div>
                  <p><strong>{coach.displayName || 'Coach senza nome'}</strong></p>
                  <p className="hint">{coach.email}</p>
                  <p className="hint">Codice: {coach.coachCode || '-'}</p>
                  <p className="hint">Stato: {coach.isSupervisor ? 'supervisor_active' : coach.status}</p>
                  <p className="hint">Scadenza: {formatDate(coach.expiresAt)}</p>
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
            ))}
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
        <h2>Gestione cliente</h2>
        <label>
          Clienti registrati
          <Select
            styles={customStyles}
            options={clientOptions}
            value={selectedClientOption}
            onChange={(option) => setSelectedClientId(option?.value ?? '')}
            placeholder={registeredClients.length === 0 ? 'Nessun cliente disponibile' : 'Cerca cliente per nome...'}
            noOptionsMessage={() => 'Nessun risultato'}
            isSearchable
          />
        </label>
        <button className="btn btn-ghost" type="button" onClick={() => void loadData()}>
          Aggiorna lista clienti
        </button>

        {registeredClients.length === 0 ? (
          <article className="card" style={{ boxShadow: 'none', border: '1px dashed rgba(18,18,18,0.16)' }}>
            <h2>Nessun cliente associato</h2>
            <p className="hint">
              Al momento non hai clienti legati al tuo codice coach. Quando un cliente inserisce il tuo codice in onboarding, apparirà qui.
            </p>
          </article>
        ) : (
          <>
            {activeTab === 'clients' ? (
            <article className="card" style={{ boxShadow: 'none', border: '1px dashed rgba(18,18,18,0.16)' }}>
              <h2>Anagrafica cliente</h2>
              <p className="hint">L&apos;utente compila i dati base. Il questionario completo lo compili qui.</p>
              <button className="btn" type="button" onClick={openProfileModal} disabled={loading || !selectedClientId}>
                {selectedClientOnboarding ? 'Modifica anagrafica completa' : 'Compila anagrafica completa'}
              </button>
              {selectedClientWhatsappUrl ? (
                <a className="btn btn-whatsapp" href={selectedClientWhatsappUrl} target="_blank" rel="noreferrer">
                  Scrivi al cliente su WhatsApp
                </a>
              ) : (
                <p className="hint">Numero WhatsApp cliente non disponibile.</p>
              )}

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
                <p className="hint"><strong>Timeline risultati:</strong> {onboardingValue(selectedClientOnboarding?.expectedTimeline)}</p>
                <p className="hint"><strong>Cosa lo ha bloccato:</strong> {onboardingValue(selectedClientOnboarding?.whatBlockedSoFar || selectedClientOnboarding?.notes)}</p>
                <p className="hint"><strong>Miglioramento desiderato (3 mesi):</strong> {onboardingValue(selectedClientOnboarding?.oneThingToImprove)}</p>
                <p className="hint"><strong>Importanza obiettivo:</strong> {onboardingValue(selectedClientOnboarding?.importanceScore)} / 10</p>
                <p className="hint"><strong>Rischio se non cambia:</strong> {onboardingValue(selectedClientOnboarding?.riskIfNoChange)}</p>
              </div>

              <div className="client-info-block">
                <h3>Supporto e decisione</h3>
                <p className="hint"><strong>Supporto preferito:</strong> {onboardingValue(selectedClientOnboarding?.supportPreference)}</p>
                <p className="hint"><strong>Altro supporto:</strong> {onboardingValue(selectedClientOnboarding?.supportPreferenceOther)}</p>
                <p className="hint"><strong>Fascia investimento:</strong> {onboardingValue(selectedClientOnboarding?.investmentRange)}</p>
                <p className="hint"><strong>Disponibilità a partire:</strong> {onboardingValue(selectedClientOnboarding?.readiness)}</p>
              </div>
            </article>
            ) : null}

            {activeTab === 'plans' ? (
              <>
                <p className="hint">
                  {existingPlanForClient ? 'Questo cliente ha già una scheda: puoi modificarla.' : 'Questo cliente non ha ancora una scheda: ne creerai una nuova.'}
                </p>

                <button className="btn" disabled={loading} onClick={openCreatePlanModal} type="button">
                  {existingPlanForClient ? 'Modifica scheda' : 'Crea scheda'}
                </button>
                {existingPlanForClient ? (
                  <button className="btn btn-danger" disabled={loading} onClick={() => void deleteCurrentPlan()} type="button">
                    Elimina scheda
                  </button>
                ) : null}
              </>
            ) : null}
          </>
        )}
      </article>
      ) : null}

      {isProfileModalOpen ? (
        <section className="modal-overlay" role="dialog" aria-modal="true">
          <article className="card modal-card">
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
                <label>Età *<input type="number" min={12} max={99} value={onboardingDraft.age} onChange={(event) => updateOnboardingField('age', event.target.value)} /></label>
                <label>Sesso *<input value={onboardingDraft.sex} onChange={(event) => updateOnboardingField('sex', event.target.value)} /></label>
                <label>E-mail *<input type="email" value={onboardingDraft.email} onChange={(event) => updateOnboardingField('email', event.target.value)} /></label>
                <label>Telefono *<input type="tel" value={onboardingDraft.phone} onChange={(event) => updateOnboardingField('phone', event.target.value)} /></label>
                <label>Come ci ha conosciuto<input value={onboardingDraft.discoverySource} onChange={(event) => updateOnboardingField('discoverySource', event.target.value)} /></label>
              </div>
            ) : null}

            {profileStep === 1 ? (
              <div className="modal-grid">
                <label>Altezza (cm) *<input type="number" min={100} max={250} value={onboardingDraft.heightCm} onChange={(event) => updateOnboardingField('heightCm', event.target.value)} /></label>
                <label>Peso (kg) *<input type="number" min={30} max={250} value={onboardingDraft.weightKg} onChange={(event) => updateOnboardingField('weightKg', event.target.value)} /></label>
                <label>Programmi precedenti *<input value={onboardingDraft.pastProgram} onChange={(event) => updateOnboardingField('pastProgram', event.target.value)} placeholder="Es. Si con coach online" /></label>
                <label>Frequenza allenamenti *<input value={onboardingDraft.trainingFrequency} onChange={(event) => updateOnboardingField('trainingFrequency', event.target.value)} placeholder="Es. 3-4 a settimana" /></label>
                <label>Durata allenamento *<input value={onboardingDraft.workoutDuration} onChange={(event) => updateOnboardingField('workoutDuration', event.target.value)} placeholder="Es. 45 minuti" /></label>
                <label>Dove si allena *<input value={onboardingDraft.workoutLocation} onChange={(event) => updateOnboardingField('workoutLocation', event.target.value)} /></label>
                <label>Attrezzatura disponibile *<input value={onboardingDraft.equipment} onChange={(event) => updateOnboardingField('equipment', event.target.value)} /></label>
                <label>Allenamenti fatti<textarea value={onboardingDraft.trainingTypeHistory} onChange={(event) => updateOnboardingField('trainingTypeHistory', event.target.value)} /></label>
                <label>Infortuni/problemi<input value={onboardingDraft.hasInjuries} onChange={(event) => updateOnboardingField('hasInjuries', event.target.value)} placeholder="Si/No" /></label>
                <label>Dettagli infortuni<textarea value={onboardingDraft.injuryDetails} onChange={(event) => updateOnboardingField('injuryDetails', event.target.value)} /></label>
              </div>
            ) : null}

            {profileStep === 2 ? (
              <div className="modal-grid">
                <label>Obiettivo principale *<input value={onboardingDraft.objectivePrimary} onChange={(event) => updateOnboardingField('objectivePrimary', event.target.value)} /></label>
                <label>Perché questo obiettivo? *<textarea value={onboardingDraft.objectiveReason} onChange={(event) => updateOnboardingField('objectiveReason', event.target.value)} /></label>
                <label>Timeline risultati *<input value={onboardingDraft.expectedTimeline} onChange={(event) => updateOnboardingField('expectedTimeline', event.target.value)} /></label>
                <label>Cosa lo ha bloccato<textarea value={onboardingDraft.whatBlockedSoFar} onChange={(event) => updateOnboardingField('whatBlockedSoFar', event.target.value)} /></label>
                <label>Miglioramento nei prossimi 3 mesi<textarea value={onboardingDraft.oneThingToImprove} onChange={(event) => updateOnboardingField('oneThingToImprove', event.target.value)} /></label>
                <label>Importanza obiettivo (1-10)<input type="number" min={1} max={10} value={onboardingDraft.importanceScore} onChange={(event) => updateOnboardingField('importanceScore', event.target.value)} /></label>
                <label>Rischio se non cambia<textarea value={onboardingDraft.riskIfNoChange} onChange={(event) => updateOnboardingField('riskIfNoChange', event.target.value)} /></label>
              </div>
            ) : null}

            {profileStep === 3 ? (
              <div className="modal-grid">
                <label>Supporto preferito *<input value={onboardingDraft.supportPreference} onChange={(event) => updateOnboardingField('supportPreference', event.target.value)} /></label>
                <label>Altro supporto<input value={onboardingDraft.supportPreferenceOther} onChange={(event) => updateOnboardingField('supportPreferenceOther', event.target.value)} /></label>
                <label>Fascia investimento *<input value={onboardingDraft.investmentRange} onChange={(event) => updateOnboardingField('investmentRange', event.target.value)} placeholder="Es. 150-250€" /></label>
                <label>Disponibilità a partire *<input value={onboardingDraft.readiness} onChange={(event) => updateOnboardingField('readiness', event.target.value)} /></label>
                <label>Note coach<textarea value={onboardingDraft.notes} onChange={(event) => updateOnboardingField('notes', event.target.value)} /></label>
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
                  {loading ? 'Salvataggio...' : 'Salva anagrafica'}
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
        <section className="modal-overlay" role="dialog" aria-modal="true">
          <article className="card modal-card">
            <h2>{existingPlanForClient ? 'Modifica scheda' : 'Compila la scheda'}</h2>
            <p className="hint">Aggiungi esercizi uno alla volta per completare il programma.</p>
            <label>
              Titolo scheda *
              <input
                value={planTitle}
                onChange={(event) => setPlanTitle(event.target.value)}
                placeholder="Forza 4 settimane"
                required
              />
            </label>
            {exercises.map((exercise, index) => (
              <article className="card" key={`exercise-${index}`} style={{boxShadow: 'none', border: '1px solid rgba(18,18,18,0.10)'}}>
                <div className="exercise-head">
                  <h2>Esercizio {index + 1}</h2>
                  <button className="icon-btn" type="button" onClick={() => resetExercise(index)} aria-label={`Reset esercizio ${index + 1}`} title="Reset esercizio">
                    ↻
                  </button>
                </div>
                <label>
                  Nome esercizio
                  <input value={exercise.name} onChange={(event) => updateExercise(index, {name: event.target.value})} placeholder="Es. Squat bilanciere" />
                </label>
                <label>
                  Numero serie
                  <input
                    type="number"
                    min={1}
                    value={exercise.sets}
                    onChange={(event) => updateExercise(index, {sets: Number(event.target.value)})}
                  />
                </label>
                <label>
                  Ripetizioni
                  <input
                    type="number"
                    min={1}
                    value={exercise.reps}
                    onChange={(event) => updateExercise(index, {reps: Number(event.target.value)})}
                    placeholder="10"
                  />
                </label>
                <label>
                  Peso
                  <input value={exercise.weight} onChange={(event) => updateExercise(index, {weight: event.target.value})} placeholder="Es. 40kg o corpo libero" />
                </label>
                <label>
                  URL video (YouTube o link diretto)
                  <input
                    value={isVideoMediaUrl(exercise.mediaUrl) ? exercise.mediaUrl : ''}
                    onChange={(event) => updateExercise(index, {mediaUrl: event.target.value})}
                    placeholder="https://..."
                  />
                </label>
                <label>
                  Oppure carica un&apos;immagine
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => void onUploadMedia(index, event.target.files?.[0] ?? null)}
                    disabled={uploadingExerciseIndex === index}
                  />
                  {isImageMediaUrl(exercise.mediaUrl) ? <img src={exercise.mediaUrl} alt={`Anteprima esercizio ${index + 1}`} className="exercise-upload-preview" /> : null}
                </label>
                {isImageMediaUrl(exercise.mediaUrl) ? (
                  <p className="hint">
                    Immagine caricata.
                    {' '}
                    <button className="btn-link" type="button" onClick={() => updateExercise(index, {mediaUrl: ''})}>
                      Rimuovi
                    </button>
                  </p>
                ) : null}
                {uploadingExerciseIndex === index ? <p className="hint">Caricamento media in corso...</p> : null}
                <button className="btn btn-ghost" type="button" onClick={() => removeExercise(index)}>
                  Rimuovi esercizio
                </button>
              </article>
            ))}
            <button className="btn btn-ghost" type="button" onClick={addExercise}>
              Aggiungi esercizio
            </button>
            <button className="btn" type="button" disabled={loading || isUploadingMedia} onClick={() => void savePlan()}>
              {isUploadingMedia ? 'Attendi caricamento media...' : existingPlanForClient ? 'Salva modifiche' : 'Salva scheda tecnica'}
            </button>
            <button className="btn btn-ghost" type="button" onClick={closePlanModalWithoutSaving}>
              Chiudi
            </button>
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
                <strong>{plan.title}</strong> · {plan.exercises?.length ?? 0} esercizi · cliente {clientLabelById[plan.clientId] || plan.clientId}
              </li>
            ))}
          </ul>
        </article>
      ) : null}

      {loading ? <p className="message">Caricamento...</p> : null}
    </AppShell>
  );
}
