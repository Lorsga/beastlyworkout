import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import { completeClientOnboarding, logoutCurrentUser, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

type BasicOnboardingForm = {
  fullName: string;
  email: string;
  phone: string;
  coachCode: string;
};

export function OnboardingPage() {
  const { user, role } = useAuthState();
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<BasicOnboardingForm>({
    fullName: user?.displayName ?? '',
    email: user?.email ?? '',
    phone: '',
    coachCode: '',
  });

  if (!user) return <Navigate to="/auth" replace />;
  if (role === 'admin' || role === 'trainer') return <Navigate to="/app/coach" replace />;

  function updateField<K extends keyof BasicOnboardingForm>(key: K, value: BasicOnboardingForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): string | null {
    if (!form.fullName.trim()) return 'Inserisci nome e cognome.';
    if (!form.email.trim()) return 'Inserisci e-mail.';
    if (!form.phone.trim()) return 'Inserisci numero di telefono.';
    if (!form.coachCode.trim()) return 'Inserisci il codice coach.';
    return null;
  }

  async function submitOnboarding() {
    const error = validate();
    if (error) {
      showError(error);
      return;
    }

    setLoading(true);
    try {
      await completeClientOnboarding({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        coachCode: form.coachCode.trim(),
      });

      showSuccess('Profilo salvato. Ora puoi entrare nella tua area.');
      navigate('/app/client', { replace: true });
    } catch (err) {
      showError(toMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Onboarding Cliente</p>
        <h1>Completa il tuo profilo</h1>
        <p className="hero-sub">Inserisci solo i dati base. Il coach completerà l&apos;anagrafica avanzata.</p>
        <div className="onboarding-progress" aria-hidden="true">
          <div className="onboarding-progress-bar" style={{ width: '100%' }} />
        </div>

        <label>
          Nome e cognome *
          <input
            value={form.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            placeholder="Nome e cognome"
          />
        </label>

        <label>
          E-mail *
          <input
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            type="email"
            placeholder="nome@esempio.com"
          />
        </label>

        <label>
          Numero di telefono *
          <input
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            type="tel"
            inputMode="numeric"
            placeholder="Es. 3405882404"
          />
        </label>

        <label>
          Codice coach *
          <input
            value={form.coachCode}
            onChange={(event) => updateField('coachCode', event.target.value)}
            placeholder="Es. lorenzobeastly"
          />
        </label>

        <button className="btn" disabled={loading} type="button" onClick={() => void submitOnboarding()}>
          {loading ? 'Salvataggio...' : 'Continua'}
        </button>

        <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
          Esci e cambia account
        </button>
      </section>
    </main>
  );
}
