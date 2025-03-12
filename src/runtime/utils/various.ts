// String manipulation functions ------------------------------------------------

/**
 * Capitalizes each word in a string by default, or only the first word if "allWords" is false.
 * @param str - The string to capitalize
 * @param allWords - Whether to capitalize all words or just the first
 * @returns A new string with the requested capitalization
 */
export function IOCapitalize(str: string, allWords = true): string {
  if (!str || typeof str !== 'string') return ''

  if (allWords) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  else {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}

/**
 * Truncates a string to a specified length, appending "..." if it exceeds that length.
 * @param str - The string to truncate
 * @param length - Maximum length of the truncated string
 * @returns The truncated string
 */
export function IOTruncate(str: string, length = 50): string {
  if (!str || typeof str !== 'string') return ''
  return str.length > length ? str.slice(0, length) + '...' : str
}

// Date manipulation functions ------------------------------------------------

/**
 * Formats a given timestamp based on mode, optional seconds, and locale.
 * @param timestamp - The date or string representing a date
 * @param config - Configuration object for date formatting
 * @param config.mode - "default", "date", or "time"
 * @param config.includeSeconds - Include seconds if true
 * @param config.locale - Locale for formatting (default: "nb-NO")
 * @returns A formatted date string
 */
export function IOFormatDate(
  timestamp: string | number | Date | null,
  {
    mode = 'default',
    includeSeconds = false,
    locale = 'nb-NO',
  }: {
    mode?: 'default' | 'date' | 'time'
    includeSeconds?: boolean
    locale?: string
  } = {},
): string {
  if (!timestamp) return ''

  const date = new Date(timestamp)
  const options: Intl.DateTimeFormatOptions = {}

  // Include date parts if mode is 'date' or 'default'
  if (mode !== 'time') {
    options.year = 'numeric'
    options.month = '2-digit'
    options.day = '2-digit'
  }

  // Include time parts if mode is 'time' or 'default'
  if (mode !== 'date') {
    options.hour = '2-digit'
    options.minute = '2-digit'
    if (includeSeconds) {
      options.second = '2-digit'
    }
  }

  return date.toLocaleString(locale, options)
}
