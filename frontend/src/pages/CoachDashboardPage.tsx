import { useEffect, useState } from 'react';

import {
  createPlanAsCoach,
  createSessionAsCoach,
  createTrainerClient,
  listPlansForRole,
  listSessionsForRole,
  listTrainerClients,
  setUserRole,
  useAuthState,
  type AppRole,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { mapDocs, toMessage } from '../utils/firestore';

interface TrainerClientDoc {
  trainerId: string;
  clientId: string;
}

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

export function CoachDashboardPage() {
  const { role } = useAuthState();
  const [clients, setClients] = useState<Array<TrainerClientDoc & { id: string }>>([]);
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [sessions, setSessions] = useState<Array<SessionDoc & { id: string }>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [clientUid, setClientUid] = useState('');
  const [planTitle, setPlanTitle] = useState('');
  const [planStatus, setPlanStatus] = useState<'draft' | 'active' | 'archived'>('active');
  const [sessionType, setSessionType] = useState('check-in');
  const [startsAt, setStartsAt] = useState('');
  const [endsAt, setEndsAt] = useState('');

  const [targetUid, setTargetUid] = useState('');
  const [targetRole, setTargetRole] = useState<AppRole>('client');

  async function loadData() {
    if (!role) return;
    setLoading(true);
    setErrorMessage('');
    try {
      const [trainerClientsSnap, plansSnap, sessionsSnap] = await Promise.all([
        listTrainerClients(),
        listPlansForRole(role),
        listSessionsForRole(role),
      ]);
      setClients(mapDocs<TrainerClientDoc>(trainerClientsSnap.docs));
      setPlans(mapDocs<PlanDoc>(plansSnap.docs));
      setSessions(mapDocs<SessionDoc>(sessionsSnap.docs));
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
      subtitle="Gestione clienti, piani e sessioni in un unico pannello operativo."
      title="Dashboard Coach"
    >
      <article className="card">
        <h2>Associa Cliente</h2>
        <label>
          Client UID
          <input value={clientUid} onChange={(event) => setClientUid(event.target.value)} placeholder="uid cliente" />
        </label>
        <button className="btn" disabled={!clientUid || loading} onClick={() => void runAction(() => createTrainerClient(clientUid), 'Cliente associato.')} type="button">
          Associa
        </button>
      </article>

      <article className="card">
        <h2>Nuovo Piano</h2>
        <label>
          Client UID
          <input value={clientUid} onChange={(event) => setClientUid(event.target.value)} placeholder="uid cliente" />
        </label>
        <label>
          Titolo piano
          <input value={planTitle} onChange={(event) => setPlanTitle(event.target.value)} placeholder="Forza 4 settimane" />
        </label>
        <label>
          Stato
          <select value={planStatus} onChange={(event) => setPlanStatus(event.target.value as 'draft' | 'active' | 'archived')}>
            <option value="draft">draft</option>
            <option value="active">active</option>
            <option value="archived">archived</option>
          </select>
        </label>
        <button
          className="btn"
          disabled={!clientUid || !planTitle || loading}
          onClick={() =>
            void runAction(
              () =>
                createPlanAsCoach({
                  clientId: clientUid,
                  title: planTitle,
                  status: planStatus,
                }),
              'Piano creato.',
            )
          }
          type="button"
        >
          Crea piano
        </button>
      </article>

      <article className="card">
        <h2>Nuova Sessione</h2>
        <label>
          Client UID
          <input value={clientUid} onChange={(event) => setClientUid(event.target.value)} placeholder="uid cliente" />
        </label>
        <label>
          Inizio
          <input value={startsAt} onChange={(event) => setStartsAt(event.target.value)} type="datetime-local" />
        </label>
        <label>
          Fine
          <input value={endsAt} onChange={(event) => setEndsAt(event.target.value)} type="datetime-local" />
        </label>
        <label>
          Tipo
          <input value={sessionType} onChange={(event) => setSessionType(event.target.value)} placeholder="workout o check-in" />
        </label>
        <button
          className="btn"
          disabled={!clientUid || !startsAt || !endsAt || loading}
          onClick={() =>
            void runAction(
              () => createSessionAsCoach({ clientId: clientUid, startsAt, endsAt, type: sessionType }),
              'Sessione creata.',
            )
          }
          type="button"
        >
          Crea sessione
        </button>
      </article>

      {role === 'admin' ? (
        <article className="card">
          <h2>Assegna ruolo utente</h2>
          <label>
            User UID
            <input value={targetUid} onChange={(event) => setTargetUid(event.target.value)} placeholder="uid utente" />
          </label>
          <label>
            Ruolo
            <select value={targetRole} onChange={(event) => setTargetRole(event.target.value as AppRole)}>
              <option value="admin">admin</option>
              <option value="trainer">trainer</option>
              <option value="client">client</option>
            </select>
          </label>
          <button className="btn" disabled={!targetUid || loading} onClick={() => void runAction(() => setUserRole(targetUid, targetRole), 'Ruolo aggiornato.')} type="button">
            Applica ruolo
          </button>
        </article>
      ) : null}

      <article className="card">
        <h2>Dati operativi</h2>
        <p className="hint">Clienti associati: {clients.length}</p>
        <p className="hint">Piani: {plans.length}</p>
        <p className="hint">Sessioni: {sessions.length}</p>
        <ul className="list">
          {plans.slice(0, 5).map((plan) => (
            <li key={plan.id}>
              <strong>{plan.title}</strong> · {plan.status} · client {plan.clientId}
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
