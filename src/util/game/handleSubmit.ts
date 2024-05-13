import { last } from 'lodash'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { store } from '../../store/store'
import { lettersForToday } from '../lottery/letters'
import { getLettersWithPoints } from './getLettersWithPoints'

export const isWord = async (word: string) => {
  return true
}

export const handleSubmit = async () => {
  const word = store.get(currentWord)
  const letters = lettersForToday()
  const currentLetterIndex = store.get(currentStartLetterIndex)

  // Word must be at least 3 characters long
  if (word.length < 3) {
    return
  }

  const isValidWord = await isWord(word)
  if (!isValidWord) {
    return
  }

  const lettersWithPoints = getLettersWithPoints({
    letters,
    currentStartLetterIndex: currentLetterIndex,
    currentWord: word
  })

  const lastLetterWithPoint = last(lettersWithPoints)
  if (!lastLetterWithPoint) {
    return
  }

  const lastLetterIndex = letters.indexOf(lastLetterWithPoint)
  if (lastLetterIndex !== -1) {
    store.set(currentStartLetterIndex, lastLetterIndex + 1)
  }

  const nextLetter = letters[lastLetterIndex + 1]
  if (!nextLetter) {
    // Game over
    return
  }

  // Setup the next word's first letter
  store.set(currentWord, nextLetter)
}
