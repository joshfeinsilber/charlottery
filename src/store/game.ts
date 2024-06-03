import { atomWithStorage } from 'jotai/utils'
import { atomWithSeedStorage } from '../util/storage/atomWithSeedStorage'
import { atom } from 'jotai'

export const currentWord = atom('')

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
    seed: string
    puzzleNum: number
    wordsUsed: number
    perfectSolutionWordsUsed: number
  }>
>('game-history', [], undefined, { getOnInit: true })
