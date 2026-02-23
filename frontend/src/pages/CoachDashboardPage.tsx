import { useEffect, useState } from 'react';

import {
  createPlanAsCoach,
  createSessionAsCoach,
  getUserPrivateDoc,
  listPlansForRole,
  listRegisteredUsers,
  listSessionsForRole,
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
}

interface SessionDoc {
  clientId: string;
  startsAt: string;
  type: string;
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
  const [registeredClients, setRegisteredClients] = useState<Array<UserProfileDoc & { id: string }>>([]);
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [sessions, setSessions] = useState<Array<SessionDoc & { id: string }>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedClientOnboarding, setSelectedClientOnboarding] = useState<OnboardingDoc | null>(null);

  const [selectedClientId, setSelectedClientId] = useState('');
  const [planTitle, setPlanTitle] = useState('');
  const [sessionType, setSessionType] = useState('check-in');
  const [startsAt, setStartsAt] = useState('');
  const [endsAt, setEndsAt] = useState('');

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
    setErrorMessage('');
    try {
      const [usersSnap, plansSnap, sessionsSnap] = await Promise.all([
        listRegisteredUsers(),
        listPlansForRole(role),
        listSessionsForRole(role),
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
      setSessions(
        sessionsSnap.docs.map((docItem) => ({
          id: docItem.id,
          ...(docItem.data() as SessionDoc),
        })),
      );
    } catch (error) {
      setErrorMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadData();
  }, [role]);

  async function runAction(action: () => Promise<unknown>, okMessage: string) {
    setSuccessMessage('');
    setErrorMessage('');
    setLoading(true);
    try {
      await action();
      setSuccessMessage(okMessage);
      await loadData();
    } catch (error) {
      setErrorMessage(toMessage(error));
    } finally {
      setLoading(false);
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
          onClick={() =>
            void runAction(
              () =>
                createPlanAsCoach({
                  clientId: selectedClientId,
                  title: planTitle,
                  status: 'active',
                }),
              'Scheda creata e già disponibile al cliente.',
            )
          }
          type="button"
        >
          Salva programma
        </button>
      </article>

      <article className="card">
        <h2>Agenda sessioni (opzionale)</h2>
        <p className="hint">Ti aiuta a segnare appuntamenti, check-in e richiami con il cliente.</p>
        <label>
          Data e ora inizio
          <input value={startsAt} onChange={(event) => setStartsAt(event.target.value)} type="datetime-local" />
        </label>
        <label>
          Data e ora fine
          <input value={endsAt} onChange={(event) => setEndsAt(event.target.value)} type="datetime-local" />
        </label>
        <label>
          Tipo sessione
          <input value={sessionType} onChange={(event) => setSessionType(event.target.value)} placeholder="Es. allenamento, check-in" />
        </label>
        <button
          className="btn"
          disabled={!selectedClientId || !startsAt || !endsAt || loading}
          onClick={() =>
            void runAction(
              () => createSessionAsCoach({ clientId: selectedClientId, startsAt, endsAt, type: sessionType }),
              'Sessione pianificata con successo.',
            )
          }
          type="button"
        >
          Salva sessione
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
        <p className="hint">Sessioni in agenda: {sessions.length}</p>
        <ul className="list">
          {plans.slice(0, 5).map((plan) => (
            <li key={plan.id}>
              <strong>{plan.title}</strong> · {plan.status} · cliente {plan.clientId}
            </li>
          ))}
        </ul>
      </article>

      {loading ? <p className="message">Caricamento...</p> : null}
      {successMessage ? <p className="message success">{successMessage}</p> : null}
      {errorMessage ? <p className="message">{errorMessage}</p> : null}
    </AppShell>
  );
}
