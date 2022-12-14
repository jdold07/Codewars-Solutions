//+ ====================================================================================================================
//+
//+ 6 kyu - Duplicate Encoder  [ ID: 54b42f9314d9229fd6000d9c ] (duplicate-encoder)
//+ URL: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
//+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function duplicateEncode(word: string) {
  return [...word.toLowerCase()].map((v, _, a) => (a.indexOf(v) === a.lastIndexOf(v) ? "(" : ")")).join("")
}

export { duplicateEncode }
