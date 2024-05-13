import { Top } from './Top'
import { Words } from './Words'
import { motion } from 'framer-motion'

export const Results = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring' }}
      className="w-full max-w-xl"
    >
      <Top />
      <Words />
    </motion.div>
  )
}
