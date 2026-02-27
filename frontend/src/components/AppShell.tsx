import { useMemo, useState, type ReactNode } from 'react';

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
  subtitle?: string;
  headerAction?: ReactNode;
  sections?: ShellSection[];
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
  children: ReactNode;
}) {
  const hasSections = sections.length > 0 && Boolean(onSectionChange);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const mobileVisibleSections = useMemo(() => {
    if (!hasSections) return [];
    if (sections.length <= 4) return sections;
    return sections.slice(0, 3);
  }, [hasSections, sections]);
  const mobileHiddenSections = useMemo(() => {
    if (!hasSections || sections.length <= 4) return [];
    return sections.slice(3);
  }, [hasSections, sections]);
  const mobileActiveSection = showMoreMenu ? '__more__' : activeSection;
  const isMoreActive = showMoreMenu || (!showMoreMenu && mobileHiddenSections.some((section) => section.id === activeSection));

  function renderSectionButton(section: ShellSection, mode: 'mobile' | 'desktop') {
    const selected = (mode === 'mobile' ? mobileActiveSection : activeSection) === section.id;
    const label = mode === 'mobile' ? (section.mobileLabel ?? section.label) : section.label;
    return (
      <button
        key={`${mode}-${section.id}`}
        className={`shell-tab shell-tab-${mode} ${selected ? 'shell-tab-active' : ''}`.trim()}
        type="button"
        onClick={() => {
          onSectionChange?.(section.id);
          if (mode === 'mobile') setShowMoreMenu(false);
        }}
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
          {subtitle?.trim() ? <p className="hint">{subtitle}</p> : null}
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
          {subtitle?.trim() ? <p className="hero-sub">{subtitle}</p> : null}
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
          ? mobileVisibleSections.map((section) => renderSectionButton(section, 'mobile'))
          : (
            <button className="shell-tab shell-tab-mobile shell-tab-active" type="button">
              <span className="shell-tab-icon" aria-hidden="true">🏠</span>
              <span className="shell-tab-label">Home</span>
            </button>
            )}
        {mobileHiddenSections.length > 0 ? (
          <button
            className={`shell-tab shell-tab-mobile ${isMoreActive || showMoreMenu ? 'shell-tab-active' : ''}`.trim()}
            type="button"
            onClick={() => setShowMoreMenu((prev) => !prev)}
          >
            <span className="shell-tab-icon" aria-hidden="true">⋯</span>
            <span className="shell-tab-label">Altro</span>
          </button>
        ) : null}
        <button className="shell-tab shell-tab-mobile" type="button" onClick={() => void logoutCurrentUser()}>
          <span className="shell-tab-icon" aria-hidden="true">🚪</span>
          <span className="shell-tab-label">Esci</span>
        </button>
      </nav>
      {showMoreMenu && mobileHiddenSections.length > 0 ? (
        <section className="modal-overlay mobile-more-overlay" role="dialog" aria-modal="true" onClick={(event) => event.currentTarget === event.target && setShowMoreMenu(false)}>
          <article className="card mobile-more-card" onClick={(event) => event.stopPropagation()}>
            <h3>Altre sezioni</h3>
            <div className="mobile-more-list">
              {mobileHiddenSections.map((section) => (
                <button
                  key={`more-${section.id}`}
                  className={`step-tab ${activeSection === section.id ? 'step-tab-active' : ''}`.trim()}
                  type="button"
                  onClick={() => {
                    onSectionChange?.(section.id);
                    setShowMoreMenu(false);
                  }}
                >
                  {section.icon ? `${section.icon} ` : ''}{section.label}
                </button>
              ))}
            </div>
            <button className="btn btn-ghost" type="button" onClick={() => setShowMoreMenu(false)}>
              Chiudi
            </button>
          </article>
        </section>
      ) : null}
    </main>
  );
}
