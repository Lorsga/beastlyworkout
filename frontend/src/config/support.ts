function normalizeDigits(value: string): string {
  return value.replace(/[^\d]/g, '');
}

const rawNumber = String(import.meta.env.VITE_PT_WHATSAPP_NUMBER ?? '393405882404').trim();

export const PT_WHATSAPP_NUMBER = normalizeDigits(rawNumber);
export const HAS_PT_WHATSAPP = PT_WHATSAPP_NUMBER.length > 6;

export function buildWhatsAppUrl(message?: string, customNumber?: string): string {
  const number = normalizeDigits(customNumber ?? PT_WHATSAPP_NUMBER);
  const text = encodeURIComponent(message ?? 'Ciao coach, avrei bisogno di un feedback sulla mia scheda.');
  return `https://wa.me/${number}?text=${text}`;
}
