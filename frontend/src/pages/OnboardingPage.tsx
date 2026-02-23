import { useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '../components/ToastProvider';
import { createUserProfile, logoutCurrentUser, setUserPrivateDoc, useAuthState } from '../lib';
import { toMessage } from '../utils/firestore';

type SupportPreference =
  | 'call_settimanale'
  | 'messaggio_motivazionale'
  | 'checkin_progressi'
  | 'contatto_libero'
  | 'consigli_periodici'
  | 'challenge_settimanali'
  | 'autonomo'
  | 'other';

type ReadinessOption = 'pronto' | 'dubbio' | 'non_pronto';

type OnboardingForm = {
  fullName: string;
  age: string;
  sex: string;
  email: string;
  phone: string;
  discoverySource: string;
  heightCm: string;
  weightKg: string;
  pastProgram: string;
  trainingFrequency: string;
  workoutDuration: string;
  workoutLocation: string;
  equipment: string;
  trainingTypeHistory: string;
  hasInjuries: string;
  injuryDetails: string;
  objectivePrimary: string;
  objectiveReason: string;
  expectedTimeline: string;
  supportPreference: SupportPreference | '';
  supportPreferenceOther: string;
  investmentRange: string;
  whatBlockedSoFar: string;
  oneThingToImprove: string;
  importanceScore: string;
  riskIfNoChange: string;
  readiness: ReadinessOption | '';
};

const TOTAL_STEPS = 5;

export function OnboardingPage() {
  const { user, role } = useAuthState();
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<OnboardingForm>({
    fullName: user?.displayName ?? '',
    age: '',
    sex: '',
    email: user?.email ?? '',
    phone: '',
    discoverySource: '',
    heightCm: '',
    weightKg: '',
    pastProgram: '',
    trainingFrequency: '',
    workoutDuration: '',
    workoutLocation: '',
    equipment: '',
    trainingTypeHistory: '',
    hasInjuries: '',
    injuryDetails: '',
    objectivePrimary: '',
    objectiveReason: '',
    expectedTimeline: '',
    supportPreference: '',
    supportPreferenceOther: '',
    investmentRange: '',
    whatBlockedSoFar: '',
    oneThingToImprove: '',
    importanceScore: '',
    riskIfNoChange: '',
    readiness: '',
  });
  const [loading, setLoading] = useState(false);

  if (!user) return <Navigate to="/auth" replace />;
  if (role === 'admin' || role === 'trainer') return <Navigate to="/app/coach" replace />;
  const userEmail = user.email ?? '';
  const progress = useMemo(() => Math.round(((step + 1) / TOTAL_STEPS) * 100), [step]);

  function updateField<K extends keyof OnboardingForm>(key: K, value: OnboardingForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function getStepErrors(stepIndex: number): string[] {
    if (stepIndex === 0) {
      return [
        !form.age.trim() ? 'Inserisci età.' : '',
        !form.sex.trim() ? 'Inserisci sesso.' : '',
        !form.email.trim() ? 'Inserisci e-mail.' : '',
        !form.phone.trim() ? 'Inserisci numero di telefono.' : '',
        !form.discoverySource.trim() ? 'Inserisci come ci hai conosciuto.' : '',
      ].filter(Boolean);
    }
    if (stepIndex === 1) {
      return [
        !form.heightCm.trim() ? 'Inserisci altezza.' : '',
        !form.weightKg.trim() ? 'Inserisci peso attuale.' : '',
        !form.pastProgram.trim() ? 'Seleziona esperienza programmi precedenti.' : '',
        !form.trainingFrequency.trim() ? 'Seleziona frequenza allenamento.' : '',
        !form.workoutDuration.trim() ? 'Seleziona durata allenamento.' : '',
        !form.workoutLocation.trim() ? 'Seleziona dove ti alleni.' : '',
        !form.equipment.trim() ? 'Seleziona attrezzatura disponibile.' : '',
        !form.trainingTypeHistory.trim() ? 'Descrivi tipo di allenamento fatto.' : '',
        !form.hasInjuries.trim() ? 'Indica se hai infortuni/problemi fisici.' : '',
      ].filter(Boolean);
    }
    if (stepIndex === 2) {
      return [
        !form.objectivePrimary.trim() ? 'Seleziona obiettivo principale.' : '',
        !form.objectiveReason.trim() ? 'Scrivi perché vuoi raggiungere l’obiettivo.' : '',
        !form.expectedTimeline.trim() ? 'Scrivi in quanto tempo vuoi vedere risultati.' : '',
      ].filter(Boolean);
    }
    if (stepIndex === 3) {
      return [
        !form.supportPreference ? 'Seleziona supporto motivazionale preferito.' : '',
        !form.investmentRange.trim() ? 'Seleziona fascia investimento.' : '',
        !form.whatBlockedSoFar.trim() ? 'Spiega cosa ti ha bloccato finora.' : '',
        !form.oneThingToImprove.trim() ? 'Scrivi cosa vorresti migliorare in 3 mesi.' : '',
        !form.importanceScore.trim() ? 'Seleziona importanza obiettivo.' : '',
        !form.riskIfNoChange.trim() ? 'Scrivi cosa rischi se non cambi nulla.' : '',
      ].filter(Boolean);
    }
    if (stepIndex === 4) {
      return [!form.readiness ? 'Seleziona il livello di disponibilità a iniziare.' : ''].filter(Boolean);
    }
    return [];
  }

  function goNext() {
    const errors = getStepErrors(step);
    if (errors.length > 0) {
      showError(errors[0]);
      return;
    }
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  }

  async function submitOnboarding() {
    const finalErrors = getStepErrors(step);
    if (finalErrors.length > 0) {
      showError(finalErrors[0]);
      return;
    }
    setLoading(true);
    try {
      await createUserProfile({
        displayName: form.fullName.trim() || user?.displayName || '',
        email: userEmail,
        role: 'client',
        requestedRole: 'client',
        onboardingStatus: 'completed',
        onboardingCompleted: true,
        onboardingUpdatedAt: new Date().toISOString(),
      });
      await setUserPrivateDoc('onboarding', {
        fullName: form.fullName.trim(),
        age: form.age.trim(),
        sex: form.sex.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        discoverySource: form.discoverySource.trim(),
        heightCm: form.heightCm.trim(),
        weightKg: form.weightKg.trim(),
        pastProgram: form.pastProgram,
        trainingFrequency: form.trainingFrequency,
        workoutDuration: form.workoutDuration,
        workoutLocation: form.workoutLocation,
        equipment: form.equipment.trim(),
        trainingTypeHistory: form.trainingTypeHistory.trim(),
        hasInjuries: form.hasInjuries,
        injuryDetails: form.injuryDetails.trim(),
        objectivePrimary: form.objectivePrimary.trim(),
        objectiveReason: form.objectiveReason.trim(),
        expectedTimeline: form.expectedTimeline.trim(),
        supportPreference: form.supportPreference,
        supportPreferenceOther: form.supportPreferenceOther.trim(),
        investmentRange: form.investmentRange,
        whatBlockedSoFar: form.whatBlockedSoFar.trim(),
        oneThingToImprove: form.oneThingToImprove.trim(),
        importanceScore: Number(form.importanceScore || 0),
        riskIfNoChange: form.riskIfNoChange.trim(),
        readiness: form.readiness,
        goal: form.objectivePrimary.trim(),
        experienceLevel: form.pastProgram.trim(),
        trainingDaysPerWeek: form.trainingFrequency.includes('1-2') ? 2 : form.trainingFrequency.includes('3-4') ? 4 : 5,
        notes: form.whatBlockedSoFar.trim(),
      });
      showSuccess('Perfetto, profilo salvato.');
      navigate('/app/client', { replace: true });
    } catch (error) {
      showError(toMessage(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page page-center">
      <section className="card auth-card">
        <p className="eyebrow">Onboarding Cliente</p>
        <h1>Partiamo dal tuo percorso</h1>
        <p className="hero-sub">
          Step {step + 1} di {TOTAL_STEPS} · Completamento {progress}%
        </p>
        <div className="onboarding-progress" aria-hidden="true">
          <div className="onboarding-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {step === 0 ? (
          <>
            <label>
              Nome e cognome
              <input value={form.fullName} onChange={(event) => updateField('fullName', event.target.value)} placeholder="Nome e cognome" />
            </label>
            <label>
              Età *
              <input value={form.age} onChange={(event) => updateField('age', event.target.value)} type="number" min={12} max={99} placeholder="Es. 28" />
            </label>
            <label>
              Sesso *
              <input value={form.sex} onChange={(event) => updateField('sex', event.target.value)} placeholder="Es. Uomo, Donna, Altro" />
            </label>
            <label>
              E-mail *
              <input value={form.email} onChange={(event) => updateField('email', event.target.value)} type="email" />
            </label>
            <label>
              Numero di telefono *
              <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder="+39..." />
            </label>
            <label>
              Come mi hai conosciuto? *
              <input value={form.discoverySource} onChange={(event) => updateField('discoverySource', event.target.value)} placeholder="Instagram, passaparola, ecc." />
            </label>
          </>
        ) : null}

        {step === 1 ? (
          <>
            <label>
              Altezza (cm) *
              <input value={form.heightCm} onChange={(event) => updateField('heightCm', event.target.value)} type="number" min={100} max={250} />
            </label>
            <label>
              Peso attuale (kg) *
              <input value={form.weightKg} onChange={(event) => updateField('weightKg', event.target.value)} type="number" min={30} max={250} />
            </label>
            <label>
              Hai mai seguito un programma di allenamento? *
              <select value={form.pastProgram} onChange={(event) => updateField('pastProgram', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="Si da solo/a">Si da solo/a</option>
                <option value="Si con un coach fisico">Si con un coach fisico</option>
                <option value="Si con coach online">Si con coach online</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              Quante volte ti alleni a settimana? *
              <select value={form.trainingFrequency} onChange={(event) => updateField('trainingFrequency', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="1-2 a settimana">1-2 a settimana</option>
                <option value="3-4 a settimana">3-4 a settimana</option>
                <option value="5+ a settimana">5+ a settimana</option>
              </select>
            </label>
            <label>
              Quanto tempo riesci a dedicare ad ogni allenamento? *
              <select value={form.workoutDuration} onChange={(event) => updateField('workoutDuration', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="Meno di 30 minuti">Meno di 30 minuti</option>
                <option value="30-45 minuti">30-45 minuti</option>
                <option value="1 ora">1 ora</option>
                <option value="Più di 1 ora">Più di 1 ora</option>
              </select>
            </label>
            <label>
              Dove ti allenerai? *
              <select value={form.workoutLocation} onChange={(event) => updateField('workoutLocation', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="In palestra">In palestra</option>
                <option value="A casa con attrezzi">A casa con attrezzi</option>
                <option value="A corpo libero">A corpo libero</option>
                <option value="All'aperto">All&apos;aperto</option>
              </select>
            </label>
            <label>
              Che tipo di attrezzi hai a disposizione? *
              <input value={form.equipment} onChange={(event) => updateField('equipment', event.target.value)} placeholder="Es. manubri, elastici, sbarra..." />
            </label>
            <label>
              Che tipo di allenamento fai o hai fatto? *
              <textarea value={form.trainingTypeHistory} onChange={(event) => updateField('trainingTypeHistory', event.target.value)} placeholder="Es. sala pesi, corsa, functional..." />
            </label>
            <label>
              Hai problemi fisici o infortuni? *
              <select value={form.hasInjuries} onChange={(event) => updateField('hasInjuries', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
                <option value="Altro">Altro</option>
              </select>
            </label>
            {form.hasInjuries === 'Si' || form.hasInjuries === 'Altro' ? (
              <label>
                Dettagli infortunio/problema
                <textarea value={form.injuryDetails} onChange={(event) => updateField('injuryDetails', event.target.value)} />
              </label>
            ) : null}
          </>
        ) : null}

        {step === 2 ? (
          <>
            <label>
              Obiettivo principale *
              <select value={form.objectivePrimary} onChange={(event) => updateField('objectivePrimary', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="Tonificazione">Tonificazione</option>
                <option value="Dimagrimento">Dimagrimento</option>
                <option value="Massa muscolare">Massa muscolare</option>
                <option value="Performance">Performance</option>
                <option value="Calisthenics skills">Calisthenics skills</option>
                <option value="Altro">Altro</option>
              </select>
            </label>
            <label>
              Perché vuoi raggiungere questo obiettivo? *
              <textarea value={form.objectiveReason} onChange={(event) => updateField('objectiveReason', event.target.value)} />
            </label>
            <label>
              In quanto tempo vorresti vedere risultati? *
              <input value={form.expectedTimeline} onChange={(event) => updateField('expectedTimeline', event.target.value)} placeholder="Es. 3 mesi" />
            </label>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <label>
              Che tipo di supporto ti motiva? *
              <select value={form.supportPreference} onChange={(event) => updateField('supportPreference', event.target.value as SupportPreference)}>
                <option value="">Seleziona</option>
                <option value="call_settimanale">Call settimanale con feedback personalizzato</option>
                <option value="messaggio_motivazionale">Messaggio motivazionale 1-2 volte a settimana</option>
                <option value="checkin_progressi">Check-in di progressi (ogni fine settimana)</option>
                <option value="contatto_libero">Possibilità di scrivere al coach in qualsiasi momento</option>
                <option value="consigli_periodici">Consigli periodici</option>
                <option value="challenge_settimanali">Challenge settimanali per motivarmi</option>
                <option value="autonomo">Preferisco essere autonomo senza troppo contatto</option>
                <option value="other">Altro</option>
              </select>
            </label>
            {form.supportPreference === 'other' ? (
              <label>
                Specifica altro supporto
                <input value={form.supportPreferenceOther} onChange={(event) => updateField('supportPreferenceOther', event.target.value)} />
              </label>
            ) : null}
            <label>
              Fascia di investimento disponibile *
              <select value={form.investmentRange} onChange={(event) => updateField('investmentRange', event.target.value)}>
                <option value="">Seleziona</option>
                <option value="fino a 100€">fino a 100€</option>
                <option value="100-150€">100-150€</option>
                <option value="150-250€">150-250€</option>
                <option value="oltre 250€">Oltre 250€</option>
              </select>
            </label>
            <label>
              Cosa ti ha bloccato fino ad oggi? *
              <textarea value={form.whatBlockedSoFar} onChange={(event) => updateField('whatBlockedSoFar', event.target.value)} />
            </label>
            <label>
              Se migliorassi una sola cosa nei prossimi 3 mesi, quale sarebbe? *
              <textarea value={form.oneThingToImprove} onChange={(event) => updateField('oneThingToImprove', event.target.value)} />
            </label>
            <label>
              Quanto è importante per te raggiungere questo obiettivo? (1-10) *
              <input value={form.importanceScore} onChange={(event) => updateField('importanceScore', event.target.value)} type="number" min={1} max={10} />
            </label>
            <label>
              Cosa rischi se non cambi nulla nei prossimi 3 mesi? *
              <textarea value={form.riskIfNoChange} onChange={(event) => updateField('riskIfNoChange', event.target.value)} />
            </label>
          </>
        ) : null}

        {step === 4 ? (
          <label>
            Sei pronto/a a iniziare un percorso personalizzato? *
            <select value={form.readiness} onChange={(event) => updateField('readiness', event.target.value as ReadinessOption)}>
              <option value="">Seleziona</option>
              <option value="pronto">Si sono pronto/a a investire su me stesso/a e partire</option>
              <option value="dubbio">Si, ma ho ancora qualche dubbio e vorrei parlarne prima</option>
              <option value="non_pronto">No, al momento non sono pronto/a</option>
            </select>
          </label>
        ) : null}

        <div className="onboarding-actions">
          <button className="btn btn-ghost" type="button" disabled={step === 0 || loading} onClick={() => setStep((prev) => Math.max(0, prev - 1))}>
            Indietro
          </button>
          {step < TOTAL_STEPS - 1 ? (
            <button className="btn" type="button" disabled={loading} onClick={goNext}>
              Continua
            </button>
          ) : (
            <button className="btn" disabled={loading} type="button" onClick={() => void submitOnboarding()}>
              {loading ? 'Salvataggio...' : 'Completa onboarding'}
            </button>
          )}
        </div>
        <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
          Esci e cambia account
        </button>
      </section>
    </main>
  );
}
