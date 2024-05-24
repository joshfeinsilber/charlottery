import { wordsByStartingLetter } from '../../const/wordList'

/**
 * This is a Node on a tree to a solution.
 * It contains the word, the path (prior words to get here), and the starting index of the NEXT word to come after this in the letters array.
 */
class WordNode {
  word: string = ''
  path: string[] = []
  startIndex: number = 0
  children: WordNode[] = []

  constructor(options: { word: string; path: string[]; startIndex: number }) {
    this.word = options.word
    this.path = options.path
    this.startIndex = options.startIndex
    this.children = []
  }
}

export const findWordsMatchingOrder = (
  letters: string[],
  options?: { maxLettersPerWord?: number }
) => {
  const startingLetter = letters[0]

  const matchingWords: Array<{ word: string; characterCount: number }> = []

  // Add one letter at a time...
  for (let i = 0; i < letters.length; i++) {
    // Get the array of letters we want to check
    const lettersToCheck = letters.slice(0, i + 1)

    // But we want to avoid the next letter if there is one, as we'll check that in the next iteration
    const letterToAvoid = letters[i + 1]

    // Make a REGEX that finds words in the order we currently have, while avoiding the next letter at the end
    let regexString = '^' + lettersToCheck.join('.*')
    if (letterToAvoid) {
      regexString += `(?!.*${letterToAvoid})`
    }

    const regex = new RegExp(regexString)

    // Find one word that matches the critera. If we cannot find one, then there is no need to keep looking for longer words
    const matchingWord = wordsByStartingLetter[startingLetter].find((word) => {
      if (options?.maxLettersPerWord && word.length > options.maxLettersPerWord) {
        return false
      }

      return regex.test(word)
    })
    if (!matchingWord) {
      break
    }

    // Add the word to the list of matching words along with the number of characters with points it has
    matchingWords.push({
      word: matchingWord,
      characterCount: i + 1
    })
  }

  return matchingWords
}

const solutionCache = new Map<string, string[]>()

export const generateSolution = (letters: string[]) => {
  const cacheKey = letters.join('')
  if (solutionCache.has(cacheKey)) {
    return solutionCache.get(cacheKey)!
  }

  // Create our root node which is an empty word at the start of the letters
  const root = new WordNode({
    word: '',
    path: [],
    startIndex: 0
  })

  const queue: WordNode[] = [root]
  const visitedIndexes = new Set<number>()
  const solution: string[] = []

  // Create and traverse the tree to find a solution...
  while (queue.length) {
    const node = queue.shift()!

    // This is the index of the next letter we need to find
    const startIndex = node.startIndex

    // If our next letter is the last letter in the array, then we have found a solution
    if (startIndex >= letters.length) {
      solution.push(...node.path)
      solution.push(node.word)
      break
    }

    // If we've already checked for words at this place in the list, then skip it. No need to re-do work!
    if (visitedIndexes.has(startIndex)) {
      continue
    }
    visitedIndexes.add(startIndex)

    const words = findWordsMatchingOrder(letters.slice(startIndex))

    // For each word that matches the order, create a new node and add it to the queue
    for (const matchingWord of words) {
      const newStartingIndex = node.startIndex + matchingWord.characterCount

      const child = new WordNode({
        word: matchingWord.word,
        path: node.word ? [...node.path, node.word] : node.path,
        startIndex: newStartingIndex
      })
      node.children.push(child)
      queue.push(child)
    }
  }

  solutionCache.set(letters.join(''), solution)

  return solution
}
