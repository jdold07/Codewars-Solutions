//+ ====================================================================================================================
//+
//+ 7 kyu - Special  Number (Special Numbers Series  #5)  [ ID: 5a55f04be6be383a50000187 ] (special-number-special-numbers-series-number-5)
//+ URL: https://www.codewars.com/kata/5a55f04be6be383a50000187
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const specialNumber = (n) => (!`${n}`.replace(/[0-5]/g, "").length ? "Special!!" : "NOT!!")

module.exports = { specialNumber }
