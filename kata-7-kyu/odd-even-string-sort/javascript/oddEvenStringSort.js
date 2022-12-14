//+ ====================================================================================================================
//+
//+ 7 kyu - Odd-Even String Sort  [ ID: 580755730b5a77650500010c ] (odd-even-string-sort)
//+ URL: https://www.codewars.com/kata/580755730b5a77650500010c
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS | SORTING
//+
//+ ====================================================================================================================

const sortMyString = (s) => `${[...s].filter((_, i) => !(i % 2)).join("")} ${[...s].filter((_, i) => i % 2).join("")}`

module.exports = { sortMyString }
