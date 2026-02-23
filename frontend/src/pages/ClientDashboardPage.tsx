import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  getUserProfile,
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
  exercises?: Array<{
    name?: string;
    sets?: number;
    reps?: string;
    weight?: string;
    mediaUrl?: string;
  }>;
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

function normalizeExercises(value: unknown): Array<{ name: string; sets: number; reps: string; weight: string; mediaUrl: string }> {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const raw = item as Record<string, unknown>;
      return {
        name: typeof raw.name === 'string' ? raw.name : '',
        sets: typeof raw.sets === 'number' ? raw.sets : Number(raw.sets ?? 0) || 0,
        reps: typeof raw.reps === 'string' ? raw.reps : '',
        weight: typeof raw.weight === 'string' ? raw.weight : '',
        mediaUrl: typeof raw.mediaUrl === 'string' ? raw.mediaUrl : '',
      };
    })
    .filter((item): item is { name: string; sets: number; reps: string; weight: string; mediaUrl: string } => Boolean(item));
}

export function ClientDashboardPage() {
  const { role, user } = useAuthState();
  const navigate = useNavigate();
  const { showError } = useToast();
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [sessions, setSessions] = useState<Array<SessionDoc & { id: string }>>([]);
  const [logs, setLogs] = useState<Array<WorkoutLogDoc & { id: string }>>([]);
  const [metrics, setMetrics] = useState<Array<MetricDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);

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
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (role === 'client') void loadData();
  }, [role]);

  const nextSession = useMemo(
    () =>
      [...sessions]
        .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
        .find((item) => new Date(item.startsAt).getTime() > Date.now()),
    [sessions],
  );
  const topPlan = plans[0];
  const topPlanExercises = normalizeExercises(topPlan?.exercises);

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
        <h2>La tua scheda tecnica</h2>
        {topPlan ? (
          <>
            <p className="hint"><strong>{topPlan.title}</strong></p>
            <ul className="list">
              {topPlanExercises.map((exercise, index) => (
                <li key={`plan-ex-${index}`}>
                  <strong>{exercise.name || `Esercizio ${index + 1}`}</strong>
                  {' · '}
                  {exercise.sets ?? '-'} serie
                  {' · '}
                  {exercise.reps || '-'} reps
                  {' · '}
                  {exercise.weight || '-'}
                  {exercise.mediaUrl ? (
                    <>
                      {' · '}
                      <a href={exercise.mediaUrl} target="_blank" rel="noreferrer">
                        Video/Immagine
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="hint">La tua scheda non è ancora disponibile. Il coach la pubblicherà a breve.</p>
        )}
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
    </AppShell>
  );
}
