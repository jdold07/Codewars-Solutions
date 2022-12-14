//+ ====================================================================================================================
//+
//+ 8 kyu - Classy Extentions  [ ID: 55a14aa4817efe41c20000bc ] (classy-extentions)
//+ URL: https://www.codewars.com/kata/55a14aa4817efe41c20000bc
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return this.name + " makes a noise."
  }
}
const animalfreezer = Object.freeze(Animal)

//+ ====================================================================================================================
//+ ====================================================================================================================

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

module.exports = { Cat, Animal, animalfreezer }
