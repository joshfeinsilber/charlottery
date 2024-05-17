import { useAtomValue } from 'jotai'
import { GAME_OVER_MESSAGES } from '../../const/messages'
import { getRandomItemFromArray } from '../../util/lottery/seed'
import { motion } from 'framer-motion'
import { words } from '../../store/game'
import { resultLinkText, resultText, shareResult } from '../../util/results/share'
import { lettersForToday } from '../../util/lottery/letters'

export const Top = () => {
  const wordsUsed = useAtomValue(words)

  return (
    <div className="card w-full bg-base-100 text-center shadow-xl">
      <div className="card-body flex flex-col items-center">
        <motion.div
          initial={{ rotate: -2 }}
          animate={{ rotate: 2 }}
          transition={{
            repeat: Infinity,
            duration: 1.3,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        >
          <Beagle height={90} />
        </motion.div>

        <h2 className="mt-3 text-4xl font-bold">{getRandomItemFromArray(GAME_OVER_MESSAGES)}</h2>
        <p className="text-lg opacity-90">
          You completed today's puzzle in {wordsUsed.length} words.
        </p>
        <button
          className="btn btn-primary btn-lg btn-block mt-4"
          onClick={() => {
            shareResult(resultText())
          }}
        >
          Share
        </button>
        <button
          className="btn btn-secondary btn-block"
          onClick={() => {
            shareResult(resultLinkText({ words: wordsUsed, letters: lettersForToday() }))
          }}
        >
          Share Words
        </button>
      </div>
    </div>
  )
}

const Beagle = (props: { height: number }) => (
  <img alt="Happy beagle" style={{ height: props.height }} src="/beagle_happy.png" />
)
