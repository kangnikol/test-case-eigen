function reverseWordWithNumber(word) {
  const number = word.slice(-1)
  const reversed = word.slice(0, -1).split("").reverse().join("")
  return reversed + number
}

console.log(reverseWordWithNumber("NEGIE1"))
