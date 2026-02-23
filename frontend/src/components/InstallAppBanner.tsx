import { useEffect, useMemo, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

function isStandaloneMode() {
  const mediaStandalone = window.matchMedia?.('(display-mode: standalone)').matches ?? false;
  const iosStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
  return mediaStandalone || iosStandalone;
}

function isiOS() {
  return /iPad|iPhone|iPod/.test(window.navigator.userAgent);
}

export function InstallAppBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onBeforeInstallPrompt(event: Event) {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  const shouldShowIosHint = useMemo(() => !isStandaloneMode() && isiOS() && !dismissed && !deferredPrompt, [dismissed, deferredPrompt]);
  const shouldShowInstallButton = useMemo(() => !isStandaloneMode() && !dismissed && Boolean(deferredPrompt), [deferredPrompt, dismissed]);

  async function installNow() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setDeferredPrompt(null);
    }
    setDismissed(true);
  }

  if (!shouldShowIosHint && !shouldShowInstallButton) return null;

  return (
    <section className="install-banner" aria-live="polite">
      <p className="hint">
        {shouldShowInstallButton
          ? 'Aggiungi Beastly alla schermata Home per aprirla come app.'
          : 'Su iPhone: Condividi -> Aggiungi a Home per installare Beastly.'}
      </p>
      <div className="install-actions">
        {shouldShowInstallButton ? (
          <button className="btn" type="button" onClick={() => void installNow()}>
            Aggiungi alla Home
          </button>
        ) : null}
        <button className="btn btn-ghost" type="button" onClick={() => setDismissed(true)}>
          Chiudi
        </button>
      </div>
    </section>
  );
}
