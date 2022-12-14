//+ ====================================================================================================================
//+
//+ 7 kyu - The old switcheroo 2  [ ID: 55d6a0e4ededb894be000005 ] (the-old-switcheroo-2)
//+ URL: https://www.codewars.com/kata/55d6a0e4ededb894be000005
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const encode = (str) => [...str].reduce((res, c) => res + (/[a-z]/i.test(c) ? c.toLowerCase().charCodeAt(0) - 96 : c), "")

module.exports = { encode }
