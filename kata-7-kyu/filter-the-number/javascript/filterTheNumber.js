//+ ====================================================================================================================
//+
//+ 7 kyu - Filter the number  [ ID: 55b051fac50a3292a9000025 ] (filter-the-number)
//+ URL: https://www.codewars.com/kata/55b051fac50a3292a9000025
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const filterString = (value) => +value.replace(/\D/g, "")

module.exports = { filterString }
