//+ ====================================================================================================================
//+
//+ 6 kyu - Stop gninnipS My sdroW!  [ ID: 5264d2b162488dc400000001 ] (stop-gninnips-my-sdrow)
//+ URL: https://www.codewars.com/kata/5264d2b162488dc400000001
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

function spinWords(words: string): string {
  return words.replace(/\b\w{5,}\b/g, (v) => [...v].reverse().join(""))
}

export { spinWords }
