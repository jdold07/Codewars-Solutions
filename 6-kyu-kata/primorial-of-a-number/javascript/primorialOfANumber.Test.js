// 6 kyu - Primorial Of  a Number   [ ID: 5a99a03e4a6b34bb3c000124  (primorial-of-a-number) ]
// URL: https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | NUMBER THEORY
// *****************************************************************************
describe("Basic tests", () => {
  Test.assertEquals(numPrimorial(3), 30)
  Test.assertEquals(numPrimorial(4), 210)
  Test.assertEquals(numPrimorial(5), 2310)
  Test.assertEquals(numPrimorial(8), 9699690)
  Test.assertEquals(numPrimorial(9), 223092870)
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) =>
    [
      1,
      2,
      6,
      30,
      210,
      2310,
      30030,
      510510,
      9699690,
      223092870,
      6469693230,
      200560490130,
      7420738134810,
      304250263527210,
      13082761331670030,
      614889782588491410
    ][n]

  for (let i = 0; i < 40; i++) {
    const n = randint(1, 15)
    it(`Testing for ${n}`, () => {
      Test.assertEquals(numPrimorial(n), sol(n), "It should work for random inputs too")
    })
  }
})
