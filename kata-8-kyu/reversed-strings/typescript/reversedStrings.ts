//+ ====================================================================================================================
//+
//+ 8 kyu - Reversed Strings  [ ID: 5168bb5dfe9a00b126000018 ] (reversed-strings)
//+ URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function solution(str: string): string {
  return [...str].reverse().join("")
}

export { solution }
