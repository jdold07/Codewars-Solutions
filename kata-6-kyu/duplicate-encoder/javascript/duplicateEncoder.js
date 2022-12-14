//+ ====================================================================================================================
//+
//+ 6 kyu - Duplicate Encoder  [ ID: 54b42f9314d9229fd6000d9c ] (duplicate-encoder)
//+ URL: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
//+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function duplicateEncode(word) {
  let codeWord = ""
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      codeWord += ")"
    } else {
      codeWord += "("
    }
  }
  return codeWord
}

module.exports = { duplicateEncode }
