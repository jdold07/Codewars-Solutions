//+ ====================================================================================================================
//+
//+ 7 kyu - Printer Errors  [ ID: 56541980fa08ab47a0000040 ] (printer-errors)
//+ URL: https://www.codewars.com/kata/56541980fa08ab47a0000040
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function printerError(s) {
  let denom = s.length
  s = s.replace(/[a-m]/g, "")
  return `${s.length}/${denom}`
}

module.exports = { printerError }
