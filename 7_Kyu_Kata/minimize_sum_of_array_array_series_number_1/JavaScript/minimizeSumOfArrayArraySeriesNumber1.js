// 7 kyu - Minimize  Sum Of Array (Array Series #1)     [ ID: 5a523566b3bfa84c2e00010b  (minimize-sum-of-array-array-series-number-1) ]
// URL: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
// Category: undefined  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const minSum = (arr) =>
  [...Array(arr.length / 2)].reduce(
    (a, c) => a + arr.splice(arr.indexOf(Math.max(...arr)), 1) * arr.splice(arr.indexOf(Math.min(...arr)), 1),
    0
  )
