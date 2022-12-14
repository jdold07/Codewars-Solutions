//+ ====================================================================================================================
//+
//+ 7 kyu - Product  Array (Array Series #5)  [ ID: 5a905c2157c562994900009d ] (product-array-array-series-number-5)
//+ URL: https://www.codewars.com/kata/5a905c2157c562994900009d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const productArray = (n) => n.map((_, i) => n.filter((_, fI) => fI !== i).reduce((a, c) => a * c))

module.exports = { productArray }
