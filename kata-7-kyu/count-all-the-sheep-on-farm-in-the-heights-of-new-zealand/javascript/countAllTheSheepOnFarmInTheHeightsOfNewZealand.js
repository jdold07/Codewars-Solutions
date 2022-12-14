//+ ====================================================================================================================
//+
//+ 7 kyu - Count all the sheep on farm in the heights of New Zealand  [ ID: 58e0f0bf92d04ccf0a000010 ] (count-all-the-sheep-on-farm-in-the-heights-of-new-zealand)
//+ URL: https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS | ALGEBRA
//+
//+ ====================================================================================================================

const lostSheep = (friday, saturday, total) => [...friday, ...saturday].reduce((a, c) => a - c, total)

module.exports = { lostSheep }
