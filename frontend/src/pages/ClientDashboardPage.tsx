import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  getPlanByClientId,
  getUserProfile,
  listPlansForRole,
  useAuthState,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { buildWhatsAppUrl, HAS_PT_WHATSAPP } from '../config/support';
import { mapDocs, toMessage } from '../utils/firestore';

interface PlanDoc {
  trainerId: string;
  title: string;
  status: string;
  exercises?: Array<{
    name?: string;
    sets?: number;
    reps?: number;
    weight?: string;
    mediaUrl?: string;
  }>;
}

interface UserProfileDoc {
  uid?: string;
  clientId?: string;
}

function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '').trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

function isImageUrl(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i.test(url);
}

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|m4v|ogg)(\?.*)?$/i.test(url);
}

function normalizeExercises(value: unknown): Array<{ name: string; sets: number; reps: number; weight: string; mediaUrl: string }> {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const raw = item as Record<string, unknown>;
      return {
        name: typeof raw.name === 'string' ? raw.name : '',
        sets: typeof raw.sets === 'number' ? raw.sets : Number(raw.sets ?? 0) || 0,
        reps: typeof raw.reps === 'number' ? raw.reps : Number(raw.reps ?? 0) || 0,
        weight: typeof raw.weight === 'string' ? raw.weight : '',
        mediaUrl: typeof raw.mediaUrl === 'string' ? raw.mediaUrl : '',
      };
    })
    .filter((item): item is { name: string; sets: number; reps: number; weight: string; mediaUrl: string } => Boolean(item));
}

export function ClientDashboardPage() {
  const { role, user } = useAuthState();
  const navigate = useNavigate();
  const { showError } = useToast();
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [mediaPreview, setMediaPreview] = useState<{ url: string; label: string } | null>(null);
  const whatsappMessage = 'Ciao coach, avrei bisogno di un feedback sulla mia scheda.';

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
      const authUid = user?.uid ?? '';
      const profileSnap = authUid ? await getUserProfile(authUid) : null;
      const profile = (profileSnap?.data() as UserProfileDoc | undefined) ?? {};

      const candidateIds = Array.from(
        new Set([authUid, (profile.uid ?? '').trim(), (profile.clientId ?? '').trim()].filter((value) => value.length > 0)),
      );

      const planResults = await Promise.allSettled(
        candidateIds.flatMap((candidateId) => [listPlansForRole('client', candidateId), getPlanByClientId(candidateId)]),
      );

      const mergedMap = new Map<string, PlanDoc & { id: string }>();
      for (const result of planResults) {
        if (result.status !== 'fulfilled') continue;
        const value = result.value;
        if ('docs' in value) {
          for (const plan of mapDocs<PlanDoc>(value.docs)) {
            mergedMap.set(plan.id, plan);
          }
        } else if (value.exists()) {
          const plan = { id: value.id, ...(value.data() as PlanDoc) } as PlanDoc & { id: string };
          mergedMap.set(plan.id, plan);
        }
      }

      const mergedPlans = Array.from(mergedMap.values()).sort((a, b) => {
        const aIsDirect = candidateIds.includes(a.id) ? 0 : 1;
        const bIsDirect = candidateIds.includes(b.id) ? 0 : 1;
        return aIsDirect - bIsDirect;
      });
      setPlans(mergedPlans);
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && (role === 'client' || role === null)) void loadData();
  }, [role, user?.uid]);

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
    <AppShell
      role="client"
      subtitle="Tieni traccia di allenamenti e progressi in modo semplice."
      title="La tua area"
      headerAction={
        <div className="mobile-only">
          <a
            className={`btn btn-whatsapp ${HAS_PT_WHATSAPP ? '' : 'btn-disabled'}`.trim()}
            href={HAS_PT_WHATSAPP ? buildWhatsAppUrl(whatsappMessage) : '#'}
            onClick={(event) => {
              if (!HAS_PT_WHATSAPP) event.preventDefault();
            }}
            target="_blank"
            rel="noreferrer"
          >
            Scrivi al tuo PT su WhatsApp
          </a>
        </div>
      }
    >
      <article className="card desktop-only">
        <h2>Parla con il tuo Personal Trainer</h2>
        <p className="hint">Per feedback sulla scheda o qualsiasi dubbio, scrivi direttamente su WhatsApp.</p>
        <a
          className={`btn btn-whatsapp ${HAS_PT_WHATSAPP ? '' : 'btn-disabled'}`.trim()}
          href={HAS_PT_WHATSAPP ? buildWhatsAppUrl(whatsappMessage) : '#'}
          onClick={(event) => {
            if (!HAS_PT_WHATSAPP) event.preventDefault();
          }}
          target="_blank"
          rel="noreferrer"
        >
          Apri chat WhatsApp
        </a>
        {!HAS_PT_WHATSAPP ? <p className="message">Numero WhatsApp PT non ancora configurato.</p> : null}
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
                      <button className="btn-link" type="button" onClick={() => setMediaPreview({ url: exercise.mediaUrl, label: exercise.name || `Esercizio ${index + 1}` })}>
                        {toYouTubeEmbedUrl(exercise.mediaUrl) || isVideoUrl(exercise.mediaUrl) ? 'Apri video' : isImageUrl(exercise.mediaUrl) ? 'Apri immagine' : 'Apri link'}
                      </button>
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

      {loading ? <p className="message">Caricamento...</p> : null}

      {mediaPreview ? (
        <section className="modal-overlay" role="dialog" aria-modal="true">
          <article className="card modal-card">
            <h2>{mediaPreview.label}</h2>
            {toYouTubeEmbedUrl(mediaPreview.url) ? (
              <iframe
                title={mediaPreview.label}
                src={toYouTubeEmbedUrl(mediaPreview.url) ?? undefined}
                className="media-frame"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : isImageUrl(mediaPreview.url) ? (
              <img src={mediaPreview.url} alt={mediaPreview.label} className="media-frame media-image" />
            ) : isVideoUrl(mediaPreview.url) ? (
              <video src={mediaPreview.url} controls className="media-frame" />
            ) : (
              <p className="hint">
                Anteprima non disponibile.{' '}
                <a href={mediaPreview.url} target="_blank" rel="noreferrer">
                  Apri il link
                </a>
              </p>
            )}
            <button className="btn btn-ghost" type="button" onClick={() => setMediaPreview(null)}>
              Chiudi
            </button>
          </article>
        </section>
      ) : null}
    </AppShell>
  );
}
