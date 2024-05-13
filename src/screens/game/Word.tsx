import { useAtomValue } from 'jotai'
import { currentStartLetterIndex, currentWord } from '../../store/game'
import { motion } from 'framer-motion'
import { ILetterStatus, Letter } from '../../components/Letter'
import { useMeasure } from '@uidotdev/usehooks'
import { useMemo } from 'react'
import { lettersForToday } from '../../util/lottery/letters'
import { getLetterIndexesWithPoints } from '../../util/game/getLettersWithPoints'

const MAX_SIZE = 70

export const Word = () => {
  const [ref, { width }] = useMeasure()
  const word = useAtomValue(currentWord)
  const startLetterIndex = useAtomValue(currentStartLetterIndex)
  const letters = lettersForToday()

  const sizes = useMemo(() => {
    const containerWidth = width ?? 0

    let text = MAX_SIZE
    let gap = 8

    const totalSize = word.length * text + (word.length - 1) * gap

    if (totalSize > containerWidth) {
      gap = 4
      text = (containerWidth - (word.length - 1) * gap) / word.length
    }
    return { text, gap }
  }, [width, word.length])

  const letterIndexesWithPoints = getLetterIndexesWithPoints({
    letters,
    currentStartLetterIndex: startLetterIndex,
    currentWord: word
  })

  return (
    <div
      ref={ref}
      className="flex w-full items-end justify-center"
      style={{ minHeight: MAX_SIZE * 1.1, gap: sizes.gap }}
    >
      {word.split('').map((letter, index) => (
        <motion.div
          key={'letter' + index + letter}
          layout
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <Letter
            letter={letter}
            size={sizes.text}
            status={
              letterIndexesWithPoints.includes(index) ? ILetterStatus.point : ILetterStatus.default
            }
          />
        </motion.div>
      ))}
    </div>
  )
}
