//+ ====================================================================================================================
//+
//+ 7 kyu - Switcheroo  [ ID: 57f759bb664021a30300007d ] (switcheroo)
//+ URL: https://www.codewars.com/kata/57f759bb664021a30300007d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const switcheroo = (x) =>
  x
    .split("")
    .map((el) => (el === "a" ? "b" : el === "b" ? "a" : el))
    .join("")

module.exports = { switcheroo }
