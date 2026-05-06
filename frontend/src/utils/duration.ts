export function normalizeDurationSeconds(value: unknown): number {
  if (value === undefined || value === null || value === '') return 0;
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.floor(numeric));
}

export function splitDurationSeconds(value: unknown) {
  const totalSeconds = normalizeDurationSeconds(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return {
    minutes,
    seconds,
  };
}

export function buildDurationSeconds(parts: {
  minutes?: number;
  seconds?: number;
}): number {
  const minutes = clampDurationPart(parts.minutes);
  const seconds = clampDurationPart(parts.seconds, 59);
  return (minutes * 60) + seconds;
}

export function parseDurationPart(raw: string, max?: number): number {
  if (!raw.trim()) return 0;
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return 0;
  const numeric = Number(digits);
  if (!Number.isFinite(numeric)) return 0;
  return clampDurationPart(numeric, max);
}

export function sanitizeDurationInput(raw: string, max?: number): string {
  const digits = raw.replace(/[^\d]/g, '');
  if (!digits) return '';
  return String(parseDurationPart(digits, max));
}

export function formatDurationLabel(value: unknown): string {
  const totalSeconds = normalizeDurationSeconds(value);
  if (totalSeconds === 0) return '0 secondi';

  const { minutes, seconds } = splitDurationSeconds(totalSeconds);
  const parts: string[] = [];

  if (minutes > 0) {
    parts.push(`${minutes} ${minutes === 1 ? 'minuto' : 'minuti'}`);
  }

  if (seconds > 0) {
    parts.push(`${seconds} ${seconds === 1 ? 'secondo' : 'secondi'}`);
  }

  return parts.join(' ');
}

export function formatRecoveryLabel(value: unknown): string {
  return `${formatDurationLabel(value)} di recupero`;
}

export function formatWorkLabel(value: unknown): string {
  return `${formatDurationLabel(value)} di lavoro`;
}

function clampDurationPart(value: unknown, max?: number): number {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) return 0;
  const normalized = Math.max(0, Math.floor(numeric));
  return typeof max === 'number' ? Math.min(max, normalized) : normalized;
}
