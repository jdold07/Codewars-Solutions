//+ ====================================================================================================================
//+
//+ 8 kyu - Sleigh Authentication  [ ID: 52adc142b2651f25a8000643 ] (sleigh-authentication)
//+ URL: https://www.codewars.com/kata/52adc142b2651f25a8000643
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!"
}


module.exports = { Sleigh }
