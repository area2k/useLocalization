import React, { useMemo, useState } from 'react'

import LocalizationContext from './LocalizationContext'

import { ProviderProps } from '../types'

const LocalizationProvider: React.FC<ProviderProps> = ({ children, defaultLocale }) => {
  const [locale, setLocale] = useState(defaultLocale)

  const value = useMemo(() => ({ locale, setLocale }), [locale.key])

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default LocalizationProvider
