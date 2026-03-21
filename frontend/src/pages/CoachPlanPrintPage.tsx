import { useEffect, useMemo, useState } from 'react';
import Select, { type MultiValue, type StylesConfig } from 'react-select';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import { assignPlanToClientAsCoach, getPlanById, listAssignedClientsAsCoach, removePlanAssignmentAsCoach, syncPlanWeightOverridesForCoach, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

interface PlanDoc {
  title?: string;
  kind?: 'series_reps' | 'circuit';
  notes?: string;
  warmup?: string;
  warmupVideoUrl?: string;
  warmupImageUrl?: string;
  warmupMediaUrl?: string;
  assignedClientIds?: string[];
  clientWeightOverrides?: Record<string, Record<string, number>>;
  exercises?: Array<{
    movementType?: 'exercise' | 'stretching';
    name?: string;
    notes?: string;
    advancedMethod?: 'rest_pause' | 'drop_set' | '';
    advancedMethodNotes?: string;
    restPauseNotes?: string;
    dropSetNotes?: string;
    sets?: number;
    reps?: number;
    repsUnit?: 'reps' | 'seconds';
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

type ClientOption = { value: string; label: string };
type ExerciseRepsUnit = 'reps' | 'seconds';
type ExerciseMovementType = 'exercise' | 'stretching';

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

function getPlanWarmupVideoUrl(plan: PlanDoc | null | undefined): string {
  if (!plan) return '';
  const explicit = asText((plan as {warmupVideoUrl?: unknown}).warmupVideoUrl).trim();
  if (explicit) return explicit;
  const legacy = asText((plan as {warmupMediaUrl?: unknown}).warmupMediaUrl).trim();
  return isVideoMediaUrl(legacy) ? legacy : '';
}

function getPlanWarmupImageUrl(plan: PlanDoc | null | undefined): string {
  if (!plan) return '';
  const explicit = asText((plan as {warmupImageUrl?: unknown}).warmupImageUrl).trim();
  if (explicit) return explicit;
  const legacy = asText((plan as {warmupMediaUrl?: unknown}).warmupMediaUrl).trim();
  return isImageMediaUrl(legacy) ? legacy : '';
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
      const repsUnit = normalizeExerciseRepsUnit(raw.repsUnit);
      const movementType = normalizeExerciseMovementType(raw.movementType);
      return {
        movementType,
        name: asText(raw.name),
        notes: asText(raw.notes),
        advancedMethod,
        restPauseNotes: rawRestPauseNotes || (advancedMethod === 'rest_pause' ? legacyAdvancedMethodNotes : ''),
        dropSetNotes: rawDropSetNotes || (advancedMethod === 'drop_set' ? legacyAdvancedMethodNotes : ''),
        sets: Number(raw.sets ?? 3) || 3,
        reps: Number(raw.reps ?? 10) || 10,
        repsUnit,
        workValue: Number(raw.workValue ?? raw.reps ?? 10) || 10,
        weightKg: Number(raw.weightKg ?? legacyWeight ?? 0) || 0,
        restSeconds: Number(raw.restSeconds ?? 60) || 60,
        videoUrl: normalizedVideoUrl,
        imageUrl: normalizedImageUrl,
      };
    })
    .filter((item): item is {
      movementType: ExerciseMovementType;
      name: string;
      notes: string;
      advancedMethod: '' | 'rest_pause' | 'drop_set';
      restPauseNotes: string;
      dropSetNotes: string;
      sets: number;
      reps: number;
      repsUnit: ExerciseRepsUnit;
      workValue: number;
      weightKg: number;
      restSeconds: number;
      videoUrl: string;
      imageUrl: string;
    } => Boolean(item));
}

function normalizeExerciseRepsUnit(value: unknown): ExerciseRepsUnit {
  return asText(value).trim() === 'seconds' ? 'seconds' : 'reps';
}

function normalizeExerciseMovementType(value: unknown): ExerciseMovementType {
  return asText(value).trim() === 'stretching' ? 'stretching' : 'exercise';
}

function formatSeriesTarget(value: number, unit: ExerciseRepsUnit): string {
  return `${value || '-'} ${unit === 'seconds' ? 'sec' : 'reps'}`;
}

function splitExercisesByMovementType<T extends { movementType: ExerciseMovementType }>(items: T[]) {
  return {
    exercises: items.filter((item) => item.movementType === 'exercise'),
    stretchings: items.filter((item) => item.movementType === 'stretching'),
  };
}

function splitExercisesByMovementTypeForDisplay<T extends { movementType: ExerciseMovementType }>(items: T[]) {
  const grouped = splitExercisesByMovementType(items);
  return {
    exercises: [...grouped.exercises].reverse(),
    stretchings: [...grouped.stretchings].reverse(),
  };
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
  const { showError, showSuccess } = useToast();
  const { planId = '' } = useParams<{ planId: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [plan, setPlan] = useState<(PlanDoc & { id: string }) | null>(null);
  const [clients, setClients] = useState<Array<UserProfileDoc & { id: string }>>([]);
  const [imagesReady, setImagesReady] = useState(true);
  const [pendingImages, setPendingImages] = useState(0);
  const [openingPrintPreview, setOpeningPrintPreview] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [assigningClientIds, setAssigningClientIds] = useState<string[]>([]);
  const [assigning, setAssigning] = useState(false);

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
  const customStyles: StylesConfig<ClientOption, true> = useMemo(
    () => ({
      control: (base, state) => ({
        ...base,
        minHeight: 48,
        borderRadius: 12,
        borderColor: state.isFocused ? '#ff6a00' : 'rgba(18,18,18,0.16)',
        boxShadow: state.isFocused ? '0 0 0 2px rgba(255,106,0,0.20)' : 'none',
        backgroundColor: '#fff',
        '&:hover': { borderColor: '#ff6a00' },
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 12,
        overflow: 'hidden',
        zIndex: 50,
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#ff6a00' : state.isFocused ? 'rgba(255,106,0,0.10)' : '#fff',
        color: state.isSelected ? '#fff' : '#121212',
        cursor: 'pointer',
      }),
    }),
    [],
  );

  const exercises = useMemo(() => normalizePlanExercises(plan?.exercises), [plan?.exercises]);
  const exerciseSections = useMemo(() => splitExercisesByMovementTypeForDisplay(exercises), [exercises]);
  const imageUrls = useMemo(
    () => {
      const urls = exercises.map((exercise) => exercise.imageUrl).filter((url): url is string => Boolean(url));
      const warmupImage = getPlanWarmupImageUrl(plan);
      if (warmupImage) urls.push(warmupImage);
      return urls;
    },
    [exercises, plan],
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
  const clientOptions: ClientOption[] = clients.map((client) => ({
    value: asText(client.uid).trim() || client.id,
    label: asText(client.displayName).trim() || asText(client.email).trim() || client.id,
  }));
  const unassignedClientOptions: ClientOption[] = clientOptions.filter(
    (option) => !Array.isArray(currentPlan.assignedClientIds) || !currentPlan.assignedClientIds.includes(option.value),
  );
  const assigningClientOptions = clientOptions.filter((option) => assigningClientIds.includes(option.value));
  const assignedClients = clients.filter((client) => {
    const uid = asText(client.uid).trim() || client.id;
    return Array.isArray(currentPlan.assignedClientIds) && currentPlan.assignedClientIds.includes(uid);
  });

  async function assignSelectedClients() {
    if (!planId) return;
    if (assigningClientIds.length === 0) {
      showError('Seleziona almeno un cliente da assegnare.');
      return;
    }

    setAssigning(true);
    try {
      await Promise.all(assigningClientIds.map((clientId) => assignPlanToClientAsCoach(planId, clientId)));
      const fresh = await getPlanById(planId);
      if (fresh.exists()) {
        setPlan({ id: fresh.id, ...(fresh.data() as PlanDoc) });
      }
      setAssigningClientIds([]);
      setIsAssignModalOpen(false);
      showSuccess(assigningClientIds.length === 1 ? 'Scheda assegnata al cliente.' : 'Scheda assegnata ai clienti selezionati.');
    } catch (nextError) {
      showError(toMessage(nextError));
    } finally {
      setAssigning(false);
    }
  }

  async function removeAssignedClient(clientId: string) {
    if (!planId || assigning) return;
    setAssigning(true);
    try {
      await removePlanAssignmentAsCoach(planId, clientId);
      const fresh = await getPlanById(planId);
      if (fresh.exists()) {
        setPlan({ id: fresh.id, ...(fresh.data() as PlanDoc) });
      }
      setAssigningClientIds((prev) => prev.filter((item) => item !== clientId));
      showSuccess('Assegnazione rimossa.');
    } catch (nextError) {
      showError(toMessage(nextError));
    } finally {
      setAssigning(false);
    }
  }

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

    const exercisesHtml = [
      { title: 'Esercizi', items: exerciseSections.exercises },
      { title: 'Stretching', items: exerciseSections.stretchings },
    ]
      .filter((section) => section.items.length > 0)
      .map(
        (section) => `
      <section class="section-block">
        <h3>${escapeHtml(section.title)}</h3>
        ${section.items
          .map(
            (exercise, index) => `
          <article class="exercise">
            <div class="${exercise.imageUrl ? 'exercise-row' : ''}">
              ${exercise.imageUrl ? `<div class="exercise-media"><img src="${escapeHtml(exercise.imageUrl)}" alt="Media ${escapeHtml(section.title)} ${index + 1}" /></div>` : ''}
              <div class="exercise-content">
                <h4>${escapeHtml(exercise.name || `${section.title === 'Stretching' ? 'Stretching' : 'Esercizio'} ${index + 1}`)}</h4>
                <p class="meta">${
                  currentPlan.kind === 'circuit'
                    ? `${exercise.workValue || '-'} reps/tempo`
                    : `${exercise.sets || '-'} serie · ${formatSeriesTarget(exercise.reps, exercise.repsUnit)}`
                } · ${exercise.weightKg || 0} kg · ${exercise.restSeconds || 0} sec recupero</p>
                ${exercise.advancedMethod ? `<p><strong>Metodo:</strong> ${exercise.advancedMethod === 'rest_pause' ? 'Rest Pause' : 'Drop set'}</p>` : ''}
                ${
                  exercise.advancedMethod && (exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes).trim()
                    ? `<p><strong>Note metodo:</strong> ${escapeHtml(exercise.advancedMethod === 'rest_pause' ? exercise.restPauseNotes : exercise.dropSetNotes)}</p>`
                    : ''
                }
                ${exercise.notes.trim() ? `<p><strong>Note:</strong> ${escapeHtml(exercise.notes)}</p>` : ''}
                ${exercise.videoUrl ? `<p><a href="${escapeHtml(exercise.videoUrl)}" target="_blank" rel="noreferrer">URL video: ${escapeHtml(exercise.videoUrl)}</a></p>` : ''}
              </div>
            </div>
          </article>`,
          )
          .join('')}
      </section>`,
      )
      .join('');
    const warmupImageUrl = getPlanWarmupImageUrl(currentPlan);
    const warmupVideoUrl = getPlanWarmupVideoUrl(currentPlan);
    const warmupText = asText(currentPlan.warmup).trim();
    const warmupBlockHtml = warmupText || warmupImageUrl || warmupVideoUrl
      ? `<div class="block">
    <div class="${warmupImageUrl ? 'warmup-row' : ''}">
      ${warmupImageUrl ? `<div class="warmup-media"><img src="${escapeHtml(warmupImageUrl)}" alt="Media riscaldamento" /></div>` : ''}
      <div class="warmup-content">
        ${warmupText ? `<p><strong>Riscaldamento:</strong> ${escapeHtml(warmupText)}</p>` : ''}
        ${warmupVideoUrl ? `<p><a href="${escapeHtml(warmupVideoUrl)}" target="_blank" rel="noreferrer">URL video riscaldamento: ${escapeHtml(warmupVideoUrl)}</a></p>` : ''}
      </div>
    </div>
  </div>`
      : '';

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
    .section-block { margin: 18px 0; }
    .exercise { border: 1px solid #e5e5e5; border-radius: 12px; padding: 12px; margin: 10px 0; break-inside: avoid; }
    .exercise-row { display: flex; gap: 12px; align-items: flex-start; }
    .exercise-media { flex: 0 0 180px; width: 180px; }
    .exercise-content { flex: 1 1 auto; min-width: 0; }
    .warmup-row { display: flex; gap: 12px; align-items: flex-start; }
    .warmup-media { flex: 0 0 180px; width: 180px; }
    .warmup-content { flex: 1 1 auto; min-width: 0; }
    .meta { color: #444; margin: 4px 0 8px; }
    img { display: block; width: 100%; max-height: 260px; object-fit: cover; border-radius: 10px; margin-top: 8px; }
    .exercise-media img { margin-top: 0; }
    .warmup-media img { margin-top: 0; }
    a { color: #b31217; }
    @media print { body { margin: 10mm; } .exercise-row { display: flex; } .warmup-row { display: flex; } }
  </style>
</head>
<body>
  <h1>Scheda</h1>
  <p><strong>Clienti assegnati:</strong> ${escapeHtml(assignedNames)}</p>
  <div class="block">
    <p><strong>Titolo programma:</strong> ${escapeHtml(currentPlan.title || 'Senza titolo')}</p>
    <p><strong>Tipo scheda:</strong> ${escapeHtml(currentPlan.kind === 'circuit' ? 'Circuito' : 'Serie e reps')}</p>
    ${asText(currentPlan.notes).trim() ? `<p><strong>Note coach:</strong> ${escapeHtml(asText(currentPlan.notes))}</p>` : ''}
  </div>
  ${warmupBlockHtml}
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
              className="btn btn-ghost"
              type="button"
              disabled={assigning}
              onClick={() => {
                setAssigningClientIds([]);
                setIsAssignModalOpen(true);
              }}
            >
              Assegna
            </button>
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
        {asText(currentPlan.warmup).trim() || getPlanWarmupImageUrl(currentPlan) || getPlanWarmupVideoUrl(currentPlan) ? (
          <div className="client-info-block">
            <div className={getPlanWarmupImageUrl(currentPlan) ? 'warmup-media-layout' : ''}>
              {getPlanWarmupImageUrl(currentPlan) ? (
                <div className="warmup-media-visual">
                  <img src={getPlanWarmupImageUrl(currentPlan)} alt="Media riscaldamento" className="exercise-upload-preview" />
                </div>
              ) : null}
              <div className="warmup-media-content">
                {asText(currentPlan.warmup).trim() ? (
                  <p className="hint"><strong>Riscaldamento:</strong> {asText(currentPlan.warmup)}</p>
                ) : null}
                {getPlanWarmupVideoUrl(currentPlan) ? (
                  <>
                    <a className="btn-link screen-only" href={getPlanWarmupVideoUrl(currentPlan)} target="_blank" rel="noreferrer">
                      Apri video riscaldamento
                    </a>
                    <a className="hint print-video-link print-only" href={getPlanWarmupVideoUrl(currentPlan)} target="_blank" rel="noreferrer">
                      URL video riscaldamento: {getPlanWarmupVideoUrl(currentPlan)}
                    </a>
                  </>
                ) : null}
              </div>
            </div>
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

        {[
          { id: 'exercise', title: 'Esercizi', items: exerciseSections.exercises },
          { id: 'stretching', title: 'Stretching', items: exerciseSections.stretchings },
        ]
          .filter((section) => section.items.length > 0)
          .map((section) => (
            <section className="plan-preview-section" key={section.id}>
              <div className="plan-builder-group-head">
                <p className="hint">{section.title}</p>
                <strong>{section.items.length}</strong>
              </div>
              <div className="exercise-grid">
                {section.items.map((exercise, index) => (
                  <article className="exercise-card" key={`print-${section.id}-${index}`}>
                    <div className={exercise.imageUrl ? 'coach-exercise-media-layout' : ''}>
                      {exercise.imageUrl ? (
                        <div className="coach-exercise-media-visual">
                          <img src={exercise.imageUrl} alt={`Media ${section.title.toLowerCase()} ${index + 1}`} className="exercise-upload-preview" />
                        </div>
                      ) : null}
                      <div className={exercise.imageUrl ? 'coach-exercise-media-content' : ''}>
                        <p className="exercise-name">{exercise.name || `${section.id === 'stretching' ? 'Stretching' : 'Esercizio'} ${index + 1}`}</p>
                        <div className="exercise-meta">
                          {currentPlan.kind === 'circuit' ? (
                            <span>{exercise.workValue || '-'} reps/tempo</span>
                          ) : (
                            <>
                              <span>{exercise.sets || '-'} serie</span>
                              <span>{formatSeriesTarget(exercise.reps, exercise.repsUnit)}</span>
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
                        {exercise.videoUrl ? <a className="hint print-video-link" href={exercise.videoUrl} target="_blank" rel="noreferrer">URL video: {exercise.videoUrl}</a> : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
      </section>
      {isAssignModalOpen ? (
        <section
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.currentTarget === event.target && !assigning) setIsAssignModalOpen(false);
          }}
        >
          <article className="card modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="exercise-head">
              <h2>Assegna scheda</h2>
              <button
                className="icon-btn"
                type="button"
                aria-label="Chiudi assegnazione"
                title="Chiudi"
                disabled={assigning}
                onClick={() => setIsAssignModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <label>
              Clienti
              <Select<ClientOption, true>
                styles={customStyles}
                options={unassignedClientOptions}
                value={assigningClientOptions}
                onChange={(options: MultiValue<ClientOption>) => setAssigningClientIds(options.map((option) => option.value))}
                placeholder={unassignedClientOptions.length === 0 ? 'Tutti i clienti sono già assegnati' : 'Cerca cliente per nome...'}
                noOptionsMessage={() => 'Nessun risultato'}
                isSearchable
                isMulti
                closeMenuOnSelect={false}
                isDisabled={assigning}
              />
            </label>
            <div className="client-info-block">
              <h3>Clienti assegnati</h3>
              {assignedClients.length === 0 ? (
                <p className="hint">Nessun cliente assegnato.</p>
              ) : (
                assignedClients.map((client) => {
                  const uid = asText(client.uid).trim() || client.id;
                  const label = asText(client.displayName).trim() || asText(client.email).trim() || uid;
                  return (
                    <div key={`assigned-${uid}`} className="assigned-client-item">
                      <span className="assigned-client-name">{label}</span>
                      <button
                        className="icon-btn icon-btn-danger assigned-client-remove-btn"
                        type="button"
                        aria-label={`Rimuovi ${label}`}
                        title="Rimuovi cliente"
                        disabled={assigning}
                        onClick={() => void removeAssignedClient(uid)}
                      >
                        🗑
                      </button>
                    </div>
                  );
                })
              )}
            </div>
            <div className="action-row-split">
              <button className="btn btn-ghost" type="button" disabled={assigning} onClick={() => setIsAssignModalOpen(false)}>
                Annulla
              </button>
              <button
                className="btn btn-primary"
                type="button"
                disabled={assigning || assigningClientIds.length === 0}
                onClick={() => void assignSelectedClients()}
              >
                {assigning ? 'Assegno...' : 'Assegna'}
              </button>
            </div>
          </article>
        </section>
      ) : null}
    </main>
  );
}
