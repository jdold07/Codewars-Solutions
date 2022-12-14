//+ ====================================================================================================================
//+
//+ 7 kyu - Strong Number (Special Numbers Series #2)    [ ID: 5a4d303f880385399b000001 ] (strong-number-special-numbers-series-number-2)
//+ URL: https://www.codewars.com/kata/5a4d303f880385399b000001
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const strong = (n) => {
  const x = (m) => (m < 2 ? 1 : m * x(m - 1))
  return n === [...("" + n)].reduce((a, c) => a + x(c), 0) ? "STRONG!!!!" : "Not Strong !!"
}

module.exports = { strong }
