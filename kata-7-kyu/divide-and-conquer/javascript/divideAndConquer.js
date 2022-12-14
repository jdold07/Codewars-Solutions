//+ ====================================================================================================================
//+
//+ 7 kyu - Divide and Conquer  [ ID: 57eaec5608fed543d6000021 ] (divide-and-conquer)
//+ URL: https://www.codewars.com/kata/57eaec5608fed543d6000021
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

const divCon = (x) =>
  x.reduce((a, b) => (Number.isInteger(b) ? a + b : a), 0) -
  x.reduce((a, b) => (!Number.isInteger(b) ? a + Number(b) : a), 0)

module.exports = { divCon }
