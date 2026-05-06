export function buildPlanPdfBaseName(options: {
  assignedClientIds?: unknown;
  legacyClientId?: unknown;
  title?: unknown;
  clientLabelById: Record<string, string>;
}): string {
  const assignedIds = Array.isArray(options.assignedClientIds)
    ? options.assignedClientIds.filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    : [];

  const primaryAssignedLabel = assignedIds
    .map((id) => options.clientLabelById[id] || id)
    .find((label) => label.trim().length > 0);

  const legacyClientId = typeof options.legacyClientId === 'string' ? options.legacyClientId.trim() : '';
  const legacyLabel = legacyClientId ? (options.clientLabelById[legacyClientId] || legacyClientId) : '';
  const title = typeof options.title === 'string' ? options.title.trim() : '';

  return sanitizePdfBaseName(primaryAssignedLabel || legacyLabel || title || 'Scheda');
}

function sanitizePdfBaseName(value: string): string {
  const cleaned = value
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned || 'Scheda';
}
