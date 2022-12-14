//+ ====================================================================================================================
//+
//+ 8 kyu - Reversed sequence   [ ID: 5a00e05cc374cb34d100000d ] (reversed-sequence)
//+ URL: https://www.codewars.com/kata/5a00e05cc374cb34d100000d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const reverseSeq = (n) =>
  Array(n)
    .fill()
    .map((_, i) => n - i)

module.exports = { reverseSeq }
