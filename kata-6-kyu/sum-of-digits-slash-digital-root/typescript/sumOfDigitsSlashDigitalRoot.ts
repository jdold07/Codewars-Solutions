//+ ====================================================================================================================
//+
//+ 6 kyu - Sum of Digits / Digital Root  [ ID: 541c8630095125aba6000c00 ] (sum-of-digits-slash-digital-root)
//+ URL: https://www.codewars.com/kata/541c8630095125aba6000c00
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

function digitalRoot(n: number): number {
  return n < 10 ? n : digitalRoot([...`${n}`].reduce((a, c) => a + +c, 0))
}

export { digitalRoot }
