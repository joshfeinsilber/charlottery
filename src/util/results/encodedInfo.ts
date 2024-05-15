/**
 * Converts words and letter data into a URL-friendly string.
 *
 * The format is the letters followed by a dash, then the words separated by dashes. Each letter in the words is replaced with the next letter in the letters array. If the letter is the last letter in the array, it wraps around to the first letter.
 */

export const encodeResults = (data: { letters: string[]; words: string[] }) => {
  const modifiedWords = data.words.map((word) => {
    return word
      .split('')
      .map((letter) => {
        let index = data.letters.indexOf(letter) + 1
        if (!data.letters[index]) {
          index = 0
        }

        return data.letters[index]
      })
      .join('')
  })

  let text = data.letters.join('')
  text += '-'
  text += modifiedWords.join('-')

  return encodeURIComponent(text)
}

export const decodeResults = (encoded: string) => {
  const decoded = decodeURIComponent(encoded)

  const split = decoded.split('-')
  const letters = split[0].split('')
  const words = split.slice(1).map((word) => {
    return word
      .split('')
      .map((letter) => {
        let index = letters.indexOf(letter) - 1
        if (index < 0) {
          index = letters.length - 1
        }

        return letters[index]
      })
      .join('')
  })

  if (!letters?.length || !words?.length) {
    return null
  }

  return {
    letters,
    words
  }
}
