import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import {
  completeGoogleRedirect,
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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    void completeGoogleRedirect();
  }, []);

  if (user && role) {
    sessionStorage.removeItem(LOGIN_INTENT_KEY);
    return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  }
  if (user && !role) {
    const intent = sessionStorage.getItem(LOGIN_INTENT_KEY);
    const isAdminEmail = isAllowedAdminEmail(user.email);
    if (intent === 'coach' && isAdminEmail) return <Navigate to="/missing-role" replace />;
    return <Navigate to="/app/client" replace />;
  }

  async function signInAsClient() {
    setLoading(true);
    setMessage('');
    try {
      sessionStorage.setItem(LOGIN_INTENT_KEY, 'client');
      const result = await loginWithGoogle();
      if (result.redirected) {
        setMessage('Apertura accesso Google...');
        return;
      }
      navigate('/app/client', { replace: true });
    } catch (error) {
      setMessage(toMessage(error));
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
        setMessage('Apertura accesso Google...');
        return;
      }
      if (!result.user) {
        setMessage('Accesso non completato. Riprova.');
        return;
      }

      if (!isAllowedAdminEmail(result.user.email)) {
        await logoutCurrentUser();
        setMessage('Questo account non è abilitato come PT/Admin. Usa accesso utente.');
        return;
      }

      await refreshIdTokenClaims();
      const userRole = await getCurrentUserRole(result.user);
      if (userRole === 'admin' || userRole === 'trainer') {
        navigate('/app/coach', { replace: true });
        return;
      }

      navigate('/missing-role', { replace: true });
    } catch (error) {
      setMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Beastly Workout</p>
        <h1>Accedi con Google</h1>
        <p className="hero-sub">Inizia subito: entra come utente e completa il tuo percorso iniziale.</p>

        <button className="btn" disabled={loading} onClick={() => void signInAsClient()} type="button">
          {loading ? 'Connessione...' : 'Continua con Google'}
        </button>

        <div className="divider" />
        <h2>Sei PT/Admin?</h2>
        <p className="hint">Usa il tuo account autorizzato per entrare nell&apos;area coach.</p>
        <button className="btn btn-ghost" disabled={loading} onClick={() => void signInAsCoach()} type="button">
          Continua con Google (PT/Admin)
        </button>

        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
