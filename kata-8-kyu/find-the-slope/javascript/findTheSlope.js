//+ ====================================================================================================================
//+
//+ 8 kyu - Find the Slope  [ ID: 55a75e2d0803fea18f00009d ] (find-the-slope)
//+ URL: https://www.codewars.com/kata/55a75e2d0803fea18f00009d
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS | ALGEBRA
//+
//+ ====================================================================================================================

const slope = ([a, b, c, d]) => (!(c - a) ? "undefined" : (d - b) / (c - a)) + ""

module.exports = { slope }
