import { seed } from '../lottery/seed'
import { atomWithStorage } from 'jotai/utils'

const getKey = (key: string) => `seed-${seed}-${key}`

export const atomWithSeedStorage = <T = any>(key: string, initialValue: T) => {
  return atomWithStorage(getKey(key), initialValue)
}

export const removeOldLocalStorageData = () => {
  // Get keys of everything stored in localStorage
  const keys = Object.keys(localStorage)

  // If the key does not start with today's seed, remove it
  keys.forEach((key) => {
    if (key.startsWith('seed') && !key.startsWith(seed)) {
      localStorage.removeItem(key)
    }
  })
}
