//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of all arguments  [ ID: 540c33513b6532cd58000259 ] (sum-of-all-arguments)
//+ URL: https://www.codewars.com/kata/540c33513b6532cd58000259
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const sum = (...nums) => nums.reduce((a, c) => a + c, 0)

module.exports = { sum }
