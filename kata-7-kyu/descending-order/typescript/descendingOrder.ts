//+ ====================================================================================================================
//+
//+ 7 kyu - Descending Order  [ ID: 5467e4d82edf8bbf40000155 ] (descending-order)
//+ URL: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function descendingOrder(n: number): number {
  return +[...`${n}`].sort((a, b) => +b - +a).join("")
}


export { descendingOrder }
