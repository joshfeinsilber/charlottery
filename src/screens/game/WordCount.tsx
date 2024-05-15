import { useAtomValue } from 'jotai'
import { words } from '../../store/game'

export const WordCount = () => {
  const wordCount = useAtomValue(words).length
  return <div className="absolute top-[24px] z-20 text-sm">Word #{wordCount + 1}</div>
}
