import { last, sample } from 'lodash'
import { currentStartLetterIndex, currentWord, resultHistory, words } from '../../store/game'
import { store } from '../../store/store'
import { lettersForToday } from '../lottery/letters'
import { getLettersWithPoints } from './getLettersWithPoints'
import { toast } from 'sonner'
import { SUCCESS_WORD_MESSAGES } from '../../const/messages'
import { WORD_LIST } from '../../const/wordList'
import { Screen, screen } from '../../store/screen'
import { PUZZLE_NUMBER } from '../../const/puzzleNumber'

export const isWord = async (word: string) => {
  return WORD_LIST.has(word)
}

export const handleSubmit = async () => {
  const word = store.get(currentWord)
  const letters = lettersForToday()
  const currentLetterIndex = store.get(currentStartLetterIndex)

  // Start by dismissing all toasts
  toast.dismiss()

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

  // Add to our list of words
  store.set(words, [...store.get(words), word])

  const lastLetterIndex = letters.indexOf(lastLetterWithPoint)
  if (lastLetterIndex !== -1) {
    store.set(currentStartLetterIndex, lastLetterIndex + 1)
  }

  const nextLetter = letters[lastLetterIndex + 1]
  if (!nextLetter) {
    store.set(screen, Screen.results)
    // Push to our result history
    store.set(resultHistory, [
      ...store.get(resultHistory),
      {
        puzzleNum: PUZZLE_NUMBER,
        wordsUsed: store.get(words).length
      }
    ])

    return
  }

  toast.success(sample(SUCCESS_WORD_MESSAGES))

  // Setup the next word's first letter
  store.set(currentWord, nextLetter)
}
