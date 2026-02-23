import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { completeGoogleRedirect, loginWithGoogle, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

export function AuthPage() {
  const { user, role } = useAuthState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    void completeGoogleRedirect();
  }, []);

  if (user && role) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  if (user && !role) return <Navigate to="/onboarding" replace />;

  async function submitGoogle() {
    setLoading(true);
    setMessage('');
    try {
      const result = await loginWithGoogle();
      if (result.redirected) setMessage('Reindirizzamento Google in corso...');
    } catch (error) {
      setMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Gym PT Platform</p>
        <h1>Accedi con Google</h1>
        <p className="hero-sub">
          Accesso consentito solo tramite account Google. I permessi operativi dipendono dal ruolo in Firebase claims.
        </p>

        <button className="btn" disabled={loading} onClick={() => void submitGoogle()} type="button">
          {loading ? 'Connessione...' : 'Continua con Google'}
        </button>
        <p className="hint">Niente password locale: autenticazione unica con Google.</p>
        <p className="hint">
          Sei PT/Admin? Vai a <Link to="/missing-role">setup ruolo admin</Link>.
        </p>

        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
