//+ ====================================================================================================================
//+
//+ 8 kyu - Remove exclamation marks  [ ID: 57a0885cbb9944e24c00008e ] (remove-exclamation-marks)
//+ URL: https://www.codewars.com/kata/57a0885cbb9944e24c00008e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function removeExclamationMarks(s) {
  return s.replace(/!/g, "")
}

module.exports = { removeExclamationMarks }
