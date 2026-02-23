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
    if (code.includes('permission-denied')) return 'Non hai i permessi per questa azione.';
    if (code.includes('unauthenticated')) return 'La sessione è scaduta. Accedi di nuovo.';
    if (code.includes('invalid-argument')) return 'Alcuni dati non sono corretti. Controlla e riprova.';
    if (code.includes('failed-precondition')) return 'Manca una configurazione tecnica lato server. Riprova tra poco.';
    if (code.includes('internal')) return 'Qualcosa non ha funzionato. Riprova tra pochi secondi.';
    return 'Operazione non completata. Riprova.';
  }

  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    if (message.includes('token') || message.includes('credential')) {
      return 'Sessione non valida. Esci e accedi di nuovo.';
    }
    return 'Si è verificato un problema. Riprova.';
  }
  return 'Operazione non riuscita.';
}
