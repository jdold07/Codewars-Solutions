//+ ====================================================================================================================
//+
//+ 8 kyu - Multiple of  index  [ ID: 5a34b80155519e1a00000009 ] (multiple-of-index)
//+ URL: https://www.codewars.com/kata/5a34b80155519e1a00000009
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

function multipleOfIndex(array: number[]): number[] {
  return array.filter((v, i) => i !== 0 && !((v / i) % 1))
}

export { multipleOfIndex }
