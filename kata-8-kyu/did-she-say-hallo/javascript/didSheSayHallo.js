//+ ====================================================================================================================
//+
//+ 8 kyu - Did she say hallo?  [ ID: 56a4addbfd4a55694100001f ] (did-she-say-hallo)
//+ URL: https://www.codewars.com/kata/56a4addbfd4a55694100001f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function validateHello(greetings) {
  const res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
  return res
}

module.exports = { validateHello }
