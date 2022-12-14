//+ ====================================================================================================================
//+
//+ 6 kyu - Sum of Digits / Digital Root  [ ID: 541c8630095125aba6000c00 ] (sum-of-digits-slash-digital-root)
//+ URL: https://www.codewars.com/kata/541c8630095125aba6000c00
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

function digitalRoot(n) {
  while (n > 9) {
    n = (n + "")
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  }
  return n
}

module.exports = { digitalRoot }
