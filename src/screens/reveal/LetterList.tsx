import { useEffect, useState } from 'react'
import { Letter } from '../../components/Letter'
import { shuffle } from 'lodash'
import { motion } from 'framer-motion'

const ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const LetterList = () => {
  const [letters, setLetters] = useState<string[]>(ALL_LETTERS)

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = shuffle(ALL_LETTERS)
      setLetters(shuffled)
    }, 2000)
    return () => clearInterval(interval)
  })

  return (
    <div className="flex max-w-2xl flex-wrap justify-center gap-3">
      {letters.map((letter) => {
        return (
          <motion.div key={letter} layout transition={{ duration: 0.4, ease: 'anticipate' }}>
            <Letter letter={letter} />
          </motion.div>
        )
      })}
    </div>
  )
}
