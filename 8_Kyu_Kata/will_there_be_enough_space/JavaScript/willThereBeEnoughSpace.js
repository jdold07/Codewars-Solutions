// 8 kyu - Will there be enough space?  [ ID: 5875b200d520904a04000003  (will-there-be-enough-space) ]
// URL: https://www.codewars.com/kata/5875b200d520904a04000003
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function enough(cap, on, wait) {
  return cap - on - wait >= 0 ? 0 : -(cap - on - wait)
}
