//+ ====================================================================================================================
//+
//+ 6 kyu - Does my number look big in this?  [ ID: 5287e858c6b5a9678200083c ] (does-my-number-look-big-in-this)
//+ URL: https://www.codewars.com/kata/5287e858c6b5a9678200083c
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

function narcissistic(value: number): boolean {
  return value == `${value}`.split("").reduce((a, c) => a + Math.pow(+c, `${value}`.length), 0)
}

export { narcissistic }
