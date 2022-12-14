//+ ====================================================================================================================
//+
//+ 8 kyu - validate code with simple regex  [ ID: 56a25ba95df27b7743000016 ] (validate-code-with-simple-regex)
//+ URL: https://www.codewars.com/kata/56a25ba95df27b7743000016
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function validateCode(code) {
  return /^[123]\d+$/.test(code)
}


module.exports = { validateCode }
