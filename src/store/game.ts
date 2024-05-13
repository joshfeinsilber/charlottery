import { atomWithStorage } from 'jotai/utils'
import { atomWithSeedStorage } from '../util/storage/atomWithSeedStorage'

export const currentWord = atomWithSeedStorage('currentWord', '')

/**
 * In the array of letters, the index of the letter that the current word must start with
 */
export const currentStartLetterIndex = atomWithSeedStorage('currentStartLetterIndex', 0)

/**
 * List of of words that the user has successfully submitted
 */
export const words = atomWithSeedStorage('words', [] as string[])

export const resultHistory = atomWithStorage<
  Array<{
    puzzleNum: number
    wordsUsed: number
  }>
>('history', [])
