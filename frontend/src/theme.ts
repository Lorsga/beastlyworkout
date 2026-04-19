export const THEME_COLORS = {
  background: '#0B0B0D',
  surface: '#1A1A1F',
  surface2: '#2A2A31',
  textPrimary: '#F5F5F7',
  textSecondary: 'rgba(245,245,247,0.78)',
  border: 'rgba(245,245,247,0.18)',
  accent: '#C6A96B',
  accentStrong: '#B39254',
  accentForeground: '#0B0B0D',
  accentSoft: 'rgba(198,169,107,0.18)',
  focus: 'rgba(198,169,107,0.34)',
  danger: '#CF7272',
} as const;

export const SELECT_THEME = {
  surface: THEME_COLORS.surface,
  surface2: THEME_COLORS.surface2,
  border: THEME_COLORS.border,
  accent: THEME_COLORS.accent,
  accentSoft: THEME_COLORS.accentSoft,
  accentFocus: THEME_COLORS.focus,
  text: THEME_COLORS.textPrimary,
  textMuted: THEME_COLORS.textSecondary,
  accentForeground: THEME_COLORS.accentForeground,
} as const;
