import { useAtomValue } from 'jotai'
import { Top } from './Top'
import { Words } from './Words'
import { motion } from 'framer-motion'
import { words } from '../../store/game'
import { lettersForToday } from '../../util/lottery/letters'
import { useMemo } from 'react'
import { decodeResults } from '../../util/results/encodedInfo'
import { Bot } from './Bot'
import { Medal } from './Medal'

export const Results = () => {
  const wordList = useAtomValue(words)

  const otherResults = useMemo(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const results = urlParams.get('results')
    if (!results) {
      return null
    }
    return decodeResults(results)
  }, [])

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring' }}
      className="w-full max-w-xl"
    >
      <Top />
      {otherResults ? (
        <>
          <Words title="Their Words" words={otherResults.words} letters={otherResults.letters} />
          <Words title="Your Words" words={wordList} letters={lettersForToday()} />
        </>
      ) : null}
      <Medal />

      {!otherResults ? (
        <Words title="Your Words" words={wordList} letters={lettersForToday()} />
      ) : null}

      <Bot />
    </motion.div>
  )
}
