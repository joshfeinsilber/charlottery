import classNames from 'classnames'
import { motion } from 'framer-motion'

export enum ILetterStatus {
  default = 'default',
  point = 'point',
  possible = 'possible',
  possibleDark = 'possibleDark'
}

interface Props {
  size: number
  letter: string
  status?: ILetterStatus
}

export const Letter = (props: Props) => {
  const status = props.status || ILetterStatus.default

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      style={{ width: props.size, height: props.size, fontSize: props.size / 3 }}
    >
      <div
        className={classNames(
          `transition-color flex h-full w-full items-center justify-center border-2 font-semibold uppercase duration-500`,
          {
            'border-gray-400': status === ILetterStatus.default,
            'border-green-600': status === ILetterStatus.point,
            'border-blue-400':
              status === ILetterStatus.possible || status === ILetterStatus.possibleDark,
            'bg-white': status === ILetterStatus.default || status === ILetterStatus.possible,
            'bg-slate-700': status === ILetterStatus.possibleDark,
            'text-white': status === ILetterStatus.possibleDark,
            'bg-green-100': status === ILetterStatus.point
          }
        )}
      >
        {props.letter}
      </div>
    </motion.div>
  )
}
