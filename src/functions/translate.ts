import { DictionaryEntry, Locale } from '../../types'

const onMissingTranslation = (locale: Locale, key: string) => {
  return `<! ${locale.key}: ${key} !>`
}

const translate = (locale: Locale, key: string, inputs: object = {}) => {
  const keyParts = key.split('.')

  const leaf = keyParts[keyParts.length - 1]
  const branches = keyParts.slice(0, keyParts.length - 1)

  let tree: DictionaryEntry = locale.dictionary

  for (const branch of branches) {
    tree = tree[branch]

    if (!tree || typeof tree !== 'object') {
      return onMissingTranslation(locale, key)
    }
  }

  const entry = tree[leaf]

  switch (typeof entry) {
    case 'function':
      return entry(inputs)
    case 'string':
      return entry
    default:
      return onMissingTranslation(locale, key)
  }
}

export default translate
