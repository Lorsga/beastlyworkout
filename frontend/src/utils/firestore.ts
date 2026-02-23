import type { QueryDocumentSnapshot } from 'firebase/firestore';

export function mapDocs<T>(docs: QueryDocumentSnapshot[]): Array<T & { id: string }> {
  return docs.map((docItem) => ({
    id: docItem.id,
    ...(docItem.data() as T),
  }));
}

export function toMessage(error: unknown): string {
  if (typeof error === 'object' && error && 'code' in error) {
    const code = String((error as { code: unknown }).code);
    if (code.includes('permission-denied')) return 'Permessi insufficienti per questa operazione.';
    if (code.includes('unauthenticated')) return 'Sessione non valida. Effettua il login di nuovo.';
    if (code.includes('invalid-argument')) return 'Dati non validi. Controlla i campi e riprova.';
  }

  if (error instanceof Error) return error.message;
  return 'Operazione non riuscita.';
}
