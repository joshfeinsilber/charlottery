import { Logo } from '../../components/Logo'
import { PUZZLE_NUMBER } from '../../const/puzzleNumber'
import { fullPhrase } from '../../util/lottery/phrases'

export const Intro = () => {
  const today = new Date()
  const month = today.toLocaleString('default', { month: 'long' })
  const dayOfMonth = today.getDate()
  const year = today.getFullYear()

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-5xl">
        <Logo />
      </h2>
      <p className="mt-4 text-xl italic">Build words with every character in the alphabet.</p>
      <button className="btn btn-secondary btn-block mt-7">How To Play</button>
      <button className="btn btn-primary btn-lg btn-block mt-2">Play</button>

      <p className="mt-8 text-xs font-bold">
        {month} {dayOfMonth}, {year}
      </p>
      <p className="text-xs">No. {PUZZLE_NUMBER}</p>
      <p className="text-xs">{fullPhrase()}</p>
    </div>
  )
}
