import { useAtomValue } from 'jotai'
import { currentWord, words } from '../../store/game'
import { useThrottle } from '@uidotdev/usehooks'
import { useMemo } from 'react'
import { isWord } from '../../util/game/handleSubmit'
import classNames from 'classnames'
import { generateSolution } from '../../util/solution/generateSolution'
import { lettersForToday } from '../../util/lottery/letters'

export const WordCount = () => {
  const wordCount = useAtomValue(words).length
  const word = useAtomValue(currentWord)

  const solutionNumberOfWords = useMemo(() => {
    return generateSolution(lettersForToday()).length
  }, [])

  // Throttle the word so that we're not checking on every keystroke
  const throttledWord = useThrottle(word, 150)
  const isProperWord = useMemo(() => {
    return isWord(throttledWord)
  }, [throttledWord])

  return (
    <div
      className={classNames(
        'absolute top-[84px] flex w-full items-center justify-between px-7 text-sm'
      )}
    >
      <p className={classNames({ 'text-green-700 underline': isProperWord })}>
        Word #{wordCount + 1}
      </p>
      <div className="tooltip tooltip-left" data-tip={`The perfect solution's number of words`}>
        <p>🏆 {solutionNumberOfWords}</p>
      </div>
    </div>
  )
}
