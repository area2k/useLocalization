import { format, toDate, OptionsWithTZ } from 'date-fns-tz'

const CURRENT_TIMEZONE =
  Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'

const DEFAULT_FORMAT_OPTIONS = {
  timezone: CURRENT_TIMEZONE
}

const formatDate = (date: Date | string | number, tokens: string, opts: OptionsWithTZ) => {
  const options = { ...DEFAULT_FORMAT_OPTIONS, ...opts }
  return format(toDate(date, options), tokens, options)
}

export default formatDate
