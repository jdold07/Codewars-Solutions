// 6 kyu - Caesar Cipher Encryption - Variation  [ ID: 55ec55323c89fc5fbd000019  (caesar-cipher-encryption-variation) ]
// URL: https://www.codewars.com/kata/55ec55323c89fc5fbd000019
// Category: ALGORITHMS  |  Tags: ALGORITHMS | CRYPTOGRAPHY
// *****************************************************************************
function generateRandomWords() {
  let result = []
  let totalWords = getRandomInt(1, 11)
  let word = null
  for (let i = 0; i < totalWords; i++) {
    word = []
    for (let j = 0; j < getRandomInt(3, 12); j++) {
      word.push(getRandomChar())
    }
    result.push(word.join(""))
  }
  return result.join(" ")
}

function getRandomInt(min, max) {
  // Returns a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomChar() {
  let az = "abcdefghijklmnopqrstuvwxyz"
  return az[getRandomInt(0, az.length - 1)]
}

function solution(phrase, shift) {
  phrase = phrase.split(" ")
  output = ""
  let helper
  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < phrase[i].length; j++) {
      // Applies formula for encrypting chars in Caesar Cipher using ASCII ('a' = 97)
      helper = ((phrase[i].charCodeAt(j) - 97 + shift + i) % 26) + 97
      output += String.fromCharCode(helper)
    }
    output += " "
  }
  return output.trim()
}

describe("Basic Tests", function () {
  Test.assertEquals(caesarEncode("alea iacta est", 3), "dohd megxe jxy")
  Test.assertEquals(caesarEncode("conquer et impera", 13), "pbadhre sh xbetgp")
  Test.assertEquals(
    caesarEncode("fere libenter homines id quod volunt credunt", 7),
    "mlyl tqjmvbmz qxvrwnb sn bfzo haxgzf perqhag"
  )
  Test.assertEquals(caesarEncode("horum omnium fortissimi sunt belgae", 0), "horum pnojvn hqtvkuukok vxqw fipkei")
})

describe("Random Tests", function () {
  for (let i = 0; i < 100; i++) {
    let randomWords = generateRandomWords()
    let randomShift = getRandomInt(1, 1000)
    Test.assertEquals(caesarEncode(randomWords, randomShift), solution(randomWords, randomShift))
  }
})
