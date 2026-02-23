# Frontend Integration Guide (Firebase)

Questa guida e il contratto operativo FE <-> BE per integrare l'app PT.

## 1) Firebase config frontend
Usa questa configurazione nel client:

```ts
export const firebaseConfig = {
  apiKey: "AIzaSyBMwuPSGuAL3BC4KbmKv7BXwumOvQH4q_U",
  authDomain: "beastlyworkout-e05ac.firebaseapp.com",
  projectId: "beastlyworkout-e05ac",
  storageBucket: "beastlyworkout-e05ac.firebasestorage.app",
  messagingSenderId: "450850141428",
  appId: "1:450850141428:web:3cdba0ebf48acfa9f51aa1",
};
```

## 2) Ruoli e autorizzazioni
Ruoli supportati nei custom claims:
- `admin`
- `trainer`
- `client`

Policy attuale progetto:
- trainer operativo = `admin`
- quindi il frontend trainer deve autenticarsi con utente claim `admin`.

Scelta frontend:
- un solo progetto/deploy con routing role-based (`/app/coach`, `/app/client`).
- autenticazione client-side: **Google provider only**.

Importante:
- dopo cambio ruolo (`setUserRole`) devi forzare refresh token sul client:
  - `await currentUser.getIdToken(true)`

## 3) Collections Firestore (naming ufficiale)
- `users/{uid}`
- `users/{uid}/private/{docId}`
- `trainerClients/{pairId}`
- `plans/{planId}`
- `workoutLogs/{logId}`
- `sessions/{sessionId}`
- `metrics/{metricId}`

Convenzioni:
- collection lowercase plural
- campi `camelCase`
- timestamp: `createdAt`, `updatedAt`

## 4) Regole pratiche per il frontend

### `users/{uid}`
- read: owner o admin
- create: solo owner con `uid == auth.uid`
- update: owner o admin

### `plans/{planId}`
- create: solo coach (`admin`/`trainer`) con `trainerId == auth.uid`
- read: admin, trainer assegnato, client assegnato
- update client consentito solo su:
  - `clientNotes`
  - `lastViewedAt`

### `workoutLogs/{logId}`
- create: solo client con `clientId == auth.uid`
- update trainer consentito solo su:
  - `trainerFeedback`
  - `updatedAt`

### `sessions/{sessionId}`
- create/update: solo coach con `trainerId == auth.uid`

### `metrics/{metricId}`
- create/update: solo client con `clientId == auth.uid`

### Default deny
- qualsiasi collection non prevista viene negata.

## 5) Storage paths e permessi

### Profile images
Path:
- `profile-images/{uid}/{fileName}`

Permessi:
- read: pubblico
- write: solo owner (`auth.uid == uid`)
- delete: owner o admin

### Workout media
Path:
- `workout-media/{trainerId}/{clientId}/{fileName}`

Permessi:
- read: admin o trainer del path o client del path
- create/update: trainer del path o client del path
- size max upload: `< 15MB`
- delete: admin o trainer del path

## 6) Cloud Functions callable da frontend
Regione default: `us-central1`

### `bootstrapFirstAdmin`
Uso:
- solo una volta, primo utente autenticato del progetto
- promuove quell'utente ad admin se non esiste gia un admin

### `setUserRole`
Input:
```json
{ "uid": "USER_UID", "role": "admin|trainer|client" }
```
Regola:
- invocabile solo da admin

## 7) Bootstrap FE consigliato (ordine)
1. Login utente con Google.
2. Leggi claim ruolo da token.
3. Se manca ruolo e sei owner iniziale, chiama `bootstrapFirstAdmin`.
4. Forza `getIdToken(true)`.
5. Carica profilo da `users/{uid}`.
6. Routing by role:
   - admin/trainer -> dashboard coach
   - client -> dashboard client

## 8) Query frontend consigliate

Admin/coach:
- `plans` by `trainerId == auth.uid` + `status` + `createdAt desc`
- `workoutLogs` per cliente `clientId == X` order by `sessionDate desc`

Client:
- `plans` by `clientId == auth.uid`
- `workoutLogs` by `clientId == auth.uid` order by data
- `sessions` by `clientId == auth.uid`

Nota:
- gli index necessari sono gia definiti in backend (`firestore.indexes.json`).

## 9) Error handling FE (obbligatorio)
Gestisci esplicitamente:
- `permission-denied`
- `unauthenticated`
- `invalid-argument`

UX minima consigliata:
- messaggio chiaro per permessi insufficienti
- CTA logout/login quando token non valido
- retry solo su errori transienti, non su `permission-denied`

## 10) Snippet rapido FE (modular SDK)

```ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions, httpsCallable } from 'firebase/functions';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'us-central1');

export const bootstrapFirstAdmin = httpsCallable(functions, 'bootstrapFirstAdmin');
export const setUserRole = httpsCallable(functions, 'setUserRole');
```

## 11) Checklist finale frontend
- [ ] Inizializzazione Firebase client con config corretta
- [ ] Refresh token dopo role assignment
- [ ] Routing role-based coerente con claims
- [ ] Scritture su collection con campi owner corretti (`trainerId`, `clientId`)
- [ ] Upload Storage sui path ufficiali
- [ ] Gestione errori `permission-denied`/`unauthenticated`

## 12) File pronti in questo repo
- Firebase bootstrap client:
  - `frontend/src/lib/firebase.ts`
- CRUD/data access allineato alle rules:
  - `frontend/src/lib/collections.ts`
- Auth state hook:
  - `frontend/src/lib/auth.ts`
- Guardie React per schermate/route protette:
  - `frontend/src/lib/guards.tsx`
- Export unico:
  - `frontend/src/lib/index.ts`

## 13) Uso guardie React
Esempio:

```tsx
import { AuthGuard, RoleGuard } from '@/lib';

export function CoachArea() {
  return (
    <AuthGuard fallback={<div>Devi fare login</div>} loading={<div>Loading...</div>}>
      <RoleGuard allow={['admin', 'trainer']} fallback={<div>Accesso negato</div>}>
        <div>Dashboard Coach</div>
      </RoleGuard>
    </AuthGuard>
  );
}
```
