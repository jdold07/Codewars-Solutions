// 7 kyu - Exes and Ohs  [ ID: 55908aad6620c066bc00002a  (exes-and-ohs) ]
// URL: https://www.codewars.com/kata/55908aad6620c066bc00002a
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(XO("xo"), true)
    Test.assertEquals(XO("XO"), true)
    Test.assertEquals(XO("xo0"), true)
    Test.assertEquals(XO("xxxoo"), false)
    Test.assertEquals(XO("xxOo"), true)
    Test.assertEquals(XO(""), true, "Empty string contains equal amount of x and o")
    Test.assertEquals(XO("xxxxxoooxooo"), true)
    Test.assertEquals(XO("xxxm"), false)
    Test.assertEquals(XO("ooom"), false)
    Test.assertEquals(XO("Oo"), false)
    Test.assertEquals(XO("xxxxxxxooo"), false)
    Test.assertEquals(XO("abcdefghijklmnopqrstuvwxyz"), true, "Alphabet contains equal amount of x and o")
  })
})
