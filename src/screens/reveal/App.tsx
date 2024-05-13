import { useEffect, useState } from 'react'
import { LetterList } from './LetterList'
import { Light } from './Light'
import { motion } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { Screen, screen } from '../../store/screen'

export const Reveal = () => {
  const setScreen = useSetAtom(screen)
  const [revealLightCount, setRevealLightCount] = useState(0)

  useEffect(() => {
    if (revealLightCount === 3) {
      const timeout = setTimeout(() => {
        setScreen(Screen.game)
      }, 2700)
      return () => clearTimeout(timeout)
    }

    // Wait a little longer for the first shuffle
    const duration = revealLightCount === 0 ? 800 : 1200

    const timeout = setTimeout(() => {
      setRevealLightCount((c) => c + 1)
    }, duration)

    return () => clearTimeout(timeout)
  }, [revealLightCount, setScreen])

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4 flex gap-3">
        <Light enabled={revealLightCount >= 1} />
        <Light enabled={revealLightCount >= 2} />
        <Light enabled={revealLightCount >= 3} />
      </div>
      <h2 className="mb-2 text-3xl font-bold italic">Running today's lottery...</h2>
      <p className="mb-8 text-base opacity-90">The lottery result is the same for everybody!</p>

      <LetterList revealLightCount={revealLightCount} />
    </motion.div>
  )
}
