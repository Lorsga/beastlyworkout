import type { ReactNode } from 'react';

import type { AppRole } from '../lib';
import { logoutCurrentUser } from '../lib';

type ShellSection = {
  id: string;
  label: string;
  mobileLabel?: string;
  icon?: string;
};

export function AppShell({
  role,
  title,
  subtitle,
  headerAction,
  sections = [],
  activeSection,
  onSectionChange,
  children,
}: {
  role: AppRole;
  title: string;
  subtitle: string;
  headerAction?: ReactNode;
  sections?: ShellSection[];
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
  children: ReactNode;
}) {
  const hasSections = sections.length > 0 && Boolean(onSectionChange);

  function renderSectionButton(section: ShellSection, mode: 'mobile' | 'desktop') {
    const selected = activeSection === section.id;
    const label = mode === 'mobile' ? (section.mobileLabel ?? section.label) : section.label;
    return (
      <button
        key={`${mode}-${section.id}`}
        className={`shell-tab shell-tab-${mode} ${selected ? 'shell-tab-active' : ''}`.trim()}
        type="button"
        onClick={() => onSectionChange?.(section.id)}
        aria-current={selected ? 'page' : undefined}
      >
        {section.icon ? <span className="shell-tab-icon" aria-hidden="true">{section.icon}</span> : null}
        <span className="shell-tab-label">{label}</span>
      </button>
    );
  }

  return (
    <main className={`page shell-page ${role === 'client' ? 'shell-client' : 'shell-coach'}`.trim()}>
      {hasSections ? (
        <aside className="shell-sidebar desktop-only">
          <p className="eyebrow">{role === 'client' ? 'Area Cliente' : 'Area Coach'}</p>
          <h2>{title}</h2>
          <p className="hint">{subtitle}</p>
          <nav className="shell-sidebar-nav">
            {sections.map((section) => renderSectionButton(section, 'desktop'))}
          </nav>
          <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
            Esci dal profilo
          </button>
        </aside>
      ) : null}

      <section className="shell-main">
        <section className="hero hero-compact">
          <p className="eyebrow">{role === 'client' ? 'Area Cliente' : 'Area Coach'}</p>
          <h1>{title}</h1>
          <p className="hero-sub">{subtitle}</p>
          {headerAction}
          {!hasSections ? (
            <button className="btn btn-ghost" type="button" onClick={() => void logoutCurrentUser()}>
              Esci dal profilo
            </button>
          ) : null}
        </section>

        <section className="stack app-stack">{children}</section>
      </section>

      <nav className="mobile-nav shell-mobile-nav">
        {hasSections
          ? sections.map((section) => renderSectionButton(section, 'mobile'))
          : (
            <button className="shell-tab shell-tab-mobile shell-tab-active" type="button">
              <span className="shell-tab-icon" aria-hidden="true">🏠</span>
              <span className="shell-tab-label">Home</span>
            </button>
            )}
        <button className="shell-tab shell-tab-mobile" type="button" onClick={() => void logoutCurrentUser()}>
          <span className="shell-tab-icon" aria-hidden="true">🚪</span>
          <span className="shell-tab-label">Esci</span>
        </button>
      </nav>
    </main>
  );
}
