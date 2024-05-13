import { useAtomValue } from 'jotai'
import { words } from '../../store/game'

export const Words = () => {
  const wordsUsed: string[] = useAtomValue(words)

  return (
    <div className="card mt-4 w-full select-text bg-base-100 text-center shadow-xl">
      <div className="card-body flex flex-col items-center">
        <ul className="text-base">
          {wordsUsed.map((word, index) => (
            <li key={word + index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
