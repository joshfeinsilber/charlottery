import JSURL from 'jsurl'

export const encodeResults = (data: { letters: string[]; words: string[] }) => {
  const encodedWords = data.words.map((word) => {
    return word.split('').map((letter) => {
      return data.letters.indexOf(letter)
    })
  })

  // Encode JSON into url friendly
  return JSURL.stringify({
    w: encodedWords,
    l: data.letters
  })
}

export const decodeResults = (encoded: string) => {
  const decoded = JSURL.parse<{ w: number[][]; l: string[] }>(decodeURIComponent(encoded))

  const words = decoded.w.map((word: number[]) => {
    return word
      .map((index) => {
        return decoded.l[index]
      })
      .join('')
  })

  return {
    letters: decoded.l,
    words
  }
}
