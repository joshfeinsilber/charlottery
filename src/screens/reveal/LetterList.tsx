import { useEffect, useState } from 'react'
import { Letter } from '../../components/Letter'
import { shuffle } from 'lodash'
import { motion } from 'framer-motion'
import { LETTERS } from '../../const/letters'
import { lettersForToday } from '../../util/lottery/letters'

export const LetterList = (props: { revealLightCount: number }) => {
  const [letters, setLetters] = useState<string[]>([...LETTERS])

  useEffect(() => {
    if (props.revealLightCount === 0) {
      setLetters([...LETTERS])
      return
    }

    if (props.revealLightCount >= 3) {
      setLetters(lettersForToday())
      return
    }

    const shuffledLetters = shuffle(lettersForToday())
    setLetters(shuffledLetters)
  }, [props.revealLightCount])

  return (
    <div className="flex max-w-2xl flex-wrap justify-center gap-3">
      {letters.map((letter) => {
        return (
          <motion.div key={letter} layout transition={{ duration: 1, ease: 'anticipate' }}>
            <Letter size={80} letter={letter} />
          </motion.div>
        )
      })}
    </div>
  )
}
