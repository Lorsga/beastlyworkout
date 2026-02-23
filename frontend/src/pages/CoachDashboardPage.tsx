import { useEffect, useState } from 'react';

import { useToast } from '../components/ToastProvider';
import {
  createPlanAsCoach,
  getUserPrivateDoc,
  listPlansForRole,
  listRegisteredUsers,
  setUserRole,
  useAuthState,
  type AppRole,
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
}

interface OnboardingDoc {
  goal?: string;
  experienceLevel?: string;
  trainingDaysPerWeek?: number;
  notes?: string;
}

export function CoachDashboardPage() {
  const { role } = useAuthState();
  const { showError, showSuccess } = useToast();
  const [registeredClients, setRegisteredClients] = useState<Array<UserProfileDoc & { id: string }>>([]);
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [selectedClientOnboarding, setSelectedClientOnboarding] = useState<OnboardingDoc | null>(null);

  const [selectedClientId, setSelectedClientId] = useState('');
  const [planTitle, setPlanTitle] = useState('');
  const [exercises, setExercises] = useState([{name: '', sets: 3, reps: '10', weight: '', mediaUrl: ''}]);

  const [targetUid, setTargetUid] = useState('');
  const [targetRole, setTargetRole] = useState<AppRole>('client');

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

  async function loadData() {
    if (!role) return;
    setLoading(true);
    try {
      const [usersSnap, plansSnap] = await Promise.all([
        listRegisteredUsers(),
        listPlansForRole(role),
      ]);
      const allUsers = usersSnap.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as UserProfileDoc),
      }));
      const candidates = allUsers.filter((item) => item.role !== 'admin' && item.role !== 'trainer');
      setRegisteredClients(candidates);
      if (!selectedClientId && candidates[0]?.id) setSelectedClientId(candidates[0].id);

      setPlans(
        plansSnap.docs.map((docItem) => ({
          id: docItem.id,
          ...(docItem.data() as PlanDoc),
        })),
      );
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadData();
  }, [role]);

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

    await runAction(
      () =>
        createPlanAsCoach({
          clientId: selectedClientId,
          title: planTitle,
          status: 'active',
          exercises: preparedExercises,
        }),
      'Scheda salvata e subito visibile al cliente.',
    );
    setPlanTitle('');
    setExercises([{name: '', sets: 3, reps: '10', weight: '', mediaUrl: ''}]);
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
              <option key={client.id} value={client.id}>
                {client.displayName?.trim() || client.email || client.id}
              </option>
            ))}
          </select>
        </label>
        <label>
          Titolo programma
          <input value={planTitle} onChange={(event) => setPlanTitle(event.target.value)} placeholder="Forza 4 settimane" />
        </label>
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
              URL video o immagine
              <input value={exercise.mediaUrl} onChange={(event) => updateExercise(index, {mediaUrl: event.target.value})} placeholder="https://..." />
            </label>
            <button className="btn btn-ghost" type="button" onClick={() => removeExercise(index)}>
              Rimuovi esercizio
            </button>
          </article>
        ))}
        <button className="btn btn-ghost" type="button" onClick={addExercise}>
          Aggiungi esercizio
        </button>
        <article className="card" style={{ boxShadow: 'none', border: '1px dashed rgba(18,18,18,0.16)' }}>
          <h2>Informazioni del cliente</h2>
          <p className="hint">
            Obiettivo: {selectedClientOnboarding?.goal?.trim() || 'Non disponibile'}
          </p>
          <p className="hint">
            Livello: {selectedClientOnboarding?.experienceLevel || 'Non disponibile'}
          </p>
          <p className="hint">
            Allenamenti a settimana: {selectedClientOnboarding?.trainingDaysPerWeek ?? 'Non disponibile'}
          </p>
          <p className="hint">
            Note: {selectedClientOnboarding?.notes?.trim() || 'Nessuna nota inserita'}
          </p>
        </article>
        <button
          className="btn"
          disabled={!selectedClientId || !planTitle || loading}
          onClick={() => void savePlan()}
          type="button"
        >
          Salva scheda tecnica
        </button>
      </article>

      {role === 'admin' ? (
        <article className="card">
          <h2>Gestione accessi</h2>
          <label>
            Codice utente
            <input value={targetUid} onChange={(event) => setTargetUid(event.target.value)} placeholder="Inserisci il codice utente" />
          </label>
          <label>
            Profilo accesso
            <select value={targetRole} onChange={(event) => setTargetRole(event.target.value as AppRole)}>
              <option value="admin">Admin</option>
              <option value="trainer">Coach</option>
              <option value="client">Cliente</option>
            </select>
          </label>
          <button className="btn" disabled={!targetUid || loading} onClick={() => void runAction(() => setUserRole(targetUid, targetRole), 'Accesso aggiornato.')} type="button">
            Aggiorna accesso
          </button>
        </article>
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
