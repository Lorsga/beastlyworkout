const form = document.querySelector('#lead-form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const statusNode = document.querySelector('[data-form-status]');
const submitButton = document.querySelector('[data-submit-button]');
const submitLabel = document.querySelector('[data-submit-label]');
const revealNodes = document.querySelectorAll('[data-reveal]');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setFieldError(input, message) {
  const errorNode = document.querySelector(`#${input.id}-error`);
  input.setAttribute('aria-invalid', String(Boolean(message)));
  if (errorNode) {
    errorNode.textContent = message;
  }
}

function validateName() {
  const value = nameInput.value.trim();
  if (!value) {
    setFieldError(nameInput, 'Inserisci il tuo nome.');
    return false;
  }
  if (value.length < 2) {
    setFieldError(nameInput, 'Il nome deve avere almeno 2 caratteri.');
    return false;
  }
  setFieldError(nameInput, '');
  return true;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const digits = value.replace(/\D/g, '');

  if (!value) {
    setFieldError(phoneInput, 'Inserisci il tuo numero di telefono.');
    return false;
  }

  if (digits.length < 6) {
    setFieldError(phoneInput, 'Inserisci un numero di telefono valido.');
    return false;
  }

  setFieldError(phoneInput, '');
  return true;
}

function setStatus(type, message) {
  statusNode.textContent = message;
  statusNode.dataset.state = type;
}

function setSubmitting(isSubmitting) {
  submitButton.disabled = isSubmitting;
  submitButton.dataset.loading = String(isSubmitting);
  submitLabel.textContent = isSubmitting ? 'Invio in corso...' : 'Invia richiesta';
}

async function submitLead(event) {
  event.preventDefault();

  const validName = validateName();
  const validPhone = validatePhone();

  if (!validName || !validPhone) {
    setStatus('error', 'Controlla i campi evidenziati e riprova.');
    return;
  }

  setSubmitting(true);
  setStatus('idle', '');

  const payload = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    website: document.querySelector('#website').value.trim(),
  };

  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'Invio non riuscito. Riprova tra poco.');
    }

    form.reset();
    setFieldError(nameInput, '');
    setFieldError(phoneInput, '');
    setStatus('success', data.message || 'Richiesta inviata correttamente.');
  } catch (error) {
    setStatus('error', error instanceof Error ? error.message : 'Errore inatteso.');
  } finally {
    setSubmitting(false);
  }
}

function setupRevealAnimations() {
  if (reducedMotion) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
}

nameInput.addEventListener('blur', validateName);
phoneInput.addEventListener('blur', validatePhone);
form.addEventListener('submit', submitLead);

setupRevealAnimations();
