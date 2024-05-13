import { last, sample } from 'lodash'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { store } from '../../store/store'
import { lettersForToday } from '../lottery/letters'
import { getLettersWithPoints } from './getLettersWithPoints'
import { toast } from 'sonner'
import { SUCCESS_WORD_MESSAGES } from '../../const/messages'
import { WORD_LIST } from '../../const/wordList'

export const isWord = async (word: string) => {
  return WORD_LIST.has(word)
}

export const handleSubmit = async () => {
  const word = store.get(currentWord)
  const letters = lettersForToday()
  const currentLetterIndex = store.get(currentStartLetterIndex)

  // Word must be at least 3 characters long
  if (word.length < 3) {
    toast.error('Not enough letters')
    return
  }

  const isValidWord = await isWord(word)
  if (!isValidWord) {
    toast.error('Not in word list')
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
  console.log({ nextLetter })
  if (!nextLetter) {
    // Game over
    return
  }

  toast.success(sample(SUCCESS_WORD_MESSAGES))

  // Setup the next word's first letter
  store.set(currentWord, nextLetter)
}
