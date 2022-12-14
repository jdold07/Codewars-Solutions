//+ ====================================================================================================================
//+
//+ 8 kyu - The 'if' function  [ ID: 54147087d5c2ebe4f1000805 ] (the-if-function)
//+ URL: https://www.codewars.com/kata/54147087d5c2ebe4f1000805
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const _if = (bool, func1, func2) => (bool ? func1() : func2())


module.exports = { _if }
