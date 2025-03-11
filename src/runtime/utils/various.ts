export function capitalize(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function truncate(str: string, length = 50): string {
  if (!str || typeof str !== 'string') return ''
  return str.length > length ? str.slice(0, length) + '...' : str
}

export function capitalizeWords(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str
    .split(' ')
    .map(word => capitalize(word))
    .join(' ')
}
