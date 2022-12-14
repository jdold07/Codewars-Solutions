//+ ====================================================================================================================
//+
//+ 6 kyu - Encrypt this!  [ ID: 5848565e273af816fb000449 ] (encrypt-this)
//+ URL: https://www.codewars.com/kata/5848565e273af816fb000449
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | REGULAR EXPRESSIONS | ARRAYS | CIPHERS | ALGORITHMS | CRYPTOGRAPHY | SECURITY
//+
//+ ====================================================================================================================

const encryptThis = function (text) {
  const encrypted = []
  const arr = text.split(/\s+/)
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].replace(/(^\w)(\w?)(\w*)(\w$)/, `$1$4$3$2`)
    word = word.replace(word[0], word.charCodeAt(0))
    encrypted.push(word)
  }
  return encrypted.join(" ").trim()
}

module.exports = { encryptThis }
