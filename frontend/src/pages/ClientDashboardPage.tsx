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
    <AppShell role="client" subtitle="Allenamenti, log e metriche, ottimizzati per uso da telefono." title="Dashboard Cliente">
      <article className="card">
        <h2>Riepilogo rapido</h2>
        <p className="hint">Piani assegnati: {plans.length}</p>
        <p className="hint">Sessioni pianificate: {sessions.length}</p>
        <p className="hint">Log inviati: {logs.length}</p>
        <p className="hint">Metriche: {metrics.length}</p>
        {nextSession ? <p className="message success">Prossima sessione: {new Date(nextSession.startsAt).toLocaleString('it-IT')}</p> : null}
      </article>

      <article className="card">
        <h2>Trainer UID</h2>
        <label>
          Trainer assegnato
          <input value={trainerId} onChange={(event) => setTrainerId(event.target.value)} placeholder="uid coach" />
        </label>
      </article>

      <article className="card">
        <h2>Nuovo Workout Log</h2>
        <label>
          Data sessione
          <input value={logDate} onChange={(event) => setLogDate(event.target.value)} type="date" />
        </label>
        <label>
          Note
          <textarea value={logNotes} onChange={(event) => setLogNotes(event.target.value)} placeholder="come è andato l'allenamento" />
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
              'Workout log salvato.',
            )
          }
          type="button"
        >
          Salva log
        </button>
      </article>

      <article className="card">
        <h2>Nuova metrica</h2>
        <label>
          Tipo metrica
          <input value={metricType} onChange={(event) => setMetricType(event.target.value)} placeholder="weight, bf, vo2..." />
        </label>
        <label>
          Valore
          <input value={metricValue} onChange={(event) => setMetricValue(Number(event.target.value))} type="number" />
        </label>
        <label>
          Unità
          <input value={metricUnit} onChange={(event) => setMetricUnit(event.target.value)} placeholder="kg, %, bpm..." />
        </label>
        <label>
          Data misurazione
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
              'Metrica salvata.',
            )
          }
          type="button"
        >
          Salva metrica
        </button>
      </article>

      <article className="card">
        <h2>Ultimi log</h2>
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
