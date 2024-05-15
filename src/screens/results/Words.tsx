import { useMemo } from 'react'
import classNames from 'classnames'
import { resultLinkText, shareResult } from '../../util/results/share'

interface Props {
  title: string
  words: string[]
  letters: string[]

  canShare?: boolean
}

export const Words = (props: Props) => {
  // Since we might get the same word multiple times as we re-use this list, we make a random key for React
  const randomKey = useMemo(() => {
    return Math.random().toString()
  }, [])

  const shareResults = () => {
    shareResult(
      resultLinkText({
        words: props.words,
        letters: props.letters
      })
    )
  }

  let letterIndex = 0

  return (
    <div className="center card mt-4 w-full select-text bg-base-100 shadow-xl">
      <div className="card-body flex flex-col items-center">
        <h3 className="text-xl font-bold">{props.title}</h3>
        {props.canShare ? (
          <button className="btn btn-secondary btn-xs" onClick={shareResults}>
            Share Words
          </button>
        ) : null}
        <ul className="mt-3 flex flex-col gap-3 text-base">
          {props.words.map((word) => {
            return (
              <div key={word + randomKey} className="flex flex-wrap gap-2 text-lg">
                {word.split('').map((letter, idx) => {
                  let point = false
                  if (props.letters[letterIndex] === letter) {
                    point = true
                    letterIndex++
                  }

                  return (
                    <span
                      key={letter + idx + randomKey + word}
                      className={classNames({
                        'text-green-700 underline': point
                      })}
                    >
                      {letter.toUpperCase()}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
