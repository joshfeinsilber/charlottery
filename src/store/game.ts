import { atom } from 'jotai'

export const currentWord = atom('')

/**
 * In the array of letters, the index of the letter that the current word must start with
 */
export const currentStartLetterIndex = atom(0)
