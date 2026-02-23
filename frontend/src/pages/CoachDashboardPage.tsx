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
      subtitle="Gestisci clienti, programmi e appuntamenti da un unico posto."
      title="Area Coach"
    >
      <article className="card">
        <h2>Collega un cliente</h2>
        <label>
          Codice cliente
          <input value={clientUid} onChange={(event) => setClientUid(event.target.value)} placeholder="Inserisci il codice cliente" />
        </label>
        <button className="btn" disabled={!clientUid || loading} onClick={() => void runAction(() => createTrainerClient(clientUid), 'Cliente associato.')} type="button">
          Collega cliente
        </button>
      </article>

      <article className="card">
        <h2>Crea un programma</h2>
        <label>
          Codice cliente
          <input value={clientUid} onChange={(event) => setClientUid(event.target.value)} placeholder="Inserisci il codice cliente" />
        </label>
        <label>
          Titolo programma
          <input value={planTitle} onChange={(event) => setPlanTitle(event.target.value)} placeholder="Forza 4 settimane" />
        </label>
        <label>
          Stato programma
          <select value={planStatus} onChange={(event) => setPlanStatus(event.target.value as 'draft' | 'active' | 'archived')}>
            <option value="draft">Bozza</option>
            <option value="active">Attivo</option>
            <option value="archived">Archiviato</option>
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
              'Programma creato con successo.',
            )
          }
          type="button"
        >
          Salva programma
        </button>
      </article>

      <article className="card">
        <h2>Pianifica una sessione</h2>
        <label>
          Codice cliente
          <input value={clientUid} onChange={(event) => setClientUid(event.target.value)} placeholder="Inserisci il codice cliente" />
        </label>
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
          disabled={!clientUid || !startsAt || !endsAt || loading}
          onClick={() =>
            void runAction(
              () => createSessionAsCoach({ clientId: clientUid, startsAt, endsAt, type: sessionType }),
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
        <p className="hint">Clienti collegati: {clients.length}</p>
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
