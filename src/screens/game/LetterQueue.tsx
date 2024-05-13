import { useAtomValue } from 'jotai'
import { ILetterStatus, Letter } from '../../components/Letter'
import { lettersForToday } from '../../util/lottery/letters'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { getLettersWithPoints } from '../../util/game/getLettersWithPoints'
import { AnimatePresence, motion } from 'framer-motion'

export const LetterQueue = () => {
  const word = useAtomValue(currentWord)
  const startLetterIndex = useAtomValue(currentStartLetterIndex)
  const letters = lettersForToday()

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
        {filteredLetters.map((letter) => {
          return (
            <motion.div layout className="shrink-0" key={'queue' + letter}>
              <Letter
                size={50}
                letter={letter}
                status={
                  lettersWithPoints.includes(letter) ? ILetterStatus.point : ILetterStatus.default
                }
              />
            </motion.div>
          )
        })}
      </div>
    </AnimatePresence>
  )
}
