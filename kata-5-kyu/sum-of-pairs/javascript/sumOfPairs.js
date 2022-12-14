/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 5 kyu - Sum of Pairs  [ ID: 54d81488b981293527000c8f ] (sum-of-pairs)
//+ URL: https://www.codewars.com/kata/54d81488b981293527000c8f
//+ Category: REFERENCE  |  Tags: MEMOIZATION | FUNDAMENTALS | PERFORMANCE
//+
//+ ====================================================================================================================

const sumPairs = (arr, n) => {
  const seenIt = new Map()
  let stop = arr.length
  let res = undefined
  for (let i = 0; i < stop; i++) {
    if (seenIt.has(arr[i])) continue
    seenIt.set(arr[i], i)
    if ((x = arr.indexOf(n - arr[i], i + 1)) !== -1 && x < stop) {
      stop = x
      res = [arr[i], n - arr[i]]
    }
  }
  return res
}

module.exports = { sumPairs }
