/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - Jumping  Number (Special Numbers Series  #4)  [ ID: 5a54e796b3bfa8932c0000ed ] (jumping-number-special-numbers-series-number-4)
//+ URL: https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const jumpingNumber = (n) => {
  for (let i = 1; i < (x = [...`${n}`]).length; i++) {
    if (Math.abs(x[i] - x[i - 1]) !== 1) return "Not!!"
  }
  return "Jumping!!"
}

module.exports = { jumpingNumber }
