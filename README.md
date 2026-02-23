# gym - PT Platform (Firebase + Frontend)

Backend and frontend scaffold for the PT app.

## Docs
- Backend setup: `docs/BACKEND_SETUP.md`
- Frontend integration contract: `docs/FRONTEND_INTEGRATION.md`
- Frontend architecture decision: `docs/FRONTEND_ARCHITECTURE.md`

## Frontend run
```bash
npm --prefix frontend install
npm --prefix frontend run dev
```

## Frontend auth mode
- Google sign-in only (no email/password form).
- Role routing:
  - `/app/coach` for `admin|trainer`
  - `/app/client` for `client`
- PT/Admin email allowlist is configurable with `frontend/.env`:
  - `VITE_ADMIN_EMAILS=mail1@example.com,mail2@example.com`
# beastlyworkout
