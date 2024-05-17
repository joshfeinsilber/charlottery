export const getLettersWithPoints = (options: {
  letters: string[]
  currentStartLetterIndex: number
  currentWord: string
}): Array<string> => {
  let letters = options.letters.slice(options.currentStartLetterIndex)
  if (!letters.length || !options.currentWord || options.currentWord.length === 0) {
    return []
  }

  const lettersWithPoints: string[] = []
  let word = options.currentWord

  // Word must start with the first letter in the list of letters
  if (!word.startsWith(letters[0])) {
    return []
  }

  // Go through the entire word letter by letter
  // If the letter is the next letter we need to get a point, add it to the list of letters to gain a point and then remove it from the list of letters so that we begin to look for the next one!
  while (word.length && letters.length) {
    if (letters[0] === word[0]) {
      lettersWithPoints.push(letters[0])
      letters = letters.slice(1)
    }
    word = word.slice(1)
  }

  return lettersWithPoints
}

/**
 * A helpful function for actual components to digest `getLettersWithPoints` -- since we don't want
 * double letters to both be marked as points, we just give the credit to the first letter that matches
 */
export const getLetterIndexesWithPoints = (options: {
  letters: string[]
  currentStartLetterIndex: number
  currentWord: string
}): Array<number> => {
  const lettersWithPoints = getLettersWithPoints(options)
  let lettersWithPointsIndex = 0

  const indexesWithPoints: number[] = []

  options.currentWord.split('').forEach((letter, index) => {
    const letterToMatch = lettersWithPoints[lettersWithPointsIndex]
    if (letter === letterToMatch) {
      indexesWithPoints.push(index)
      lettersWithPointsIndex++
    }
  })

  return indexesWithPoints
}
