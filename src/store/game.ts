import { atomWithLocalStorage } from '../util/storage/atomWithSeedStorage'

export const currentWord = atomWithLocalStorage('currentWord', '')

/**
 * In the array of letters, the index of the letter that the current word must start with
 */
export const currentStartLetterIndex = atomWithLocalStorage('currentStartLetterIndex', 0)

/**
 * List of of words that the user has successfully submitted
 */
export const words = atomWithLocalStorage<string[]>('words', [] as string[])
