//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Summation  [ ID: 55d24f55d7dd296eb9000030 ] (grasshopper-summation)
//+ URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

let summation = function (num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

module.exports = { summation }
