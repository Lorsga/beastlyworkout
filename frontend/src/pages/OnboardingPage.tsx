import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { createUserProfile, logoutCurrentUser, setUserPrivateDoc, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

export function OnboardingPage() {
  const { user, role } = useAuthState();
  const [displayName, setDisplayName] = useState(user?.displayName ?? '');
  const [goal, setGoal] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [trainingDaysPerWeek, setTrainingDaysPerWeek] = useState<number>(3);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!user) return <Navigate to="/auth" replace />;
  if (role) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
  const userEmail = user.email ?? '';

  async function submitOnboarding() {
    setLoading(true);
    setMessage('');
    try {
      await createUserProfile({
        displayName: displayName.trim(),
        email: userEmail,
        requestedRole: 'client',
        onboardingStatus: 'pending-role',
        onboardingUpdatedAt: new Date().toISOString(),
      });
      await setUserPrivateDoc('onboarding', {
        goal: goal.trim(),
        experienceLevel,
        trainingDaysPerWeek,
        notes: notes.trim(),
      });
      setMessage('Perfetto, dati salvati. Il tuo percorso iniziale è stato registrato.');
    } catch (error) {
      setMessage(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Onboarding Cliente</p>
        <h1>Partiamo con i tuoi obiettivi</h1>
        <p className="hero-sub">
          Completa queste informazioni per iniziare al meglio. Account: <strong>{userEmail}</strong>
        </p>

        <label>
          Nome visualizzato
          <input value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="Nome e cognome" />
        </label>

        <label>
          Obiettivo principale
          <input value={goal} onChange={(event) => setGoal(event.target.value)} placeholder="es. Dimagrire, forza, ricomposizione" />
        </label>

        <label>
          Livello
          <select value={experienceLevel} onChange={(event) => setExperienceLevel(event.target.value as 'beginner' | 'intermediate' | 'advanced')}>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
          </select>
        </label>

        <label>
          Giorni di allenamento a settimana
          <input
            value={trainingDaysPerWeek}
            onChange={(event) => setTrainingDaysPerWeek(Number(event.target.value))}
            type="number"
            min={1}
            max={7}
          />
        </label>

        <label>
          Note aggiuntive
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="infortuni, preferenze, disponibilità..." />
        </label>

        <button className="btn" disabled={loading || !displayName || !goal} type="button" onClick={() => void submitOnboarding()}>
          {loading ? 'Salvataggio...' : 'Salva onboarding'}
        </button>
        <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
          Esci e cambia account
        </button>

        <p className="hint">
          Sei PT/Admin? Vai a <Link to="/missing-role">accesso area coach</Link>.
        </p>
        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
