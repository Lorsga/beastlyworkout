function normalizeDigits(value: string): string {
  return value.replace(/[^\d]/g, '');
}

const rawNumber = String(import.meta.env.VITE_PT_WHATSAPP_NUMBER ?? '').trim();

export const PT_WHATSAPP_NUMBER = normalizeDigits(rawNumber);
export const HAS_PT_WHATSAPP = PT_WHATSAPP_NUMBER.length > 6;

export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? 'Ciao coach, avrei bisogno di un feedback sulla mia scheda.');
  return `https://wa.me/${PT_WHATSAPP_NUMBER}?text=${text}`;
}
