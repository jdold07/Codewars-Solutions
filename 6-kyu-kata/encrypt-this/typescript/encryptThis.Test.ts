// 6 kyu - Encrypt this!  [ ID: 5848565e273af816fb000449  (encrypt-this) ]
// URL: https://www.codewars.com/kata/5848565e273af816fb000449
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | REGULAR EXPRESSIONS | ARRAYS | CIPHERS | ALGORITHMS | CRYPTOGRAPHY | SECURITY
// *****************************************************************************
// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai"

import { encryptThis } from "./solution"

describe("Fixed Tests", function () {
  it("should work with fixed tests", function () {
    assert.strictEqual(encryptThis(""), "")
    assert.strictEqual(encryptThis("A"), "65")
    assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
    assert.strictEqual(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")
    assert.strictEqual(
      encryptThis("The less he spoke the more he heard"),
      "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
    )
    assert.strictEqual(
      encryptThis("Why can we not all be like that wise old bird"),
      "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
    )
    assert.strictEqual(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")
  })
})

var randomTexts = function (count: number): Array<string> {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var maxIndex = possible.length - 1
  var texts = []
  var randomWord = function (): string {
    var rw = []
    for (var i = 0; i < Math.max(Math.floor(Math.random() * 20), 1); i++) {
      rw.push(possible[Math.floor(Math.random() * maxIndex)])
    }
    return rw.join("")
  }

  for (var t = 0; t < count; t++) {
    var result = []
    for (var w = 0; w <= Math.floor(Math.random() * 20); w++) {
      result.push(randomWord())
    }
    texts.push(result.join(" "))
  }
  return texts
}

describe("Random Tests", function () {
  it("should work with random tests", function () {
    const solution = (str: string): string =>
      str
        .split(" ")
        .map((word) =>
          word.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`).replace(/^\w/, (letter) => letter.charCodeAt(0).toFixed(0))
        )
        .join(" ")
    randomTexts(100).forEach((text) => {
      assert.strictEqual(encryptThis(text), solution(text))
    })
  })
})
