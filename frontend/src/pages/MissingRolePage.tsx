import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { bootstrapFirstAdmin, logoutCurrentUser, refreshIdTokenClaims, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

const ADMIN_BOOTSTRAP_EMAILS = new Set(['lrnz.sga@gmail.com']);

export function MissingRolePage() {
  const { user, role } = useAuthState();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user) return <Navigate to="/auth" replace />;
  if (role) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  const canBootstrapAdmin = ADMIN_BOOTSTRAP_EMAILS.has((user.email ?? '').toLowerCase());

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
        <h1>Setup ruolo PT/Admin</h1>
        <p className="hero-sub">
          Sei autenticato come <strong>{user.email}</strong> ma non hai claim ruolo. Da qui puoi completare setup admin o
          aggiornare i claim.
        </p>
        {canBootstrapAdmin ? (
          <button className="btn" disabled={loading} onClick={() => void bootstrap()} type="button">
            Sono PT: bootstrap admin
          </button>
        ) : (
          <p className="hint">
            Questo account non è abilitato al bootstrap admin. Usa l&apos;account PT oppure vai su onboarding cliente.
          </p>
        )}
        <button className="btn btn-ghost" disabled={loading} onClick={() => void refreshRole()} type="button">
          Aggiorna token ruolo
        </button>
        <button className="btn btn-ghost" disabled={loading} onClick={() => void logoutCurrentUser()} type="button">
          Esci e cambia account
        </button>
        <p className="hint">
          Utente normale? Vai su <Link to="/onboarding">onboarding cliente</Link>.
        </p>
        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
