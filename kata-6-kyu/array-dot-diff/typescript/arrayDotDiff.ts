//+ ====================================================================================================================
//+
//+ 6 kyu - Array.diff  [ ID: 523f5d21c841566fde000009 ] (array-dot-diff)
//+ URL: https://www.codewars.com/kata/523f5d21c841566fde000009
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS | ALGORITHMS
//+
//+ ====================================================================================================================

function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((v) => !b.includes(v))
}

export { arrayDiff }
