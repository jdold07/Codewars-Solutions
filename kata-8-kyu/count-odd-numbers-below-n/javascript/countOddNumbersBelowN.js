//+ ====================================================================================================================
//+
//+ 8 kyu - Count Odd Numbers below n  [ ID: 59342039eb450e39970000a6 ] (count-odd-numbers-below-n)
//+ URL: https://www.codewars.com/kata/59342039eb450e39970000a6
//+ Category: GAMES  |  Tags: PERFORMANCE | ALGORITHMS
//+
//+ ====================================================================================================================

const oddCount = (n) => (n > 1 ? Math.ceil((n - 1) / 2) : 0)

module.exports = { oddCount }
