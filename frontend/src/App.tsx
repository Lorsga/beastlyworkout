import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { isAllowedAdminEmail } from './config/admin';
import { useAuthState } from './lib';

const AuthPage = lazy(() => import('./pages/AuthPage').then((module) => ({ default: module.AuthPage })));
const ClientDashboardPage = lazy(() =>
  import('./pages/ClientDashboardPage').then((module) => ({ default: module.ClientDashboardPage })),
);
const CoachDashboardPage = lazy(() =>
  import('./pages/CoachDashboardPage').then((module) => ({ default: module.CoachDashboardPage })),
);
const MissingRolePage = lazy(() =>
  import('./pages/MissingRolePage').then((module) => ({ default: module.MissingRolePage })),
);
const OnboardingPage = lazy(() =>
  import('./pages/OnboardingPage').then((module) => ({ default: module.OnboardingPage })),
);
const LOGIN_INTENT_KEY = 'bw_login_intent';

function LoadingScreen() {
  return (
    <main className="page page-center">
      <div className="card">
        <p className="eyebrow">Gym PT</p>
        <h1>Caricamento sessione</h1>
      </div>
    </main>
  );
}

function ProtectedRoleRoute({
  allow,
  children,
}: {
  allow: Array<'admin' | 'trainer' | 'client'>;
  children: JSX.Element;
}) {
  const { user, role, initializing } = useAuthState();

  if (initializing) return <LoadingScreen />;
  if (!user) return <Navigate to="/auth" replace />;
  if (!role) {
    if (allow.includes('client')) return children;
    const intent = sessionStorage.getItem(LOGIN_INTENT_KEY);
    if (intent === 'coach' && isAllowedAdminEmail(user.email)) return <Navigate to="/missing-role" replace />;
    return <Navigate to="/auth" replace />;
  }
  if (!allow.includes(role)) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;

  return children;
}

function HomeRedirect() {
  const { user, role, initializing } = useAuthState();

  if (initializing) return <LoadingScreen />;
  if (!user) return <Navigate to="/auth" replace />;
  if (!role) {
    const intent = sessionStorage.getItem(LOGIN_INTENT_KEY);
    if (intent === 'coach' && isAllowedAdminEmail(user.email)) return <Navigate to="/missing-role" replace />;
    return <Navigate to="/app/client" replace />;
  }
  return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
}

export function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/missing-role" element={<MissingRolePage />} />
        <Route
          path="/app/coach"
          element={
            <ProtectedRoleRoute allow={['admin', 'trainer']}>
              <CoachDashboardPage />
            </ProtectedRoleRoute>
          }
        />
        <Route
          path="/app/client"
          element={
            <ProtectedRoleRoute allow={['client']}>
              <ClientDashboardPage />
            </ProtectedRoleRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
