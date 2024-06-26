import { last, sample } from 'lodash'
import { currentStartLetterIndex, currentWord, resultHistory, words } from '../../store/game'
import { store } from '../../store/store'
import { lettersForToday } from '../lottery/letters'
import { getLettersWithPoints } from './getLettersWithPoints'
import { toast } from 'sonner'
import { SUCCESS_WORD_MESSAGES } from '../../const/messages'
import { wordsByStartingLetter } from '../../const/wordList'
import { Screen, screen } from '../../store/screen'
import { PUZZLE_NUMBER } from '../../const/puzzleNumber'
import { generateSolution } from '../solution/generateSolution'
import { seed } from '../lottery/seed'

export const isWord = (word: string) => {
  const firstLetter = word[0]
  return wordsByStartingLetter[firstLetter]?.includes(word)
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

  const isValidWord = isWord(word)
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
  store.set(words, (prev) => {
    return [...prev, word]
  })

  const lastLetterIndex = letters.indexOf(lastLetterWithPoint)
  if (lastLetterIndex !== -1) {
    store.set(currentStartLetterIndex, lastLetterIndex + 1)
  }

  const nextLetter = letters[lastLetterIndex + 1]

  if (!nextLetter) {
    store.set(screen, Screen.results)

    // Push to our result history
    store.set(resultHistory, (prev) => {
      return [
        ...prev,
        {
          puzzleNum: PUZZLE_NUMBER,
          seed,
          wordsUsed: store.get(words).length,
          perfectSolutionWordsUsed: generateSolution(letters).length
        }
      ]
    })

    return
  }

  toast.success(sample(SUCCESS_WORD_MESSAGES))
}
