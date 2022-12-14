//+ ====================================================================================================================
//+
//+ 8 kyu - If you can't sleep, just count sheep!!  [ ID: 5b077ebdaf15be5c7f000077 ] (if-you-cant-sleep-just-count-sheep)
//+ URL: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function countSheep(num: number): string {
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("")
}

export { countSheep }
