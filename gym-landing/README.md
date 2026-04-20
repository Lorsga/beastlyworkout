# Gym Landing

Standalone landing page project for collecting `name` and `phone`, then saving each lead into Google Sheets.

## What is inside

- `public/`: the landing page UI
- `server.mjs`: a tiny Node server with `/api/leads`
- `.env.example`: the Google Sheets configuration you can customize later

## Run locally

```bash
cd gym-landing
cp .env.example .env
node --env-file=.env server.mjs
```

Then open [http://localhost:3000](http://localhost:3000).

## Google Sheets setup

1. Create a Google Cloud service account.
2. Enable the Google Sheets API on that project.
3. Create a Google Sheet in the Google account you want to use now.
4. Create a tab called `Leads` or change `GOOGLE_SHEETS_SHEET_NAME`.
5. Share that sheet with the service account email as `Editor`.
6. Put these values in `.env`:

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=...
GOOGLE_SHEETS_SHEET_NAME=Leads
GOOGLE_SHEETS_OWNER_EMAIL=your@email.com
```

## How to change the destination email later

You do not need to rewrite the app.

1. Create a new Google Sheet under the new email account.
2. Share the new sheet with the same service account email.
3. Update `GOOGLE_SHEETS_SPREADSHEET_ID` in `.env`.
4. Optionally update `GOOGLE_SHEETS_OWNER_EMAIL` for your own tracking.

That is enough to send all future leads to the new account's sheet.

## Saved columns

Each submission appends:

1. UTC timestamp
2. Local timestamp
3. Name
4. Phone
5. Gym name
6. Owner email label
