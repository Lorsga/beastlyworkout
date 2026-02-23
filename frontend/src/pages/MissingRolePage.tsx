import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { bootstrapFirstAdmin, refreshIdTokenClaims, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

export function MissingRolePage() {
  const { user, role } = useAuthState();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user) return <Navigate to="/auth" replace />;
  if (role) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;

  async function bootstrap() {
    setLoading(true);
    setMessage('');
    try {
      const result = await bootstrapFirstAdmin();
      setMessage(result.alreadyAdmin ? 'Utente già admin. Refresh token completato.' : 'Ruolo admin assegnato.');
    } catch (error) {
      setMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  async function refreshRole() {
    setLoading(true);
    setMessage('');
    try {
      await refreshIdTokenClaims();
      setMessage('Token aggiornato. Se il ruolo è presente verrai reindirizzato automaticamente.');
    } catch (error) {
      setMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Ruolo non trovato</p>
        <h1>Completa bootstrap utente</h1>
        <p className="hero-sub">
          L&apos;utente è autenticato ma non ha claim di ruolo. Puoi forzare bootstrap primo admin o aggiornare i claim.
        </p>
        <button className="btn" disabled={loading} onClick={() => void bootstrap()} type="button">
          Bootstrap primo admin
        </button>
        <button className="btn btn-ghost" disabled={loading} onClick={() => void refreshRole()} type="button">
          Aggiorna token ruolo
        </button>
        <p className="hint">
          Dopo assegnazione ruolo via backend, usa refresh token e torna a <Link to="/auth">login</Link>.
        </p>
        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
