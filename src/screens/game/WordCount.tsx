import { useAtomValue } from 'jotai'
import { currentWord, words } from '../../store/game'
import { useThrottle } from '@uidotdev/usehooks'
import { useMemo } from 'react'
import { isWord } from '../../util/game/handleSubmit'
import classNames from 'classnames'

export const WordCount = () => {
  const wordCount = useAtomValue(words).length
  const word = useAtomValue(currentWord)

  // Throttle the word so that we're not checking on every keystroke
  const throttledWord = useThrottle(word, 150)
  const isProperWord = useMemo(() => {
    return isWord(throttledWord)
  }, [throttledWord])

  console.log(isProperWord)

  return (
    <div
      className={classNames('absolute top-[24px] z-20 text-sm', {
        'text-green-700 underline': isProperWord
      })}
    >
      Word #{wordCount + 1}
    </div>
  )
}
