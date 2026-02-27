import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  deleteMyProfile,
  getPlanByClientId,
  getUserPrivateDoc,
  getUserProfile,
  listPlansForRole,
  logoutCurrentUser,
  useAuthState,
} from '../lib';
import { AppShell } from '../components/AppShell';
import { buildWhatsAppUrl } from '../config/support';
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
  assignedCoachId?: string;
  assignedCoachPhone?: string;
  assignedCoachName?: string;
}

interface OnboardingDoc {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  sex?: string;
  heightCm?: string;
  weightKg?: string;
  objectivePrimary?: string;
}

type ClientTabId = 'plan' | 'profile';

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

function normalizeWhatsappPhone(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, '').replace(/\s+/g, '');
  if (!digits) return '';
  if (digits.startsWith('+')) return digits.slice(1);
  if (digits.startsWith('00')) return digits.slice(2);
  if (digits.startsWith('39')) return digits;
  if (digits.length >= 9) return `39${digits}`;
  return digits;
}

export function ClientDashboardPage() {
  const { role, user } = useAuthState();
  const navigate = useNavigate();
  const { showError } = useToast();
  const [plans, setPlans] = useState<Array<PlanDoc & { id: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);
  const [mediaPreview, setMediaPreview] = useState<{ url: string; label: string } | null>(null);
  const [onboarding, setOnboarding] = useState<OnboardingDoc | null>(null);
  const [activeTab, setActiveTab] = useState<ClientTabId>('plan');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingProfile, setDeletingProfile] = useState(false);
  const [coachWhatsappNumber, setCoachWhatsappNumber] = useState('');
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
      const onboardingSnap = authUid ? await getUserPrivateDoc(authUid, 'onboarding') : null;
      setOnboarding((onboardingSnap?.data() as OnboardingDoc | undefined) ?? null);
      let nextCoachPhone = normalizeWhatsappPhone(profile.assignedCoachPhone ?? '');
      if (!nextCoachPhone && profile.assignedCoachId) {
        try {
          const coachProfileSnap = await getUserProfile(profile.assignedCoachId);
          const coachProfile = coachProfileSnap.data() as { phone?: unknown } | undefined;
          nextCoachPhone = normalizeWhatsappPhone(typeof coachProfile?.phone === 'string' ? coachProfile.phone : '');
        } catch {
          nextCoachPhone = '';
        }
      }
      setCoachWhatsappNumber(nextCoachPhone);

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

  async function handleDeleteProfile() {
    setDeletingProfile(true);
    try {
      await deleteMyProfile();
      await logoutCurrentUser().catch(() => undefined);
      navigate('/auth', { replace: true });
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setDeletingProfile(false);
      setIsDeleteModalOpen(false);
    }
  }

  const topPlan = plans[0];
  const topPlanExercises = normalizeExercises(topPlan?.exercises);
  const hasCoachWhatsapp = coachWhatsappNumber.length > 6;
  const coachWhatsappUrl = hasCoachWhatsapp ? buildWhatsAppUrl(whatsappMessage, coachWhatsappNumber) : '#';
  const profileRows = [
    { label: 'Nome e cognome', value: onboarding?.fullName },
    { label: 'E-mail', value: onboarding?.email ?? user?.email },
    { label: 'Telefono', value: onboarding?.phone },
    { label: 'Età', value: onboarding?.age },
    { label: 'Sesso', value: onboarding?.sex },
    { label: 'Altezza', value: onboarding?.heightCm ? `${onboarding.heightCm} cm` : '' },
    { label: 'Peso', value: onboarding?.weightKg ? `${onboarding.weightKg} kg` : '' },
    { label: 'Obiettivo', value: onboarding?.objectivePrimary },
  ].filter((item) => (item.value ?? '').toString().trim().length > 0);

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
      subtitle="Scheda tecnica e anagrafica in un unico spazio chiaro."
      title="La tua area"
      sections={[
        { id: 'plan', label: 'Scheda', mobileLabel: 'Scheda', icon: '🔥' },
        { id: 'profile', label: 'Profilo', mobileLabel: 'Profilo', icon: '👤' },
      ]}
      activeSection={activeTab}
      onSectionChange={(nextTab) => setActiveTab(nextTab as ClientTabId)}
      headerAction={
        <div className="mobile-only">
          <a
            className={`btn btn-whatsapp btn-block ${hasCoachWhatsapp ? '' : 'btn-disabled'}`.trim()}
            href={coachWhatsappUrl}
            onClick={(event) => {
              if (!hasCoachWhatsapp) event.preventDefault();
            }}
            target="_blank"
            rel="noreferrer"
          >
            Scrivi al tuo PT su WhatsApp
          </a>
        </div>
      }
    >
      {activeTab === 'plan' ? (
        <>
          <article className="card desktop-only">
            <h2>Parla con il tuo Personal Trainer</h2>
            <p className="hint">Per feedback sulla scheda o qualsiasi dubbio, scrivi direttamente su WhatsApp.</p>
            <a
              className={`btn btn-whatsapp btn-block ${hasCoachWhatsapp ? '' : 'btn-disabled'}`.trim()}
              href={coachWhatsappUrl}
              onClick={(event) => {
                if (!hasCoachWhatsapp) event.preventDefault();
              }}
              target="_blank"
              rel="noreferrer"
            >
              Apri chat WhatsApp
            </a>
            {!hasCoachWhatsapp ? <p className="message">Numero WhatsApp coach non ancora configurato.</p> : null}
          </article>

          <article className="card">
            <h2>La tua scheda tecnica</h2>
            {topPlan ? (
              <>
                <div className="plan-head">
                  <p className="hint">Programma attivo</p>
                  <h3>{topPlan.title}</h3>
                </div>
                <div className="exercise-grid">
                  {topPlanExercises.map((exercise, index) => (
                    <article className="exercise-card" key={`plan-ex-${index}`}>
                      <p className="exercise-name">{exercise.name || `Esercizio ${index + 1}`}</p>
                      <div className="exercise-meta">
                        <span>{exercise.sets ?? '-'} serie</span>
                        <span>{exercise.reps || '-'} reps</span>
                        <span>{exercise.weight || 'Peso libero'}</span>
                      </div>
                      {exercise.mediaUrl ? (
                        <button className="btn-link" type="button" onClick={() => setMediaPreview({ url: exercise.mediaUrl, label: exercise.name || `Esercizio ${index + 1}` })}>
                          {toYouTubeEmbedUrl(exercise.mediaUrl) || isVideoUrl(exercise.mediaUrl) ? 'Apri video' : isImageUrl(exercise.mediaUrl) ? 'Apri immagine' : 'Apri link'}
                        </button>
                      ) : (
                        <p className="hint">Nessun media allegato</p>
                      )}
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <p className="hint">La tua scheda non è ancora disponibile. Il coach la pubblicherà a breve.</p>
            )}
          </article>
        </>
      ) : null}

      {activeTab === 'profile' ? (
        <article className="card">
          <h2>Profilo e anagrafica</h2>
          {profileRows.length > 0 ? (
            <div className="client-info-block">
              {profileRows.map((row) => (
                <p key={row.label} className="hint">
                  <strong>{row.label}:</strong> {row.value}
                </p>
              ))}
            </div>
          ) : (
            <p className="hint">Anagrafica non ancora disponibile.</p>
          )}
          <a
            className={`btn btn-whatsapp btn-block ${hasCoachWhatsapp ? '' : 'btn-disabled'}`.trim()}
            href={coachWhatsappUrl}
            onClick={(event) => {
              if (!hasCoachWhatsapp) event.preventDefault();
            }}
            target="_blank"
            rel="noreferrer"
          >
            Scrivi al tuo PT su WhatsApp
          </a>
          {!hasCoachWhatsapp ? <p className="message">Numero WhatsApp coach non ancora configurato.</p> : null}
          <div className="divider" />
          <h3>Elimina profilo</h3>
          <p className="hint">
            Se elimini il profilo perderai tutti i dati associati al tuo account, in linea con le policy aziendali.
          </p>
          <button className="btn btn-danger" type="button" onClick={() => setIsDeleteModalOpen(true)}>
            Elimina il mio profilo
          </button>
        </article>
      ) : null}

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

      {isDeleteModalOpen ? (
        <section className="modal-overlay" role="dialog" aria-modal="true">
          <article className="card modal-card">
            <h2>Conferma eliminazione profilo</h2>
            <p className="hint">
              Eliminando il profilo perderai definitivamente account, anagrafica, scheda e dati collegati.
            </p>
            <p className="hint">
              L&apos;operazione segue le policy aziendali. Termini, Condizioni d&apos;uso e Privacy Policy verranno pubblicati e linkati qui.
            </p>
            <div className="onboarding-actions">
              <button className="btn btn-ghost" type="button" disabled={deletingProfile} onClick={() => setIsDeleteModalOpen(false)}>
                Annulla
              </button>
              <button className="btn btn-danger" type="button" disabled={deletingProfile} onClick={() => void handleDeleteProfile()}>
                {deletingProfile ? 'Eliminazione...' : 'Conferma eliminazione'}
              </button>
            </div>
          </article>
        </section>
      ) : null}
    </AppShell>
  );
}
