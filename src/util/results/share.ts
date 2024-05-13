import copy from 'copy-to-clipboard'
import { PUZZLE_NUMBER } from '../../const/puzzleNumber'
import { words } from '../../store/game'
import { store } from '../../store/store'
import { toast } from 'sonner'

const colors = ['🟦', '🟧', '🟪', '🟨', '🟩', '🟫', '⬜']

const resultText = () => {
  const wordsUsed: string[] = store.get(words)

  let text = `🎰 Charlottery No. ${PUZZLE_NUMBER}
✅ Completed in ${wordsUsed.length} words
`

  let colorIndex = 0

  wordsUsed.forEach((word) => {
    const color = colors[colorIndex]
    colorIndex++
    if (colorIndex >= colors.length) {
      colorIndex = 0
    }

    text += `
`
    word.split('').forEach(() => {
      text += `${color}`
    })
  })

  return text
}

export const shareResult = () => {
  if (!navigator.share) {
    toast.success('Copied to clipboard!')
    copy(resultText())
  } else {
    navigator.share({
      title: `Charlottery No. ${PUZZLE_NUMBER}`,
      text: resultText()
    })
  }
}
