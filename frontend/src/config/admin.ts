const DEFAULT_ADMIN_EMAILS = ['lrnz.sga@gmail.com', 'beastlyworkoutideas@gmail.com'];

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function parseAdminEmails(raw?: string): Set<string> {
  const source = raw && raw.trim().length > 0 ? raw : DEFAULT_ADMIN_EMAILS.join(',');
  return new Set(
    source
      .split(',')
      .map(normalizeEmail)
      .filter(Boolean),
  );
}

export const ADMIN_EMAILS = parseAdminEmails(import.meta.env.VITE_ADMIN_EMAILS as string | undefined);

export function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.has(normalizeEmail(email));
}
