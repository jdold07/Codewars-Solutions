//+ ====================================================================================================================
//+
//+ 6 kyu - Does my number look big in this?  [ ID: 5287e858c6b5a9678200083c ] (does-my-number-look-big-in-this)
//+ URL: https://www.codewars.com/kata/5287e858c6b5a9678200083c
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

const narcissistic = (value) =>
  value ===
  value
    .toString()
    .split("")
    .reduce((a, b) => a + b ** value.toString().length, 0)

module.exports = { narcissistic }
