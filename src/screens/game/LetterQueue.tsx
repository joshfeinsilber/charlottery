import { useAtomValue } from 'jotai'
import { ILetterStatus, Letter } from '../../components/Letter'
import { lettersForToday } from '../../util/lottery/letters'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { getLettersWithPoints } from '../../util/game/getLettersWithPoints'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo } from 'react'
import { findWordsMatchingOrder } from '../../util/solution/generateSolution'

export const LetterQueue = () => {
  const word = useAtomValue(currentWord)
  const startLetterIndex = useAtomValue(currentStartLetterIndex)
  const letters = lettersForToday()

  const numberOfCharactersInQueueThatCanBeUsed = useMemo(() => {
    const words = findWordsMatchingOrder([...letters].splice(startLetterIndex))
    return words.length
  }, [letters.length, startLetterIndex])

  const lettersWithPoints = getLettersWithPoints({
    letters,
    currentStartLetterIndex: startLetterIndex,
    currentWord: word
  })

  const filteredLetters = letters.filter((_, idx) => {
    return idx >= startLetterIndex
  })

  return (
    <AnimatePresence>
      <div className="flex w-full max-w-[512px] gap-1 overflow-x-scroll">
        {filteredLetters.map((letter, idx) => {
          return (
            <motion.div
              layout
              className="flex shrink-0 flex-col items-center"
              key={'queue' + letter + startLetterIndex}
            >
              <Letter
                size={50}
                letter={letter}
                status={
                  lettersWithPoints.includes(letter)
                    ? ILetterStatus.point
                    : idx < numberOfCharactersInQueueThatCanBeUsed
                      ? ILetterStatus.possible
                      : ILetterStatus.default
                }
              />
            </motion.div>
          )
        })}
      </div>
    </AnimatePresence>
  )
}
