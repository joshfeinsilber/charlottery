import { useMemo, useState } from 'react'
import { MEDALS, NONE_MEDAL } from '../../const/medals'
import { generateSolution } from '../../util/solution/generateSolution'
import { lettersForToday } from '../../util/lottery/letters'
import { getMedal } from '../../util/results/getMedal'
import { useAtomValue } from 'jotai'
import { resultHistory, words } from '../../store/game'
import { MedalBreakdown } from './MedalBreakdown'

export const Medal = () => {
  const wordList = useAtomValue(words)
  const history = useAtomValue(resultHistory)
  const medal = getMedal(wordList.length)
  const [showingBreakdown, setShowingBreakdown] = useState(false)

  const perfectSolutionWordCount = useMemo(() => {
    return generateSolution(lettersForToday()).length
  }, [])

  return (
    <div className="center card mt-4 w-full select-text bg-base-100 shadow-xl">
      <div className="card-body flex flex-col items-center">
        <h3 className="mb-2 text-xl font-bold">Medal</h3>
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
            <h2 className="text-7xl font-bold ">{medal.emoji}</h2>
          </div>

          <div className="text-md opacity-90">
            {MEDALS.map((medal) => {
              return (
                <p key={medal.name + '-medal'}>
                  {medal.emoji} {medal.differenceFromOptimal + perfectSolutionWordCount} Words
                </p>
              )
            })}
            <p>
              {NONE_MEDAL.emoji} {perfectSolutionWordCount + 4}+ Words
            </p>
          </div>
        </div>
        {showingBreakdown ? (
          <>
            <div className="divider" />
            <MedalBreakdown />
          </>
        ) : history.length >= 3 ? (
          <button
            className="btn btn-primary btn-sm mt-4"
            onClick={() => {
              setShowingBreakdown(true)
            }}
          >
            View Medal Statistics
          </button>
        ) : null}
      </div>
    </div>
  )
}
