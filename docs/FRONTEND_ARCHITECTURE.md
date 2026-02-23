# Frontend Architecture Decision

## Scelta consigliata adesso
Mantieni **un solo progetto frontend** con routing role-based e **un solo deploy**:
- `/app/coach` per `admin|trainer`
- `/app/client` per `client`

Motivo: hai già un backend con regole e model condivisi; separare subito in due app aumenterebbe overhead su auth, deploy, QA e gestione versioni senza vantaggio immediato.

## Come è già strutturato
- moduli separati a livello codice (`pages/CoachDashboardPage.tsx`, `pages/ClientDashboardPage.tsx`)
- shell comune (`components/AppShell.tsx`)
- libreria Firebase condivisa (`src/lib`)

Questa struttura permette split futuro in due app senza rifare data layer o contratti.

## Quando conviene split in 2 app
Valuta split solo quando almeno due condizioni sono vere:
- team diversi lavorano in parallelo su admin/client
- roadmap diverge in modo forte (feature, release cadence, branding)
- necessità di deploy indipendenti frequenti
- requisiti di performance/security/compliance molto diversi

## Mobile-first
L'app è stata impostata mobile-first con:
- layout principale a singola colonna
- bottom nav sticky su telefono
- breakpoints desktop progressivi
- motion ridotta su `prefers-reduced-motion`
