import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { InstallAppBanner } from '../components/InstallAppBanner';
import { useToast } from '../components/ToastProvider';
import {
  acceptCoachTrial,
  completeGoogleRedirect,
  createUserProfile,
  ensureCoachAccess,
  getUserProfile,
  getCurrentUserRole,
  loginWithGoogle,
  logoutCurrentUser,
  refreshIdTokenClaims,
  useAuthState,
  type CoachAccessState,
} from '../lib';
import { buildWhatsAppUrl } from '../config/support';
import { toMessage } from '../utils/firestore';

const LOGIN_INTENT_KEY = 'bw_login_intent';

function isCoachRole(role: string | null): boolean {
  return role === 'trainer' || role === 'admin';
}

export function AuthPage() {
  const { user, role } = useAuthState();
  const navigate = useNavigate();
  const { showError } = useToast();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [completingCoachAccess, setCompletingCoachAccess] = useState(false);
  const [isExitingCoachFlow, setIsExitingCoachFlow] = useState(false);
  const [coachGate, setCoachGate] = useState<{ mode: 'trial' | 'expired'; access: CoachAccessState } | null>(null);
  const [coachPhoneGate, setCoachPhoneGate] = useState<{ access: CoachAccessState; phone: string } | null>(null);
  const [savingCoachPhone, setSavingCoachPhone] = useState(false);
  const coachFlowRunId = useRef(0);

  const paymentWhatsappUrl = useMemo(
    () =>
      buildWhatsAppUrl(
        'Ciao, vorrei richiedere accesso alla piattaforma Beastly Workout e sottoscrivere l\'abbonamento coach.',
        '393405882404',
      ),
    [],
  );

  useEffect(() => {
    async function resolveRedirect() {
      try {
        await completeGoogleRedirect();
      } catch (error) {
        const nextMessage = toMessage(error);
        setMessage(nextMessage);
        showError(nextMessage);
      }
    }
    void resolveRedirect();
  }, [showError]);

  async function waitCoachRole(maxAttempts = 10) {
    if (!user) return false;
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      await refreshIdTokenClaims();
      const nextRole = await getCurrentUserRole(user);
      if (isCoachRole(nextRole)) return true;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    return false;
  }

  async function resolveCoachAccessFlow() {
    if (!user) return;
    const runId = ++coachFlowRunId.current;
    const isStale = () => runId !== coachFlowRunId.current || isExitingCoachFlow;

    setCompletingCoachAccess(true);
    setMessage('Sto preparando il tuo accesso coach...');
    try {
      await createUserProfile({
        email: user.email ?? '',
        displayName: user.displayName ?? '',
        coachAccessRequestedAt: new Date().toISOString(),
      });
      if (isStale()) return;

      const access = await ensureCoachAccess();
      if (isStale()) return;
      const profileSnap = await getUserProfile(user.uid);
      const profileData = profileSnap.data() as { phone?: unknown } | undefined;
      const coachPhone = typeof profileData?.phone === 'string' ? profileData.phone.trim() : '';
      if (!coachPhone) {
        setCoachPhoneGate({ access, phone: '' });
        setCompletingCoachAccess(false);
        setMessage('');
        return;
      }

      if (access.isExpired) {
        await logoutCurrentUser();
        sessionStorage.removeItem(LOGIN_INTENT_KEY);
        if (isStale()) return;
        setCoachGate({ mode: 'expired', access });
        return;
      }

      if (access.requiresTrialAcceptance) {
        if (isStale()) return;
        setCoachGate({ mode: 'trial', access });
        return;
      }

      const okRole = await waitCoachRole();
      if (isStale()) return;
      if (!okRole) {
        setMessage('Accesso coach in sincronizzazione. Riprova tra qualche secondo.');
        return;
      }

      sessionStorage.removeItem(LOGIN_INTENT_KEY);
      navigate('/app/coach', { replace: true });
    } catch (error) {
      if (isStale()) return;
      const nextMessage = toMessage(error);
      setMessage(nextMessage);
      showError(nextMessage);
    } finally {
      if (!isStale()) setCompletingCoachAccess(false);
    }
  }

  async function submitCoachPhone() {
    if (!coachPhoneGate || !user) return;
    const normalizedPhone = coachPhoneGate.phone.replace(/[^\d+]/g, '').trim();
    if (normalizedPhone.length < 8) {
      setMessage('Inserisci un numero WhatsApp valido.');
      return;
    }

    setSavingCoachPhone(true);
    setMessage('Salvo il tuo numero e completo la registrazione coach...');
    try {
      await createUserProfile({ phone: normalizedPhone });
      const access = coachPhoneGate.access;
      setCoachPhoneGate(null);

      if (access.isExpired) {
        await logoutCurrentUser();
        sessionStorage.removeItem(LOGIN_INTENT_KEY);
        setCoachGate({ mode: 'expired', access });
        return;
      }

      if (access.requiresTrialAcceptance) {
        setCoachGate({ mode: 'trial', access });
        return;
      }

      const okRole = await waitCoachRole();
      if (!okRole) {
        setMessage('Accesso coach in sincronizzazione. Riprova tra qualche secondo.');
        return;
      }
      sessionStorage.removeItem(LOGIN_INTENT_KEY);
      navigate('/app/coach', { replace: true });
    } catch (error) {
      const nextMessage = toMessage(error);
      setMessage(nextMessage);
      showError(nextMessage);
    } finally {
      setSavingCoachPhone(false);
    }
  }

  useEffect(() => {
    async function syncNavigation() {
      if (!user) {
        setCompletingCoachAccess(false);
        if (!isExitingCoachFlow) setMessage('');
        return;
      }
      if (completingCoachAccess || isExitingCoachFlow) return;
      if (coachPhoneGate) return;

      const intent = sessionStorage.getItem(LOGIN_INTENT_KEY);
      if (intent === 'coach') {
        await resolveCoachAccessFlow();
        return;
      }

      if (!role) {
        navigate('/app/client', { replace: true });
        return;
      }

      navigate(role === 'client' ? '/app/client' : '/app/coach', { replace: true });
    }

    void syncNavigation();
  }, [user, role, completingCoachAccess, isExitingCoachFlow, coachPhoneGate]);

  useEffect(() => {
    if (!isExitingCoachFlow) return;
    if (user) return;
    setIsExitingCoachFlow(false);
    navigate('/auth', { replace: true });
  }, [isExitingCoachFlow, user, navigate]);

  async function exitCoachTrialFlow() {
    coachFlowRunId.current += 1;
    setIsExitingCoachFlow(true);
    setCompletingCoachAccess(false);
    setMessage('Uscita in corso...');
    sessionStorage.removeItem(LOGIN_INTENT_KEY);
    setCoachGate(null);
    setCoachPhoneGate(null);
    try {
      await logoutCurrentUser();
    } catch (error) {
      setMessage(toMessage(error));
      setIsExitingCoachFlow(false);
    }
  }

  async function confirmTrialAndContinue() {
    setLoading(true);
    setMessage('Sto attivando il tuo periodo di prova...');
    try {
      const access = await acceptCoachTrial();
      if (access.isExpired) {
        await logoutCurrentUser();
        sessionStorage.removeItem(LOGIN_INTENT_KEY);
        setCoachGate({ mode: 'expired', access });
        return;
      }
      const okRole = await waitCoachRole();
      if (!okRole) {
        setMessage('Accesso coach in sincronizzazione. Riprova tra qualche secondo.');
        return;
      }
      setCoachGate(null);
      sessionStorage.removeItem(LOGIN_INTENT_KEY);
      navigate('/app/coach', { replace: true });
    } catch (error) {
      const nextMessage = toMessage(error);
      setMessage(nextMessage);
      showError(nextMessage);
    } finally {
      setLoading(false);
    }
  }

  async function signInAsClient() {
    setLoading(true);
    setMessage('');
    setCoachGate(null);
    try {
      sessionStorage.setItem(LOGIN_INTENT_KEY, 'client');
      const result = await loginWithGoogle();
      if (result.redirected) {
        setMessage('Ti sto reindirizzando a Google...');
        return;
      }
      navigate('/app/client', { replace: true });
    } catch (error) {
      const nextMessage = toMessage(error);
      setMessage(nextMessage);
      showError(nextMessage);
    } finally {
      setLoading(false);
    }
  }

  async function signInAsCoach() {
    setLoading(true);
    setMessage('');
    setCoachGate(null);
    try {
      sessionStorage.setItem(LOGIN_INTENT_KEY, 'coach');
      const result = await loginWithGoogle();
      if (result.redirected) {
        setMessage('Ti sto reindirizzando a Google...');
        return;
      }
      if (!result.user) {
        setMessage('Accesso non completato. Riprova.');
        return;
      }
      await resolveCoachAccessFlow();
    } catch (error) {
      const nextMessage = toMessage(error);
      setMessage(nextMessage);
      showError(nextMessage);
    } finally {
      setLoading(false);
    }
  }

  if (coachGate?.mode === 'trial') {
    return (
      <main className="page page-top">
        <section className="card auth-card fullscreen-gate">
          <p className="eyebrow">Accesso Coach</p>
          <h1>Prova gratuita 15 giorni</h1>
          <p className="hero-sub">
            Hai 15 giorni gratuiti da oggi. Alla scadenza l&apos;accesso sarà bloccato finché non attiverai l&apos;abbonamento.
          </p>
          <button className="btn" type="button" disabled={loading} onClick={() => void confirmTrialAndContinue()}>
            {loading ? 'Attivazione...' : 'Accetta e continua'}
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => void exitCoachTrialFlow()}
          >
            Esci
          </button>
        </section>
      </main>
    );
  }

  if (coachGate?.mode === 'expired') {
    return (
      <main className="page page-top">
        <section className="card auth-card fullscreen-gate">
          <p className="eyebrow">Accesso Coach</p>
          <h1>Periodo di prova terminato</h1>
          <p className="hero-sub">
            Per riattivare l&apos;accesso alla piattaforma, contattaci su WhatsApp e richiedi la sottoscrizione dell&apos;abbonamento.
          </p>
          <a className="btn btn-whatsapp" href={paymentWhatsappUrl} target="_blank" rel="noreferrer">
            Richiedi attivazione su WhatsApp
          </a>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => {
              setCoachGate(null);
              sessionStorage.removeItem(LOGIN_INTENT_KEY);
            }}
          >
            Torna all&apos;accesso
          </button>
        </section>
      </main>
    );
  }

  if (coachPhoneGate) {
    return (
      <main className="page page-top">
        <section className="card auth-card fullscreen-gate">
          <p className="eyebrow">Registrazione Coach</p>
          <h1>Inserisci numero WhatsApp</h1>
          <p className="hero-sub">
            Ultimo step obbligatorio: questo numero verrà condiviso ai clienti associati al tuo codice coach.
          </p>
          <label>
            Numero di telefono / WhatsApp *
            <input
              type="tel"
              placeholder="Es. 3405882404"
              value={coachPhoneGate.phone}
              onChange={(event) => setCoachPhoneGate((prev) => (prev ? { ...prev, phone: event.target.value } : prev))}
            />
          </label>
          <button className="btn" type="button" disabled={savingCoachPhone} onClick={() => void submitCoachPhone()}>
            {savingCoachPhone ? 'Salvataggio...' : 'Continua'}
          </button>
          <button className="btn btn-ghost" type="button" disabled={savingCoachPhone} onClick={() => void exitCoachTrialFlow()}>
            Esci
          </button>
          {message ? <p className="message">{message}</p> : null}
        </section>
      </main>
    );
  }

  if (user && role && sessionStorage.getItem(LOGIN_INTENT_KEY) !== 'coach') {
    return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <img className="auth-logo" src="/brand/beastly-logo.jpeg" alt="Beastly Workout logo" />
        <p className="eyebrow">Beastly Workout</p>
        <h1>Accedi con Google</h1>
        <p className="hero-sub">Entra in pochi secondi e inizia subito il tuo percorso.</p>

        <button className="btn" disabled={loading || completingCoachAccess} onClick={() => void signInAsClient()} type="button">
          {loading ? 'Connessione...' : 'Continua con Google'}
        </button>

        <div className="divider" />
        <h2>Sei un Coach?</h2>
        <p className="hint">Accedi o registrati come coach con Google.</p>
        <button className="btn btn-ghost" disabled={loading || completingCoachAccess} onClick={() => void signInAsCoach()} type="button">
          {completingCoachAccess ? 'Verifica accesso coach...' : 'Continua come Coach'}
        </button>

        {message ? <p className="message">{message}</p> : null}
        <InstallAppBanner />
      </section>
    </main>
  );
}
