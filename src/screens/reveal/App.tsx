import { LetterList } from './LetterList'
import { Light } from './Light'

export const Reveal = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex gap-3">
        <Light enabled={false} />
        <Light enabled={false} />
        <Light enabled={false} />
      </div>
      <h2 className="mb-2 text-3xl font-bold italic">Running today's lottery...</h2>
      <p className="mb-8 text-base opacity-90">The lottery result is the same for everybody!</p>

      <LetterList />
    </div>
  )
}
