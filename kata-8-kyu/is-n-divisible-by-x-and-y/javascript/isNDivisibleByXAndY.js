//+ ====================================================================================================================
//+
//+ 8 kyu - Is n divisible by x and y?  [ ID: 5545f109004975ea66000086 ] (is-n-divisible-by-x-and-y)
//+ URL: https://www.codewars.com/kata/5545f109004975ea66000086
//+ Category: REFACTORING  |  Tags: REFACTORING
//+
//+ ====================================================================================================================

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

module.exports = { isDivisible }
