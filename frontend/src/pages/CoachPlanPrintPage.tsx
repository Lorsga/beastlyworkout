import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { getPlanById, listAssignedClientsAsCoach, syncPlanWeightOverridesForCoach, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

interface PlanDoc {
  title?: string;
  kind?: 'series_reps' | 'circuit';
  notes?: string;
  warmup?: string;
  assignedClientIds?: string[];
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
    videoUrl?: string;
    imageUrl?: string;
  }>;
}

interface UserProfileDoc {
  uid?: string;
  displayName?: string;
  email?: string;
}

function asText(value: unknown): string {
  return typeof value === 'string' ? value : value == null ? '' : String(value);
}

function isVideoMediaUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be') || /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(url);
}

function isImageMediaUrl(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i.test(url);
}

function normalizePlanExercises(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const raw = item as Record<string, unknown>;
      const legacyWeight = Number(asText(raw.weight).replace(/[^\d.-]/g, ''));
      const rawAdvancedMethod = asText(raw.advancedMethod).trim();
      const advancedMethod = rawAdvancedMethod === 'rest_pause' || rawAdvancedMethod === 'drop_set' ? rawAdvancedMethod : '';
      const legacyAdvancedMethodNotes = asText(raw.advancedMethodNotes);
      const rawRestPauseNotes = asText(raw.restPauseNotes);
      const rawDropSetNotes = asText(raw.dropSetNotes);
      const rawMediaUrl = asText(raw.mediaUrl).trim();
      const rawVideoUrl = asText(raw.videoUrl).trim();
      const rawImageUrl = asText(raw.imageUrl).trim();
      const normalizedVideoUrl = rawVideoUrl || (isVideoMediaUrl(rawMediaUrl) ? rawMediaUrl : '');
      const normalizedImageUrl = rawImageUrl || (isImageMediaUrl(rawMediaUrl) ? rawMediaUrl : '');
      return {
        name: asText(raw.name),
        notes: asText(raw.notes),
        advancedMethod,
        restPauseNotes: rawRestPauseNotes || (advancedMethod === 'rest_pause' ? legacyAdvancedMethodNotes : ''),
        dropSetNotes: rawDropSetNotes || (advancedMethod === 'drop_set' ? legacyAdvancedMethodNotes : ''),
        sets: Number(raw.sets ?? 3) || 3,
        reps: Number(raw.reps ?? 10) || 10,
        workValue: Number(raw.workValue ?? raw.reps ?? 10) || 10,
        weightKg: Number(raw.weightKg ?? legacyWeight ?? 0) || 0,
        restSeconds: Number(raw.restSeconds ?? 60) || 60,
        videoUrl: normalizedVideoUrl,
        imageUrl: normalizedImageUrl,
      };
    })
    .filter((item): item is {
      name: string;
      notes: string;
      advancedMethod: '' | 'rest_pause' | 'drop_set';
      restPauseNotes: string;
      dropSetNotes: string;
      sets: number;
      reps: number;
      workValue: number;
      weightKg: number;
      restSeconds: number;
      videoUrl: string;
      imageUrl: string;
    } => Boolean(item));
}

function getPlanWeightFeedback(
  plan: PlanDoc,
  clientLabelById: Record<string, string>,
) {
  const overrides = plan.clientWeightOverrides && typeof plan.clientWeightOverrides === 'object'
    ? plan.clientWeightOverrides
    : {};
  const baseExercises = normalizePlanExercises(plan.exercises);
  const feedback: Array<{clientId: string; clientLabel: string; lines: string[]}> = [];

  for (const [clientId, rawExerciseMap] of Object.entries(overrides)) {
    if (!rawExerciseMap || typeof rawExerciseMap !== 'object') continue;
    const lines: string[] = [];
    for (const [rawIndex, rawWeight] of Object.entries(rawExerciseMap)) {
      const exerciseIndex = Number(rawIndex);
      if (!Number.isInteger(exerciseIndex) || exerciseIndex < 0 || exerciseIndex >= baseExercises.length) continue;
      const nextWeight = Number(rawWeight);
      if (!Number.isFinite(nextWeight)) continue;
      const base = baseExercises[exerciseIndex];
      const baseWeight = Number(base.weightKg || 0);
      if (nextWeight === baseWeight) continue;
      const exerciseName = base.name.trim() || `Esercizio ${exerciseIndex + 1}`;
      lines.push(`${exerciseName}: ${baseWeight} kg -> ${nextWeight} kg`);
    }
    if (lines.length === 0) continue;
    feedback.push({
      clientId,
      clientLabel: clientLabelById[clientId] || clientId,
      lines,
    });
  }

  return feedback;
}

