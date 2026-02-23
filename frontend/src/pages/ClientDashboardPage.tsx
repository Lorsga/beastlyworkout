import { useEffect, useMemo, useState } from 'react';

import {
  createMetricAsClient,
  createWorkoutLogAsClient,
  listMetricsForClient,
  listPlansForRole,
  listSessionsForRole,
  listWorkoutLogsForClient,
  useAuthState,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { mapDocs, toMessage } from '../utils/firestore';

interface PlanDoc {
  trainerId: string;
  title: string;
  status: string;
}

interface SessionDoc {
  startsAt: string;
  type: string;
}

interface WorkoutLogDoc {
  sessionDate: string;
  notes: string;
  trainerFeedback?: string;
}

interface MetricDoc {
  metricType: string;
  value: number;
  unit: string;
  measuredAt: string;
}

export function ClientDashboardPage() {
  const { role } = useAuthState();
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [sessions, setSessions] = useState<Array<SessionDoc & { id: string }>>([]);
  const [logs, setLogs] = useState<Array<WorkoutLogDoc & { id: string }>>([]);
  const [metrics, setMetrics] = useState<Array<MetricDoc & { id: string }>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [trainerId, setTrainerId] = useState('');
  const [logDate, setLogDate] = useState('');
  const [logNotes, setLogNotes] = useState('');
  const [metricType, setMetricType] = useState('weight');
  const [metricValue, setMetricValue] = useState<number>(0);
  const [metricUnit, setMetricUnit] = useState('kg');
  const [metricDate, setMetricDate] = useState('');

  async function loadData() {
    setLoading(true);
    setErrorMessage('');
    try {
      const [plansSnap, sessionsSnap, logsSnap, metricsSnap] = await Promise.all([
        listPlansForRole('client'),
        listSessionsForRole('client'),
        listWorkoutLogsForClient(),
        listMetricsForClient(),
      ]);
      const mappedPlans = mapDocs<PlanDoc>(plansSnap.docs);
      setPlans(mappedPlans);
      setSessions(mapDocs<SessionDoc>(sessionsSnap.docs));
      setLogs(mapDocs<WorkoutLogDoc>(logsSnap.docs));
      setMetrics(mapDocs<MetricDoc>(metricsSnap.docs));
      if (!trainerId && mappedPlans[0]?.trainerId) setTrainerId(mappedPlans[0].trainerId);
    } catch (error) {
      setErrorMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (role === 'client') void loadData();
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

  const nextSession = useMemo(
    () =>
      [...sessions]
        .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
        .find((item) => new Date(item.startsAt).getTime() > Date.now()),
    [sessions],
  );

  return (
    <AppShell role="client" subtitle="Tieni traccia di allenamenti e progressi in modo semplice." title="La tua area">
      <article className="card">
        <h2>Riepilogo</h2>
        <p className="hint">Programmi ricevuti: {plans.length}</p>
        <p className="hint">Sessioni prenotate: {sessions.length}</p>
        <p className="hint">Allenamenti registrati: {logs.length}</p>
        <p className="hint">Progressi inseriti: {metrics.length}</p>
        {nextSession ? <p className="message success">Prossima sessione: {new Date(nextSession.startsAt).toLocaleString('it-IT')}</p> : null}
      </article>

      <article className="card">
        <h2>Codice Coach</h2>
        <label>
          Codice del tuo coach
          <input value={trainerId} onChange={(event) => setTrainerId(event.target.value)} placeholder="Inserisci il codice coach" />
        </label>
      </article>

      <article className="card">
        <h2>Registra allenamento</h2>
        <label>
          Data allenamento
          <input value={logDate} onChange={(event) => setLogDate(event.target.value)} type="date" />
        </label>
        <label>
          Com'è andata?
          <textarea value={logNotes} onChange={(event) => setLogNotes(event.target.value)} placeholder="Scrivi come ti sei sentito durante l'allenamento" />
        </label>
        <button
          className="btn"
          disabled={!trainerId || !logDate || loading}
          onClick={() =>
            void runAction(
              () =>
                createWorkoutLogAsClient({
                  trainerId,
                  sessionDate: logDate,
                  notes: logNotes,
                }),
              'Allenamento salvato.',
            )
          }
          type="button"
        >
          Salva allenamento
        </button>
      </article>

      <article className="card">
        <h2>Aggiorna progressi</h2>
        <label>
          Tipo di dato
          <input value={metricType} onChange={(event) => setMetricType(event.target.value)} placeholder="Es. peso, massa grassa, frequenza" />
        </label>
        <label>
          Valore
          <input value={metricValue} onChange={(event) => setMetricValue(Number(event.target.value))} type="number" />
        </label>
        <label>
          Unità
          <input value={metricUnit} onChange={(event) => setMetricUnit(event.target.value)} placeholder="Es. kg, %, bpm" />
        </label>
        <label>
          Data
          <input value={metricDate} onChange={(event) => setMetricDate(event.target.value)} type="date" />
        </label>
        <button
          className="btn"
          disabled={!trainerId || !metricDate || loading}
          onClick={() =>
            void runAction(
              () =>
                createMetricAsClient({
                  trainerId,
                  metricType,
                  value: metricValue,
                  unit: metricUnit,
                  measuredAt: metricDate,
                }),
              'Progresso salvato.',
            )
          }
          type="button"
        >
          Salva progresso
        </button>
      </article>

      <article className="card">
        <h2>Ultimi allenamenti</h2>
        <ul className="list">
          {logs.slice(0, 5).map((log) => (
            <li key={log.id}>
              <strong>{log.sessionDate}</strong> · {log.notes || 'Nessuna nota'}
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
