// [object Object] - Stop gninnipS My sdroW!  [ ID: 5264d2b162488dc400000001  (stop-gninnips-my-sdrow) ]
// URL: https://www.codewars.com/kata/5264d2b162488dc400000001
// Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Fixed tests",()=>{ 
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("This sentence is a sentence"), "This ecnetnes is a ecnetnes");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
  
  it("Random tests",()=>{
    const refSpinWords = s => s.split(" ").map( s => s.length>=5 ? s.split("").reverse().join("") : s ).join(" ") ;
    const rnd = n => Math.floor(Math.random()*n) ;
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const rndWord = () => Array.from( { length: rnd(12) + 1 }, () => abc[rnd(abc.length)] ).join("") ;
    const rndSentence = i => Array.from( { length: rnd(i) }, rndWord ).join(" ") ;
    for ( let i=1; i<=50; i++ ) {
      const s = rndSentence(i);
      assert.strictEqual( spinWords(s), refSpinWords(s) );
    }
  });
});
