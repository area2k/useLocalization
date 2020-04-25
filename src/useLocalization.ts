import { useContext, useDebugValue } from 'react'

import LocalizationContext from './LocalizationContext'

import formatDate from './functions/formatDate'
import translate from './functions/translate'

import { UseLocalizationOptions, UseLocalizationPayload } from '../types'

const useLocalization = (opts: UseLocalizationOptions = {}): UseLocalizationPayload => {
  const { locale } = useContext(LocalizationContext)
  useDebugValue(locale, locale => locale.key)

  return {
    locale,
    formatDate: (date, tokens, options = {}) => {
      console.log('[useLocalization]', '(formatDate)', locale)

      options.locale = locale.date
      return formatDate(date, tokens, options)
    },
    translate: (key, inputs = {}) => {
      const fullKey = opts.translationPrefix
        ? key.startsWith('$')
          ? key
          : `${opts.translationPrefix}.${key}`
        : key

      return translate(locale, fullKey, inputs)
    }
  }
}

export default useLocalization
