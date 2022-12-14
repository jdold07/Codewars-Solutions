//+ ====================================================================================================================
//+
//+ 8 kyu - Duck Duck Goose  [ ID: 582e0e592029ea10530009ce ] (duck-duck-goose)
//+ URL: https://www.codewars.com/kata/582e0e592029ea10530009ce
//+ Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const duckDuckGoose = (players, goose) => players[goose > players.length ? (goose - 1) % players.length : goose - 1].name

module.exports = { duckDuckGoose }
