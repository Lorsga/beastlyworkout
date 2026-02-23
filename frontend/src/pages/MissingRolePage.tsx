import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { isAllowedAdminEmail } from '../config/admin';
import { bootstrapFirstAdmin, logoutCurrentUser, refreshIdTokenClaims, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

export function MissingRolePage() {
  const { user, role } = useAuthState();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user) return <Navigate to="/auth" replace />;
  if (role) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  const canBootstrapAdmin = isAllowedAdminEmail(user.email);

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
        <p className="eyebrow">Accesso PT/Admin</p>
        <h1>Completa accesso area coach</h1>
        <p className="hero-sub">
          Hai fatto accesso con <strong>{user.email}</strong>. Se questo è il tuo account PT/Admin, completa la verifica qui
          sotto.
        </p>
        {canBootstrapAdmin ? (
          <button className="btn" disabled={loading} onClick={() => void bootstrap()} type="button">
            Attiva account PT/Admin
          </button>
        ) : (
          <p className="hint">
            Questo account non è tra quelli autorizzati come PT/Admin. Esci e accedi con l&apos;account corretto.
          </p>
        )}
        <button className="btn btn-ghost" disabled={loading} onClick={() => void refreshRole()} type="button">
          Verifica di nuovo accesso
        </button>
        <button className="btn btn-ghost" disabled={loading} onClick={() => void logoutCurrentUser()} type="button">
          Esci e cambia account
        </button>
        <p className="hint">
          Accesso utente standard: <Link to="/onboarding">continua onboarding</Link>.
        </p>
        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
