# PT App Backend (Firebase)

## What is included
- Firebase Authentication + custom claims (`admin`, `trainer`, `client`).
- Firestore model and security rules with least-privilege access.
- Cloud Storage security rules for profile/workout files.
- Cloud Functions for role assignment and first-admin bootstrap.
- Local emulator configuration for BE development.

## Data model (Firestore)
- `users/{uid}`: public profile metadata, role mirror, timestamps.
- `users/{uid}/private/{doc}`: private user documents (sensitive fields).
- `trainerClients/{pairId}`: trainer-client mapping.
- `plans/{planId}`: training programs authored by trainer.
- `workoutLogs/{logId}`: logs authored by client, feedback by trainer.
- `sessions/{sessionId}`: scheduled training sessions.
- `metrics/{metricId}`: body/performance metrics authored by client.

## Security model summary
- Deny-all fallback on unknown collections.
- Access controlled by Firebase Auth + custom claim `role`.
- `admin`: full access.
- `trainer`: can manage own clients/plans/sessions.
- `client`: can read own plans/sessions and write own logs/metrics.
- Current project policy: trainer is represented by `admin`, so all coach operations are granted to `admin` in rules via `isCoach()`.
- Storage files scoped by path-based ownership checks.

## Naming convention
- Collections: lowercase plural (`users`, `plans`, `sessions`).
- Document ids: Firebase auto-id unless business key is explicitly required.
- Field names: `camelCase` (`trainerId`, `createdAt`, `updatedAt`).
- Timestamps: `createdAt` and `updatedAt` on all write-heavy entities.

## Functions
- `bootstrapFirstAdmin` (callable): grants `admin` role to first authenticated user only when no admin exists.
- `setUserRole` (callable, admin-only): assigns role claim to any user.
- `createUserProfile` (trigger): backfills profile timestamps when a user doc is created.

## Local run
1. Install Firebase CLI.
2. Install Java 21+ (required by latest Emulator Suite).
3. Set real project id in `.firebaserc`.
4. Install function dependencies:
   - `cd functions && npm install`
5. Build functions:
   - `npm run build`
6. Start emulators from project root:
   - `firebase emulators:start`

## Security rules tests
- Install test dependencies from project root:
  - `npm install`
- Run Firestore security rules tests:
  - `npm run test:rules`
- Run Storage security rules tests:
  - `npm run test:rules:storage`
- Run full rules suite:
  - `npm run test:rules:all`

## Deploy
- Rules + indexes + storage + functions:
  - `firebase deploy`

## Bootstrap production
1. Login with owner account:
   - `firebase login`
2. Deploy backend:
   - `firebase deploy`
3. Create first authenticated user (email/password or provider).
4. Call `bootstrapFirstAdmin` once with that user session.
5. Re-login the same user to refresh the `role` claim.
6. From then on, use `setUserRole` only as admin.

## Required production hardening (next step)
- Add App Check enforcement in clients.
- Add callable rate limiting / abuse protection.
- Add audit log collection (role changes, critical writes).
- Add CI test suite with Firestore rules emulator tests.
