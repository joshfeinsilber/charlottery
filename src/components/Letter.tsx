import { motion } from 'framer-motion'

interface Props {
  size: number
  letter: string
}

export const Letter = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{ width: props.size, height: props.size, fontSize: props.size / 3 }}
      className={`flex items-center justify-center border-2 border-gray-400 bg-white font-semibold uppercase`}
    >
      {props.letter}
    </motion.div>
  )
}
