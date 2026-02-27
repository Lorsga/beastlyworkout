import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  deleteMyProfile,
  getMyPlanWeightOverridesDoc,
  getMyAssignedPlans,
  setMyPlanExerciseWeightOverride,
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
  objectivePrimary?: string;
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
        mediaUrl: typeof raw.mediaUrl === 'string' ? raw.mediaUrl : '',
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
  const [coachWhatsappNumber, setCoachWhatsappNumber] = useState('');
  const [personalWeightOverrides, setPersonalWeightOverrides] = useState<Record<string, Record<string, number>>>({});
  const [exerciseWeightDrafts, setExerciseWeightDrafts] = useState<Record<string, string>>({});
  const [savingWeightKey, setSavingWeightKey] = useState('');
  const [editingWeightKey, setEditingWeightKey] = useState('');
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
    const nextWeight = Number(rawValue);
    if (!Number.isFinite(nextWeight) || nextWeight < 0) {
      showError('Inserisci un peso valido (numero >= 0).');
      return;
    }

    setSavingWeightKey(draftKey);
    try {
      await setMyPlanExerciseWeightOverride(planId, exerciseIndex, nextWeight);
      setPersonalWeightOverrides((prev) => ({
        ...prev,
        [planId]: {
          ...(prev[planId] ?? {}),
          [String(exerciseIndex)]: nextWeight,
        },
      }));
      void updateMyPlanExerciseWeight(planId, exerciseIndex, nextWeight).catch(() => undefined);
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
                {(selectedPlan.warmup ?? '').trim() ? (
                  <div className="client-info-block">
                    <p className="hint"><strong>Riscaldamento:</strong> {selectedPlan.warmup}</p>
                  </div>
                ) : null}
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
                                value={exerciseWeightDrafts[weightKey] ?? String(exercise.weightKg || 0)}
                                onChange={(event) =>
                                  setExerciseWeightDrafts((prev) => ({
                                    ...prev,
                                    [weightKey]: event.target.value,
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
                      {exercise.mediaUrl ? (
                        <button className="btn-link" type="button" onClick={() => openMediaPreview(exercise.mediaUrl, exercise.name || `Esercizio ${index + 1}`)}>
                          {toYouTubeEmbedUrl(exercise.mediaUrl) || isVideoUrl(exercise.mediaUrl) ? 'Apri video' : isImageUrl(exercise.mediaUrl) ? 'Apri immagine' : 'Apri link'}
                        </button>
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
          {profileRows.length > 0 ? (
            <div className="client-info-block">
              {profileRows.map((row) => (
                <p key={row.label} className="hint">
                  <strong>{row.label}:</strong> {row.value}
                </p>
              ))}
            </div>
          ) : (
            <p className="hint">Anagrafica non ancora disponibile.</p>
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
