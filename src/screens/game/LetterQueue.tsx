import { useAtomValue } from 'jotai'
import { ILetterStatus, Letter } from '../../components/Letter'
import { lettersForToday } from '../../util/lottery/letters'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { getLettersWithPoints } from '../../util/game/getLettersWithPoints'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { findWordsMatchingOrder } from '../../util/solution/generateSolution'

export const LetterQueue = () => {
  const word = useAtomValue(currentWord)
  const storeStartLetterIndex = useAtomValue(currentStartLetterIndex)
  const [startLetterIndex, setStartLetterIndex] = useState(storeStartLetterIndex)
  const letters = useMemo(() => lettersForToday(), [])

  const numberOfCharactersInQueueThatCanBeUsed = useMemo(() => {
    const words = findWordsMatchingOrder([...letters].splice(startLetterIndex))
    return words.length
  }, [letters.length, startLetterIndex])

  const lettersWithPoints = useMemo(
    () =>
      getLettersWithPoints({
        letters,
        currentStartLetterIndex: storeStartLetterIndex,
        currentWord: word
      }),
    [letters, storeStartLetterIndex, word]
  )

  const possibleLetters = useMemo(() => {
    const start = startLetterIndex
    const end = start + numberOfCharactersInQueueThatCanBeUsed

    return letters.filter((_, idx) => {
      return idx >= start && idx < end
    })
  }, [letters, numberOfCharactersInQueueThatCanBeUsed, startLetterIndex])

  const filteredLetters = useMemo(
    () =>
      letters.filter((_, idx) => {
        return idx >= storeStartLetterIndex
      }),
    [letters, storeStartLetterIndex]
  )

  useEffect(() => {
    setStartLetterIndex(storeStartLetterIndex)
  }, [storeStartLetterIndex])

  return (
    <AnimatePresence>
      <div className="flex w-full max-w-[512px] gap-1 overflow-x-scroll">
        {filteredLetters.map((letter, idx) => {
          return (
            <motion.div
              layout
              className="flex shrink-0 flex-col items-center"
              key={'queue' + letter + startLetterIndex}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setStartLetterIndex(storeStartLetterIndex + idx)
              }}
            >
              <Letter
                size={50}
                letter={letter}
                status={
                  lettersWithPoints.includes(letter)
                    ? ILetterStatus.point
                    : possibleLetters.includes(letter)
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
