//+ ====================================================================================================================
//+
//+ 7 kyu - Remove anchor from URL  [ ID: 51f2b4448cadf20ed0000386 ] (remove-anchor-from-url)
//+ URL: https://www.codewars.com/kata/51f2b4448cadf20ed0000386
//+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function removeUrlAnchor(url) {
  return url.split("#")[0]
}

module.exports = { removeUrlAnchor }
