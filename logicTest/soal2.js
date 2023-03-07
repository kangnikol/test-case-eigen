function findLongestWord(sentence) {
  const words = sentence.split(" ")
  let maxLength = 0
  let longestWord = ""

  for (let i = 0; i < words.length; i++) {
    const currentLength = words[i].length
    if (currentLength > maxLength) {
      maxLength = currentLength
      longestWord = words[i]
    }
  }
  return longestWord
}

console.log(findLongestWord("Saya sangat senang mengerjakan soal algoritma"))
