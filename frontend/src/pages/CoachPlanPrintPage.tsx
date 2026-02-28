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

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
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
  const [imagesReady, setImagesReady] = useState(true);
  const [pendingImages, setPendingImages] = useState(0);
  const [openingPrintPreview, setOpeningPrintPreview] = useState(false);

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

  const exercises = useMemo(() => normalizePlanExercises(plan?.exercises), [plan?.exercises]);
  const imageUrls = useMemo(
    () => exercises.map((exercise) => exercise.imageUrl).filter((url): url is string => Boolean(url)),
    [exercises],
  );

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesReady(true);
      setPendingImages(0);
      return;
    }

    let cancelled = false;
    setImagesReady(false);
    setPendingImages(imageUrls.length);

    let resolved = 0;
    const onResolved = () => {
      resolved += 1;
      if (cancelled) return;
      const remaining = Math.max(imageUrls.length - resolved, 0);
      setPendingImages(remaining);
      if (remaining === 0) setImagesReady(true);
    };

    const cleanups = imageUrls.map((url) => {
      const image = new Image();
      const done = () => {
        image.onload = null;
        image.onerror = null;
        onResolved();
      };
      image.onload = done;
      image.onerror = done;
      image.src = url;
      const timeoutId = window.setTimeout(done, 9000);
      return () => window.clearTimeout(timeoutId);
    });

    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [imageUrls]);

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
          <button className="btn btn-ghost screen-only" type="button" onClick={() => navigate('/app/coach#plans')}>
            Torna all&apos;area coach
          </button>
        </section>
      </main>
    );
  }

  const currentPlan = plan;
  const feedback = getPlanWeightFeedback(plan, clientLabelById);
  const assignedNames = Array.isArray(currentPlan.assignedClientIds) && currentPlan.assignedClientIds.length > 0
    ? currentPlan.assignedClientIds.map((id) => clientLabelById[id] || id).join(', ')
    : 'Nessuno';

  function handleFastPrint() {
    setOpeningPrintPreview(true);

    const feedbackHtml = feedback.length > 0
      ? `
      <section class="block">
        <h3>Feedback peso cliente</h3>
        ${feedback
          .map(
            (item) => `
          <div class="sub">
            <p><strong>${escapeHtml(item.clientLabel)}</strong></p>
            <ul>
              ${item.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}
            </ul>
          </div>`,
          )
          .join('')}
      </section>`
      : '';

    const exercisesHtml = exercises
      .map(
        (exercise, index) => `
      <article class="exercise">
        <h4>${escapeHtml(exercise.name || `Esercizio ${index + 1}`)}</h4>
        <p class="meta">${
          currentPlan.kind === 'circuit'
            ? `${exercise.workValue || '-'} reps/tempo`
            : `${exercise.sets || '-'} serie · ${exercise.reps || '-'} reps`
        } · ${exercise.weightKg || 0} kg · ${exercise.restSeconds || 0} sec recupero</p>
        ${exercise.advancedMethod ? `<p><strong>Metodo:</strong> ${exercise.advancedMethod === 'rest_pause' ? 'Rest Pause' : 'Drop set'}</p>` : ''}
        ${
          exercise.advancedMethod && (exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes).trim()
            ? `<p><strong>Note metodo:</strong> ${escapeHtml(exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes)}</p>`
            : ''
        }
        ${exercise.notes.trim() ? `<p><strong>Note:</strong> ${escapeHtml(exercise.notes)}</p>` : ''}
        ${exercise.imageUrl ? `<img src="${escapeHtml(exercise.imageUrl)}" alt="Media esercizio ${index + 1}" />` : ''}
        ${exercise.videoUrl ? `<p><a href="${escapeHtml(exercise.videoUrl)}" target="_blank" rel="noreferrer">URL video: ${escapeHtml(exercise.videoUrl)}</a></p>` : ''}
      </article>`,
      )
      .join('');

    const html = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(currentPlan.title || 'Scheda')}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 16px; color: #111; }
    h1, h2, h3, h4 { margin: 0 0 8px; }
    .block { border: 1px solid #e5e5e5; border-radius: 12px; padding: 12px; margin: 10px 0; }
    .sub { border-top: 1px solid #eee; margin-top: 8px; padding-top: 8px; }
    .exercise { border: 1px solid #e5e5e5; border-radius: 12px; padding: 12px; margin: 10px 0; break-inside: avoid; }
    .meta { color: #444; margin: 4px 0 8px; }
    img { display: block; width: 100%; max-height: 260px; object-fit: cover; border-radius: 10px; margin-top: 8px; }
    a { color: #b31217; }
    @media print { body { margin: 10mm; } }
  </style>
</head>
<body>
  <h1>Scheda</h1>
  <p><strong>Clienti assegnati:</strong> ${escapeHtml(assignedNames)}</p>
  <div class="block">
    <p><strong>Titolo programma:</strong> ${escapeHtml(currentPlan.title || 'Senza titolo')}</p>
    <p><strong>Tipo scheda:</strong> ${escapeHtml(currentPlan.kind === 'circuit' ? 'Circuito' : 'Serie e reps')}</p>
    ${asText(currentPlan.warmup).trim() ? `<p><strong>Riscaldamento:</strong> ${escapeHtml(asText(currentPlan.warmup))}</p>` : ''}
    ${asText(currentPlan.notes).trim() ? `<p><strong>Note coach:</strong> ${escapeHtml(asText(currentPlan.notes))}</p>` : ''}
  </div>
  ${feedbackHtml}
  ${exercisesHtml}
</body>
</html>`;

    const iframe = document.createElement('iframe');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.border = '0';
    iframe.style.opacity = '0';
    iframe.style.pointerEvents = 'none';
    document.body.appendChild(iframe);

    const printWindow = iframe.contentWindow;
    const printDocument = printWindow?.document;
    if (!printWindow || !printDocument) {
      iframe.remove();
      setOpeningPrintPreview(false);
      window.print();
      return;
    }

    printDocument.open();
    printDocument.write(html);
    printDocument.close();

    const cleanup = () => {
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      setOpeningPrintPreview(false);
    };

    const waitForIframeImages = async (): Promise<void> => {
      const images = Array.from(printDocument.images ?? []);
      const pending = images.filter((img) => !img.complete);
      if (pending.length === 0) return;
      await Promise.race([
        Promise.allSettled(
          pending.map(
            (img) =>
              new Promise<void>((resolve) => {
                const done = () => {
                  img.removeEventListener('load', done);
                  img.removeEventListener('error', done);
                  resolve();
                };
                img.addEventListener('load', done, { once: true });
                img.addEventListener('error', done, { once: true });
              }),
          ),
        ),
        new Promise<void>((resolve) => window.setTimeout(resolve, 7000)),
      ]);
    };

    void (async () => {
      await waitForIframeImages();
      printWindow.onafterprint = cleanup;
      setTimeout(() => {
        try {
          printWindow.focus();
          printWindow.print();
        } catch {
          cleanup();
        }
        setTimeout(cleanup, 15000);
      }, 80);
    })();
  }

  return (
    <main className="page page-top">
      <section className="card print-sheet" style={{ width: 'min(900px, 100%)' }}>
        <div className="exercise-head screen-only">
          <div className="preview-head-main">
            <button className="icon-btn" type="button" aria-label="Indietro" title="Indietro" onClick={() => navigate('/app/coach#plans')}>
              ←
            </button>
            <h2>Scheda</h2>
          </div>
          <div className="preview-head-actions">
            <button
              className="icon-btn btn-inline-loading"
              type="button"
              aria-label="Stampa scheda"
              title={imagesReady ? 'Stampa scheda' : 'Attendi caricamento immagini'}
              onClick={() => {
                if (!imagesReady || openingPrintPreview) return;
                handleFastPrint();
              }}
              disabled={!imagesReady || openingPrintPreview}
            >
              {!imagesReady || openingPrintPreview ? <span className="spinner" aria-hidden="true" /> : '🖨'}
            </button>
          </div>
        </div>
        {!imagesReady ? <p className="hint screen-only">Carico immagini per la stampa... ({pendingImages} rimanenti)</p> : null}
        {openingPrintPreview ? <p className="hint screen-only">Apro anteprima di stampa...</p> : null}

        <p className="hint">
          Clienti assegnati: <strong>{assignedNames}</strong>
        </p>
        <div className="plan-head">
          <p className="hint">Titolo programma</p>
          <h3>{currentPlan.title || 'Senza titolo'}</h3>
        </div>
        <p className="hint">
          Tipo scheda: <strong>{currentPlan.kind === 'circuit' ? 'Circuito' : 'Serie e reps'}</strong>
        </p>
        {asText(currentPlan.warmup).trim() ? (
          <div className="client-info-block">
            <p className="hint"><strong>Riscaldamento:</strong> {asText(currentPlan.warmup)}</p>
          </div>
        ) : null}
        {asText(currentPlan.notes).trim() ? (
          <div className="client-info-block">
            <p className="hint"><strong>Note coach:</strong> {asText(currentPlan.notes)}</p>
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
                {currentPlan.kind === 'circuit' ? (
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
