/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - Digital cypher vol 2  [ ID: 592edfda5be407b9640000b2 ] (digital-cypher-vol-2)
//+ URL: https://www.codewars.com/kata/592edfda5be407b9640000b2
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
//+
//+ ====================================================================================================================

const decode = (code, n) =>
  code.reduce((a, c, i) => a + "abcdefghijklmnopqrstuvwxyz"[c - 1 - (x = [...`${n}`])[i % x.length]], "")

module.exports = { decode }
