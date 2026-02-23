import { Component, Suspense, lazy, type ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuthState } from './lib';

const AuthPage = lazy(() => import('./pages/AuthPage').then((module) => ({ default: module.AuthPage })));
const ClientDashboardPage = lazy(() =>
  import('./pages/ClientDashboardPage').then((module) => ({ default: module.ClientDashboardPage })),
);
const CoachDashboardPage = lazy(() =>
  import('./pages/CoachDashboardPage').then((module) => ({ default: module.CoachDashboardPage })),
);
const OnboardingPage = lazy(() =>
  import('./pages/OnboardingPage').then((module) => ({ default: module.OnboardingPage })),
);

function LoadingScreen() {
  return (
    <main className="page page-center">
      <div className="card">
        <p className="eyebrow">Gym PT</p>
        <h1>Caricamento in corso</h1>
      </div>
    </main>
  );
}

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page page-center">
          <section className="card auth-card">
            <p className="eyebrow">Beastly Workout</p>
            <h1>Qualcosa non ha funzionato</h1>
            <p className="hero-sub">Ricarica la pagina o esci e rientra nel tuo profilo.</p>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
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
    return <Navigate to="/onboarding" replace />;
  }
  if (!allow.includes(role)) return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;

  return children;
}

function HomeRedirect() {
  const { user, role, initializing } = useAuthState();

  if (initializing) return <LoadingScreen />;
  if (!user) return <Navigate to="/auth" replace />;
  if (!role) {
    return <Navigate to="/onboarding" replace />;
  }
  return <Navigate to={role === 'client' ? '/app/client' : '/app/coach'} replace />;
}

export function App() {
  return (
    <AppErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
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
    </AppErrorBoundary>
  );
}
