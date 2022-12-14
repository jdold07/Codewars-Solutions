//+ ====================================================================================================================
//+
//+ 8 kyu - Removing Elements  [ ID: 5769b3802ae6f8e4890009d2 ] (removing-elements)
//+ URL: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
//+ Category: REFERENCE  |  Tags: LISTS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function removeEveryOther(arr) {
  return arr.filter((_, i) => (i + 1) % 2 !== 0)
}

module.exports = { removeEveryOther }
