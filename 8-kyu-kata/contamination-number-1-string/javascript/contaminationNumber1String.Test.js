// 8 kyu - Contamination #1 -String-  [ ID: 596fba44963025c878000039  (contamination-number-1-string) ]
// URL: https://www.codewars.com/kata/596fba44963025c878000039
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Basic tests", () => {
  Test.assertEquals(contamination("abc", "z"), "zzz")
  Test.assertEquals(contamination("", "z"), "", "Empty text")
  Test.assertEquals(contamination("abc", ""), "", "Empty char")
  Test.assertEquals(contamination("_3ebzgh4", "&"), "&&&&&&&&")
  Test.assertEquals(contamination("//case", " "), "      ")
})

describe("Random tests", () => {
  let rnd = (_) => ~~(Math.random() * 96) + 32,
    rndChr = (_) => String.fromCharCode(rnd())

  for (let i = 0; i < 100; i++) {
    let chr = rndChr(),
      exp = chr.repeat(rnd() >> 1),
      txt = [...exp].map(rndChr).join``
    if (rnd() < 50) exp = chr < "a" ? (chr = "") : (txt = "")
    Test.assertEquals(contamination(txt, chr), exp)
  }
})