export function CoachPlanPrintPage() {
  const { user, role } = useAuthState();
  const navigate = useNavigate();
  const { planId = '' } = useParams<{ planId: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [plan, setPlan] = useState<(PlanDoc & { id: string }) | null>(null);
  const [clients, setClients] = useState<Array<UserProfileDoc & { id: string }>>([]);

  useEffect(() => {
    async function load() {
      if (!planId || !user) return;
      setLoading(true);
      setError('');
      try {
        await syncPlanWeightOverridesForCoach(planId).catch(() => undefined);
        const [planSnap, clientsSnap] = await Promise.all([
          getPlanById(planId),
          listAssignedClientsAsCoach(user.uid),
        ]);
        if (!planSnap.exists()) {
          setError('Scheda non trovata.');
          return;
        }
        setPlan({ id: planSnap.id, ...(planSnap.data() as PlanDoc) });
        setClients(clientsSnap.docs.map((docItem) => ({ id: docItem.id, ...(docItem.data() as UserProfileDoc) })));
      } catch (nextError) {
        setError(toMessage(nextError));
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, [planId, user?.uid]);

  const clientLabelById = useMemo(
    () =>
      clients.reduce<Record<string, string>>((acc, client) => {
        const label = asText(client.displayName).trim() || asText(client.email).trim() || client.id;
        const uid = asText(client.uid).trim() || client.id;
        acc[uid] = label;
        acc[client.id] = label;
        return acc;
      }, {}),
    [clients],
  );

  if (!user) return <Navigate to="/auth" replace />;
  if (role === 'client') return <Navigate to="/app/client" replace />;

  if (loading) {
    return (
      <main className="page page-top">
        <section className="card print-sheet" style={{ width: 'min(900px, 100%)' }}>
          <p className="eyebrow">Scheda</p>
          <h1>Caricamento in corso...</h1>
        </section>
      </main>
    );
  }

  if (error || !plan) {
    return (
      <main className="page page-top">
        <section className="card print-sheet" style={{ width: 'min(900px, 100%)' }}>
          <h1>Impossibile aprire la scheda</h1>
          <p className="hero-sub">{error || 'Qualcosa non ha funzionato.'}</p>
          <button className="btn btn-ghost screen-only" type="button" onClick={() => navigate('/app/coach')}>
            Torna all&apos;area coach
          </button>
        </section>
      </main>
    );
  }

  const exercises = normalizePlanExercises(plan.exercises);
  const feedback = getPlanWeightFeedback(plan, clientLabelById);
  const assignedNames = Array.isArray(plan.assignedClientIds) && plan.assignedClientIds.length > 0
    ? plan.assignedClientIds.map((id) => clientLabelById[id] || id).join(', ')
    : 'Nessuno';

  return (
    <main className="page page-top">
      <section className="card print-sheet" style={{ width: 'min(900px, 100%)' }}>
        <div className="exercise-head screen-only">
          <div className="preview-head-main">
            <button className="icon-btn" type="button" aria-label="Indietro" title="Indietro" onClick={() => navigate('/app/coach')}>
              ←
            </button>
            <h2>Scheda</h2>
          </div>
          <div className="preview-head-actions">
            <button className="icon-btn" type="button" aria-label="Stampa scheda" title="Stampa scheda" onClick={() => window.print()}>
              🖨
            </button>
          </div>
        </div>

        <p className="hint">
          Clienti assegnati: <strong>{assignedNames}</strong>
        </p>
        <div className="plan-head">
          <p className="hint">Titolo programma</p>
          <h3>{plan.title || 'Senza titolo'}</h3>
        </div>
        <p className="hint">
          Tipo scheda: <strong>{plan.kind === 'circuit' ? 'Circuito' : 'Serie e reps'}</strong>
        </p>
        {asText(plan.warmup).trim() ? (
          <div className="client-info-block">
            <p className="hint"><strong>Riscaldamento:</strong> {asText(plan.warmup)}</p>
          </div>
        ) : null}
        {asText(plan.notes).trim() ? (
          <div className="client-info-block">
            <p className="hint"><strong>Note coach:</strong> {asText(plan.notes)}</p>
          </div>
        ) : null}
        {feedback.length > 0 ? (
          <div className="client-info-block">
            <h3>Feedback peso cliente</h3>
            {feedback.map((item) => (
              <div key={`weight-feedback-${item.clientId}`} className="divider-block">
                <p className="hint"><strong>{item.clientLabel}</strong></p>
                <ul className="list">
                  {item.lines.map((line) => (
                    <li key={`${item.clientId}-${line}`}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        <div className="exercise-grid">
          {exercises.map((exercise, index) => (
            <article className="exercise-card" key={`print-ex-${index}`}>
              <p className="exercise-name">{exercise.name || `Esercizio ${index + 1}`}</p>
              <div className="exercise-meta">
                {plan.kind === 'circuit' ? (
                  <span>{exercise.workValue || '-'} reps/tempo</span>
                ) : (
                  <>
                    <span>{exercise.sets || '-'} serie</span>
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
              {exercise.notes.trim() ? <p className="hint"><strong>Note:</strong> {exercise.notes}</p> : null}
              {exercise.imageUrl ? <img src={exercise.imageUrl} alt={`Media esercizio ${index + 1}`} className="exercise-upload-preview" /> : null}
              {exercise.videoUrl ? <a className="hint print-video-link" href={exercise.videoUrl} target="_blank" rel="noreferrer">URL video: {exercise.videoUrl}</a> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
