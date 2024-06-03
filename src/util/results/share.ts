import copy from 'copy-to-clipboard'
import { PUZZLE_NUMBER } from '../../const/puzzleNumber'
import { words } from '../../store/game'
import { store } from '../../store/store'
import { toast } from 'sonner'
import { encodeResults } from './encodedInfo'
import { getMedal } from './getMedal'

const colors = ['🟦', '🟧', '🟪', '🟨', '🟩', '🟫', '⬜']

export const resultText = () => {
  const wordsUsed = store.get(words)
  const medal = getMedal(wordsUsed.length)

  let text = `🎰 Charlottery No. ${PUZZLE_NUMBER}
✅ Completed in ${wordsUsed.length} words
${medal.emoji} ${medal.name} Medal
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

export const resultLinkText = (data: { words: string[]; letters: string[] }) => {
  return `🔗 View my Charlottery No. ${PUZZLE_NUMBER} words: ${window.location.origin}?results=${encodeResults(data)}`
}

export const shareResult = (text: string) => {
  if (!navigator.share) {
    toast.success('Copied to clipboard!')
    copy(text)
  } else {
    navigator.share({
      title: `Charlottery No. ${PUZZLE_NUMBER}`,
      text: text
    })
  }
}
