//+ ====================================================================================================================
//+
//+ 7 kyu - esreveR  [ ID: 5413759479ba273f8100003d ] (esrever)
//+ URL: https://www.codewars.com/kata/5413759479ba273f8100003d
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const reverse = (array) => array.map((_, i) => array[array.length - i - 1])

module.exports = { reverse }
