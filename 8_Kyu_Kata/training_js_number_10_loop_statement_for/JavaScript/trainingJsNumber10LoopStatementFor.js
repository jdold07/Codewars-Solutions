// 8 kyu - Training JS #10: loop statement --for  [ ID: 5721a78c283129e416000999  (training-js-number-10-loop-statement-for) ]
// URL: https://www.codewars.com/kata/5721a78c283129e416000999
// Category: undefined  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
function pickIt(arr) {
    const odd = [],
      even = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    return [odd, even]
  }
