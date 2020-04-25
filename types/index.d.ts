import { Context, FunctionComponent } from 'react'
import { Locale as DateFnsLocale } from 'date-fns'
import { OptionsWithTZ } from 'date-fns-tz'

export type DictionaryFn = (inputs: object) => string
type DictionaryEntry = string | DictionaryFn | Dictionary
export interface Dictionary {
  [key: string]: DictionaryEntry
}

export interface Locale {
  codes?: string[]
  date: DateFnsLocale
  dictionary: Dictionary
  intl?: string | string[]
  key: string
}

export interface ContextShape {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export interface ProviderProps {
  defaultLocale: Locale
}

export interface UseLocalizationOptions {
  translationPrefix?: string
}

export interface UseLocalizationPayload {
  locale: Locale
  formatDate: (date: Date | string | number, tokens: string, options?: OptionsWithTZ) => string
  translate: (key: string, inputs?: object) => string
}

export const LocalizationContext: Context<ContextShape>
export const LocalizationProvider: FunctionComponent<ProviderProps>

export default function useLocalization(opts?: UseLocalizationOptions): UseLocalizationPayload
