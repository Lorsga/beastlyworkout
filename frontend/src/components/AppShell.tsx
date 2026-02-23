import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import type { AppRole } from '../lib';
import { logoutCurrentUser } from '../lib';

export function AppShell({
  role,
  title,
  subtitle,
  children,
}: {
  role: AppRole;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">{role === 'client' ? 'Area Cliente' : 'Area Coach'}</p>
        <h1>{title}</h1>
        <p className="hero-sub">{subtitle}</p>
        <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
          Logout
        </button>
      </section>

      <section className="stack">{children}</section>

      <nav className="mobile-nav">
        <Link to={role === 'client' ? '/app/client' : '/app/coach'}>Dashboard</Link>
        <button type="button" onClick={() => void logoutCurrentUser()}>
          Esci
        </button>
      </nav>
    </main>
  );
}
