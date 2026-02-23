import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import {
  completeGoogleRedirect,
  createUserProfile,
  getCurrentUserRole,
  loginWithGoogle,
  logoutCurrentUser,
  refreshIdTokenClaims,
  useAuthState,
} from '../lib';
import { isAllowedAdminEmail } from '../config/admin';
import { toMessage } from '../utils/firestore';

const LOGIN_INTENT_KEY = 'bw_login_intent';

export function AuthPage() {
  const { user, role } = useAuthState();
  const navigate = useNavigate();
  const { showError } = useToast();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [completingCoachAccess, setCompletingCoachAccess] = useState(false);

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

  useEffect(() => {
    async function completeCoachAccess() {
      if (!user || role) return;
      const intent = sessionStorage.getItem(LOGIN_INTENT_KEY);
      if (intent !== 'coach' || !isAllowedAdminEmail(user.email)) return;

      setCompletingCoachAccess(true);
      setMessage("Sto preparando il tuo accesso coach...");
      try {
        await createUserProfile({
          email: user.email ?? '',
          displayName: user.displayName ?? '',
          coachAccessRequestedAt: new Date().toISOString(),
        });
        for (let attempt = 0; attempt < 10; attempt += 1) {
          await refreshIdTokenClaims();
          const nextRole = await getCurrentUserRole(user);
          if (nextRole === 'admin' || nextRole === 'trainer') {
            sessionStorage.removeItem(LOGIN_INTENT_KEY);
            navigate('/app/coach', {replace: true});
            return;
          }
          await new Promise((resolve) => setTimeout(resolve, 700));
        }
        setMessage('Sto ancora completando l’accesso. Riprova tra pochi secondi.');
      } catch (error) {
        const nextMessage = toMessage(error);
        setMessage(nextMessage);
        showError(nextMessage);
      } finally {
        setCompletingCoachAccess(false);
      }
    }

    void completeCoachAccess();
  }, [user, role, navigate]);

  if (user && role) {
    sessionStorage.removeItem(LOGIN_INTENT_KEY);
    return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  }
  if (user && !role) {
    const intent = sessionStorage.getItem(LOGIN_INTENT_KEY);
    if (intent === 'coach' && isAllowedAdminEmail(user.email)) {
      return (
        <main className="page page-center">
          <section className="card auth-card">
            <p className="eyebrow">Beastly Workout</p>
            <h1>Accesso Coach</h1>
            <p className="hero-sub">{completingCoachAccess ? 'Attendi un attimo...' : 'Sto verificando il tuo account.'}</p>
            {message ? <p className="message">{message}</p> : null}
            <button className="btn btn-ghost" disabled={completingCoachAccess} onClick={() => void logoutCurrentUser()} type="button">
              Esci e cambia account
            </button>
          </section>
        </main>
      );
    }
    return <Navigate to="/app/client" replace />;
  }

  async function signInAsClient() {
    setLoading(true);
    setMessage('');
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

      if (!isAllowedAdminEmail(result.user.email)) {
        await logoutCurrentUser();
        setMessage('Questo account non è abilitato per l’area coach. Usa accesso utente.');
        showError('Questo account non è abilitato per l’area coach.');
        return;
      }
      await createUserProfile({
        email: result.user.email ?? '',
        displayName: result.user.displayName ?? '',
        coachAccessRequestedAt: new Date().toISOString(),
      });

      for (let attempt = 0; attempt < 8; attempt += 1) {
        await refreshIdTokenClaims();
        const userRole = await getCurrentUserRole(result.user);
        if (userRole === 'admin' || userRole === 'trainer') {
          sessionStorage.removeItem(LOGIN_INTENT_KEY);
          navigate('/app/coach', {replace: true});
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setMessage('Sto ancora completando l’accesso coach. Riprova tra qualche secondo.');
    } catch (error) {
      const nextMessage = toMessage(error);
      setMessage(nextMessage);
      showError(nextMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Beastly Workout</p>
        <h1>Accedi con Google</h1>
        <p className="hero-sub">Entra in pochi secondi e inizia subito il tuo percorso.</p>

        <button className="btn" disabled={loading} onClick={() => void signInAsClient()} type="button">
          {loading ? 'Connessione...' : 'Continua con Google'}
        </button>

        <div className="divider" />
        <h2>Sei un Coach?</h2>
        <p className="hint">Usa il tuo account coach per entrare nell&apos;area professionale.</p>
        <button className="btn btn-ghost" disabled={loading} onClick={() => void signInAsCoach()} type="button">
          Continua come Coach
        </button>

        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
