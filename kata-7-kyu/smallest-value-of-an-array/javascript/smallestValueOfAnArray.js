//+ ====================================================================================================================
//+
//+ 7 kyu - Smallest value of an array  [ ID: 544a54fd18b8e06d240005c0 ] (smallest-value-of-an-array)
//+ URL: https://www.codewars.com/kata/544a54fd18b8e06d240005c0
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const min = (arr, toReturn) => {
  const i = arr.indexOf(Math.min(...arr))
  return toReturn === "index" ? i : arr[i]
}

module.exports = { min }
