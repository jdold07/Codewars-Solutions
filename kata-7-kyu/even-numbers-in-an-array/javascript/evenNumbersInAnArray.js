//+ ====================================================================================================================
//+
//+ 7 kyu - Even numbers in an array  [ ID: 5a431c0de1ce0ec33a00000c ] (even-numbers-in-an-array)
//+ URL: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const evenNumbers = (array, number) => array.filter((el) => !(el % 2)).slice(-number)

module.exports = { evenNumbers }
