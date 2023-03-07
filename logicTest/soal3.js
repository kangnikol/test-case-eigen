function countWordsInArray(input, query) {
  const result = {}

  for (let i = 0; i < query.length; i++) {
    const queryWord = query[i]
    result[queryWord] = 0

    for (let j = 0; j < input.length; j++) {
      const inputWord = input[j]

      if (queryWord === inputWord) {
        result[queryWord]++
      }
    }
  }

  return result
}

const input = ["xc", "dz", "bbb", "dz"]
const query = ["bbb", "ac", "dz"]

console.log(countWordsInArray(input, query))
