// String manipulation functions

export function capitalize(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function capitalizeWords(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str
    .split(' ')
    .map(word => capitalize(word))
    .join(' ')
}

export function truncate(str: string, length = 50): string {
  if (!str || typeof str !== 'string') return ''
  return str.length > length ? str.slice(0, length) + '...' : str
}

// Date manipulation functions

export function formatDate(
  timestamp: string | Date | number | null,
  dateOnly?: boolean,
  locale?: string,
): string {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString(locale || 'nb-NO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: !dateOnly ? '2-digit' : undefined,
    minute: !dateOnly ? '2-digit' : undefined,
  })
}

export function formatTime(
  timestamp: string | Date | number | null,
  includeSeconds?: boolean,
  locale?: string,
): string {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleString(locale || 'nb-NO', {
    hour: '2-digit',
    minute: '2-digit',
    second: includeSeconds ? '2-digit' : undefined,
  })
}
