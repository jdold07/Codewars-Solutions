//+ ====================================================================================================================
//+
//+ 8 kyu - Convert number to reversed array of digits  [ ID: 5583090cbe83f4fd8c000051 ] (convert-number-to-reversed-array-of-digits)
//+ URL: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function digitize(n) {
  return String(n)
    .split("")
    .reverse()
    .map((x) => +x)
}

module.exports = { digitize }
