import { useAtomValue } from 'jotai'
import { currentWord } from '../../store/game/word'
import { Letter } from '../../components/Letter'
import { useMeasure } from '@uidotdev/usehooks'
import { useMemo } from 'react'

export const Word = () => {
  const word = useAtomValue(currentWord)
  const [ref, { width }] = useMeasure()

  const sizes = useMemo(() => {
    const containerWidth = width ?? 0

    let size = 70
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
      className="flex w-full justify-center  overflow-x-auto"
      style={{ minHeight: sizes.size, gap: sizes.gap }}
    >
      {word.split('').map((letter, index) => (
        <Letter key={'letter' + index + letter} letter={letter} size={sizes.size} />
      ))}
    </div>
  )
}
