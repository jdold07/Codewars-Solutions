//+ ====================================================================================================================
//+
//+ 7 kyu - Vowel Count  [ ID: 54ff3102c1bad923760001f3 ] (vowel-count)
//+ URL: https://www.codewars.com/kata/54ff3102c1bad923760001f3
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const getCount = (str) => str.length - str.replace(/[aeiou]/g, "").length

module.exports = { getCount }
