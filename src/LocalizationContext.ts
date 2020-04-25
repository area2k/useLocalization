import React from 'react'

import { ContextShape } from '../types'

export default React.createContext<ContextShape>({
  locale: { date: {}, dictionary: {}, key: 'en-US' },
  setLocale: () => undefined
})
