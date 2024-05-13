import { atom } from 'jotai'
import { seed } from '../lottery/seed'

const getKey = (key: string) => `${seed}-${key}`

export const atomWithLocalStorage = <T = any>(key: string, initialValue: T) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(getKey(key))
    if (item !== null) {
      return JSON.parse(item)
    }
    return initialValue
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(getKey(key), JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

export const removeOldLocalStorageData = () => {
  // Get keys of everything stored in localStorage
  const keys = Object.keys(localStorage)

  // If the key does not start with today's seed, remove it
  keys.forEach((key) => {
    if (!key.startsWith(seed)) {
      localStorage.removeItem(key)
    }
  })
}
