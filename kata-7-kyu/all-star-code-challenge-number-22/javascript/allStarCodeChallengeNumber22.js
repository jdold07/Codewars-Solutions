//+ ====================================================================================================================
//+
//+ 7 kyu - All Star Code Challenge #22  [ ID: 5865cff66b5699883f0001aa ] (all-star-code-challenge-number-22)
//+ URL: https://www.codewars.com/kata/5865cff66b5699883f0001aa
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const toTime = (seconds) => `${Math.floor(seconds / 3600)} hour(s) and ${Math.floor((seconds % 3600) / 60)} minute(s)`

module.exports = { toTime }
