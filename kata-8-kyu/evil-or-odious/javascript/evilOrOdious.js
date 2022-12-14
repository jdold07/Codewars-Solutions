//+ ====================================================================================================================
//+
//+ 8 kyu - Evil or Odious  [ ID: 56fcfad9c7e1fa2472000034 ] (evil-or-odious)
//+ URL: https://www.codewars.com/kata/56fcfad9c7e1fa2472000034
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const evil = (n) => ([...n.toString(2)].filter((el) => +el).length % 2 ? "It's Odious!" : "It's Evil!")

module.exports = { evil }
