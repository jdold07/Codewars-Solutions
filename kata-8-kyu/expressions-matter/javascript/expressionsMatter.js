//+ ====================================================================================================================
//+
//+ 8 kyu - Expressions Matter   [ ID: 5ae62fcf252e66d44d00008e ] (expressions-matter)
//+ URL: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
//+ Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function expressionMatter(a, b, c) {
  let x = a * b * c
  if (a * (b + c) > x) x = a * (b + c)
  if ((a + b) * c > x) x = (a + b) * c
  if (a + b + c > x) x = a + b + c
  if (a + b * c > x) x = a + b * c
  if (a * b + c > x) x = a * b + c
  return x
}

module.exports = { expressionMatter }
