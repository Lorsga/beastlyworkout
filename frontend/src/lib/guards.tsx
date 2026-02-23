import type { ReactNode } from 'react';

import { useAuthState } from './auth';
import type { AppRole } from './firebase';

type RenderOrFactory = ReactNode | (() => ReactNode);

function renderValue(value: RenderOrFactory | undefined): ReactNode {
  if (typeof value === 'function') {
    return (value as () => ReactNode)();
  }
  return value ?? null;
}

interface AuthGuardProps {
  children: ReactNode;
  loading?: RenderOrFactory;
  fallback?: RenderOrFactory;
}

export function AuthGuard({ children, loading, fallback }: AuthGuardProps) {
  const { initializing, isAuthenticated } = useAuthState();

  if (initializing) return <>{renderValue(loading)}</>;
  if (!isAuthenticated) return <>{renderValue(fallback)}</>;

  return <>{children}</>;
}

interface RoleGuardProps {
  children: ReactNode;
  allow: AppRole | AppRole[];
  loading?: RenderOrFactory;
  fallback?: RenderOrFactory;
}

export function RoleGuard({ children, allow, loading, fallback }: RoleGuardProps) {
  const { initializing, isAuthenticated, role } = useAuthState();
  const allowedRoles = Array.isArray(allow) ? allow : [allow];

  if (initializing) return <>{renderValue(loading)}</>;
  if (!isAuthenticated || !role) return <>{renderValue(fallback)}</>;
  if (!allowedRoles.includes(role)) return <>{renderValue(fallback)}</>;

  return <>{children}</>;
}
