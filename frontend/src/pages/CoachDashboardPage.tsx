import { useEffect, useState } from 'react';

import { useToast } from '../components/ToastProvider';
import {
  createPlanAsCoach,
  getUserPrivateDoc,
  listPlansForRole,
  listRegisteredUsers,
  uploadWorkoutMediaAsCoach,
  updatePlanAsCoach,
  useAuthState,
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
    reps?: string;
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
}

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
        reps: asText(raw.reps) || '10',
        weight: asText(raw.weight),
        mediaUrl: asText(raw.mediaUrl),
      };
    })
    .filter((item): item is {name: string; sets: number; reps: string; weight: string; mediaUrl: string} => Boolean(item));
}

function onboardingValue(value: unknown): string {
  const text = asText(value).trim();
  return text || 'Non compilato';
}

export function CoachDashboardPage() {
  const { role, user } = useAuthState();
  const { showError, showSuccess } = useToast();
  const [registeredClients, setRegisteredClients] = useState<Array<UserProfileDoc & { id: string }>>([]);
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [selectedClientOnboarding, setSelectedClientOnboarding] = useState<OnboardingDoc | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [uploadingExerciseIndex, setUploadingExerciseIndex] = useState<number | null>(null);

  const [selectedClientId, setSelectedClientId] = useState('');
  const [planTitle, setPlanTitle] = useState('');
  const [exercises, setExercises] = useState([{name: '', sets: 3, reps: '10', weight: '', mediaUrl: ''}]);

  const existingPlanForClient = plans.find((plan) => plan.id === selectedClientId) ?? plans.find((plan) => plan.clientId === selectedClientId);

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
      setExercises([{name: '', sets: 3, reps: '10', weight: '', mediaUrl: ''}]);
      return;
    }

    setPlanTitle(existingPlanForClient.title ?? '');
    const nextExercises = normalizePlanExercises(existingPlanForClient.exercises)
      .filter((item) => item.name.trim().length > 0);
    setExercises(nextExercises.length > 0 ? nextExercises : [{name: '', sets: 3, reps: '10', weight: '', mediaUrl: ''}]);
  }, [selectedClientId, existingPlanForClient?.id]);

  async function loadData() {
    if (!role) return;
    setLoading(true);
    try {
      const usersSnap = await listRegisteredUsers();
      const allUsers = usersSnap.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as UserProfileDoc),
      }));
      const candidates = allUsers
        .filter((item) => item.id !== user?.uid)
        .filter((item) => {
          const roleValue = asText(item.role).toLowerCase();
          const requestedRoleValue = asText(item.requestedRole).toLowerCase();
          const isClientLike = roleValue === 'client' || requestedRoleValue === 'client' || item.onboardingCompleted === true;
          return isClientLike;
        })
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
    setExercises((prev) => [...prev, {name: '', sets: 3, reps: '10', weight: '', mediaUrl: ''}]);
  }

  function removeExercise(index: number) {
    setExercises((prev) => (prev.length <= 1 ? prev : prev.filter((_, idx) => idx !== index)));
  }

  function updateExercise(index: number, patch: Partial<{name: string; sets: number; reps: string; weight: string; mediaUrl: string}>) {
    setExercises((prev) => prev.map((item, idx) => (idx === index ? {...item, ...patch} : item)));
  }

  async function savePlan() {
    const preparedExercises = exercises
      .map((item) => ({
        name: item.name.trim(),
        sets: Number(item.sets) || 0,
        reps: item.reps.trim(),
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
            title: planTitle,
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
            title: planTitle,
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
    if (!planTitle.trim()) {
      showError('Inserisci un titolo per la scheda.');
      return;
    }
    setIsPlanModalOpen(true);
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

  return (
    <AppShell
      role={role === 'trainer' ? 'trainer' : 'admin'}
      subtitle="Gestisci clienti, programmi e appuntamenti da un unico posto."
      title="Area Coach"
    >
      <article className="card">
        <h2>Crea scheda cliente</h2>
        <label>
          Clienti registrati
          <select value={selectedClientId} onChange={(event) => setSelectedClientId(event.target.value)}>
            {registeredClients.length === 0 ? <option value="">Nessun cliente disponibile</option> : null}
            {registeredClients.map((client) => (
              <option key={client.id} value={getClientAuthUid(client)}>
                {asText(client.displayName).trim() || asText(client.email) || client.id}
              </option>
            ))}
          </select>
        </label>
        <button className="btn btn-ghost" type="button" onClick={() => void loadData()}>
          Aggiorna lista clienti
        </button>
        <label>
          Titolo programma
          <input value={planTitle} onChange={(event) => setPlanTitle(event.target.value)} placeholder="Forza 4 settimane" />
        </label>
        <p className="hint">
          {existingPlanForClient ? 'Questo cliente ha già una scheda: puoi modificarla.' : 'Questo cliente non ha ancora una scheda: ne creerai una nuova.'}
        </p>
        <article className="card" style={{ boxShadow: 'none', border: '1px dashed rgba(18,18,18,0.16)' }}>
          <h2>Informazioni del cliente</h2>
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
        <button
          className="btn"
          disabled={!selectedClientId || !planTitle || loading}
          onClick={openCreatePlanModal}
          type="button"
        >
          {existingPlanForClient ? 'Modifica scheda' : 'Crea scheda'}
        </button>
      </article>
      {isPlanModalOpen ? (
        <section className="modal-overlay" role="dialog" aria-modal="true">
          <article className="card modal-card">
            <h2>{existingPlanForClient ? 'Modifica scheda' : 'Compila la scheda'}</h2>
            <p className="hint">Aggiungi esercizi uno alla volta per completare il programma.</p>
            {exercises.map((exercise, index) => (
              <article className="card" key={`exercise-${index}`} style={{boxShadow: 'none', border: '1px solid rgba(18,18,18,0.10)'}}>
                <h2>Esercizio {index + 1}</h2>
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
                  <input value={exercise.reps} onChange={(event) => updateExercise(index, {reps: event.target.value})} placeholder="Es. 8-10" />
                </label>
                <label>
                  Peso
                  <input value={exercise.weight} onChange={(event) => updateExercise(index, {weight: event.target.value})} placeholder="Es. 40kg o corpo libero" />
                </label>
                <label>
                  URL video (YouTube o link diretto)
                  <input value={exercise.mediaUrl} onChange={(event) => updateExercise(index, {mediaUrl: event.target.value})} placeholder="https://..." />
                </label>
                <label>
                  Oppure carica un&apos;immagine
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => void onUploadMedia(index, event.target.files?.[0] ?? null)}
                    disabled={uploadingExerciseIndex === index}
                  />
                </label>
                {uploadingExerciseIndex === index ? <p className="hint">Caricamento media in corso...</p> : null}
                <button className="btn btn-ghost" type="button" onClick={() => removeExercise(index)}>
                  Rimuovi esercizio
                </button>
              </article>
            ))}
            <button className="btn btn-ghost" type="button" onClick={addExercise}>
              Aggiungi esercizio
            </button>
            <button className="btn" type="button" disabled={loading} onClick={() => void savePlan()}>
              {existingPlanForClient ? 'Salva modifiche' : 'Salva scheda tecnica'}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => setIsPlanModalOpen(false)}>
              Chiudi
            </button>
          </article>
        </section>
      ) : null}

      <article className="card">
        <h2>Panoramica</h2>
        <p className="hint">Clienti registrati: {registeredClients.length}</p>
        <p className="hint">Programmi creati: {plans.length}</p>
        <ul className="list">
          {plans.slice(0, 5).map((plan) => (
            <li key={plan.id}>
              <strong>{plan.title}</strong> · {plan.exercises?.length ?? 0} esercizi · cliente {plan.clientId}
            </li>
          ))}
        </ul>
      </article>

      {loading ? <p className="message">Caricamento...</p> : null}
    </AppShell>
  );
}
