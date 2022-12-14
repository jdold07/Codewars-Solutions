//+ ====================================================================================================================
//+
//+ 7 kyu - Array Leaders (Array Series #3)  [ ID: 5a651865fd56cb55760000e0 ] (array-leaders-array-series-number-3)
//+ URL: https://www.codewars.com/kata/5a651865fd56cb55760000e0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const arrayLeaders = (numbers) => numbers.filter((el, i) => el > numbers.slice(i + 1).reduce((a, b) => a + b, 0))

module.exports = { arrayLeaders }
