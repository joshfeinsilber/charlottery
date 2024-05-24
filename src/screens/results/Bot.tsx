import { useMemo, useState } from 'react'
import { lettersForToday } from '../../util/lottery/letters'
import { generateSolution } from '../../util/solution/generateSolution'
import { WordList } from './Words'

export const Bot = () => {
  const [showSolution, setShowSolution] = useState(false)

  const solution = useMemo(() => {
    if (showSolution) {
      return generateSolution(lettersForToday())
    }
    return []
  }, [showSolution])

  return (
    <div className="center card mt-4 w-full select-text bg-slate-700 text-white shadow-xl">
      <div className="card-body flex flex-col items-center">
        <img src="/beagle_robot.png" style={{ height: 80 }} alt="Robot beagle" />
        <h3 className="mt-2 text-xl">
          What did <span className="font-mono font-bold underline">M1L0</span> come up with?
        </h3>
        <p className="italic opacity-90">View today's perfect solution.</p>
        {showSolution ? (
          <>
            <div className="mt-2">
              <WordList words={solution} letters={lettersForToday()} darkMode={true} />
            </div>
            <p className="mt-6 text-sm italic opacity-90">{solution.length} words</p>
          </>
        ) : (
          <button
            onClick={() => {
              setShowSolution(true)
            }}
            className="btn-primar y btn btn-block mt-2"
          >
            View Perfect Solution
          </button>
        )}
      </div>
    </div>
  )
}
