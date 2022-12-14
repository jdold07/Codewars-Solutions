//+ ====================================================================================================================
//+
//+ 8 kyu - ASCII Total  [ ID: 572b6b2772a38bc1e700007a ] (ascii-total)
//+ URL: https://www.codewars.com/kata/572b6b2772a38bc1e700007a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const uniTotal = (string) => string.split("").reduce((a, b) => a + b.charCodeAt(), 0)

module.exports = { uniTotal }
