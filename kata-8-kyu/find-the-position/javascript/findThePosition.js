//+ ====================================================================================================================
//+
//+ 8 kyu - Find the position!  [ ID: 5808e2006b65bff35500008f ] (find-the-position)
//+ URL: https://www.codewars.com/kata/5808e2006b65bff35500008f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const position = (letter) => `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`

module.exports = { position }
