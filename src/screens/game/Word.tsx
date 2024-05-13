import { useAtomValue } from 'jotai'
import { currentWord } from '../../store/game/word'
import { motion } from 'framer-motion'
import { Letter } from '../../components/Letter'
import { useMeasure } from '@uidotdev/usehooks'
import { useMemo } from 'react'

const MAX_SIZE = 70

export const Word = () => {
  const word = useAtomValue(currentWord)
  const [ref, { width }] = useMeasure()

  const sizes = useMemo(() => {
    const containerWidth = width ?? 0

    let size = MAX_SIZE
    let gap = 8

    const totalSize = word.length * size + (word.length - 1) * gap

    if (totalSize > containerWidth) {
      gap = 4
      size = (containerWidth - (word.length - 1) * gap) / word.length
    }
    return { size, gap }
  }, [width, word.length])

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
          <Letter letter={letter} size={sizes.size} />
        </motion.div>
      ))}
    </div>
  )
}
