import { motion } from 'framer-motion'

interface Props {
  letter: string
}

export const Letter = (props: Props) => {
  return (
    <motion.div
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="flex h-[80px] w-[80px] items-center justify-center border-2 border-gray-400 bg-white text-3xl font-semibold uppercase"
    >
      {props.letter}
    </motion.div>
  )
}
