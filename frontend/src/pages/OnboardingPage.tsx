import { useState } from 'react';
import { Navigate } from 'react-router-dom';

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
      setMessage('Perfetto, informazioni salvate. Sei pronto a iniziare.');
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
          Come ti chiami?
          <input value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="Nome e cognome" />
        </label>

        <label>
          Qual è il tuo obiettivo?
          <input value={goal} onChange={(event) => setGoal(event.target.value)} placeholder="Es. perdere peso, aumentare forza, tonificare" />
        </label>

        <label>
          Livello di allenamento
          <select value={experienceLevel} onChange={(event) => setExperienceLevel(event.target.value as 'beginner' | 'intermediate' | 'advanced')}>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="advanced">Avanzato</option>
          </select>
        </label>

        <label>
          Quanti giorni ti alleni a settimana?
          <input
            value={trainingDaysPerWeek}
            onChange={(event) => setTrainingDaysPerWeek(Number(event.target.value))}
            type="number"
            min={1}
            max={7}
          />
        </label>

        <label>
          Informazioni utili
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Es. infortuni, orari preferiti, esigenze specifiche" />
        </label>

        <button className="btn" disabled={loading || !displayName || !goal} type="button" onClick={() => void submitOnboarding()}>
          {loading ? 'Salvataggio...' : 'Continua'}
        </button>
        <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
          Esci e cambia account
        </button>

        {message ? <p className="message">{message}</p> : null}
      </section>
    </main>
  );
}
