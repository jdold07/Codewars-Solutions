// 7 kyu - Incrementer  [ ID: 590e03aef55cab099a0002e8  (incrementer) ]
// URL: https://www.codewars.com/kata/590e03aef55cab099a0002e8
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
incrementer = (nums) => nums.map((v, i) => (++i + v) % 10)
// *****************************************************************************
// *****************************************************************************
incrementer = (nums) => nums.map((v, i) => +(++i + v + "").slice(-1))
