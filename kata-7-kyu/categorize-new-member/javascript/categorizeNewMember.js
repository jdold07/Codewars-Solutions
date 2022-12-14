//+ ====================================================================================================================
//+
//+ 7 kyu - Categorize New Member  [ ID: 5502c9e7b3216ec63c0001aa ] (categorize-new-member)
//+ URL: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const openOrSenior = (data) => data.map(([a, h]) => (a >= 55 && h > 7 ? "Senior" : "Open"))

// =====================================================================================================================
// =====================================================================================================================

const openOrSenior2 = (data) => data.map((x) => (x[0] > 54 && x[1] > 7 ? "Senior" : "Open"))

module.exports = { openOrSenior, openOrSenior2 }
