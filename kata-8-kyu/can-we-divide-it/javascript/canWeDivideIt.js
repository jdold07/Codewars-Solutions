//+ ====================================================================================================================
//+
//+ 8 kyu - Can we divide it?  [ ID: 5a2b703dc5e2845c0900005a ] (can-we-divide-it)
//+ URL: https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0
}

module.exports = { isDivideBy }
