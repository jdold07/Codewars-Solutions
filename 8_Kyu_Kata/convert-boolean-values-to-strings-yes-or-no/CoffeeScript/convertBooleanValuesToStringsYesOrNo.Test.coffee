# [object Object] - Convert boolean values to strings 'Yes' or 'No'.  [ ID: 53369039d7ab3ac506000467  (convert-boolean-values-to-strings-yes-or-no) ]
# URL: https://www.codewars.com/kata/53369039d7ab3ac506000467
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
const assert = require('chai').assert;
describe("Tests", () => {
  it("fixed tests", () => {
    assert.strictEqual(numberToString(67), '67');
    assert.strictEqual(numberToString(79585), '79585');
    assert.notStrictEqual(numberToString(79585), 79585);
    assert.strictEqual(numberToString(1+2), '3');
    assert.strictEqual(numberToString(1-2), '-1');
  });
  
  it("random tests", () => {
    for (let run = 0; run < 200; ++run) {
      let num = Math.floor(Math.random() * 2000000 - 1000000);
      assert.strictEqual(numberToString(num), String(num), `Testing for num = ${num}`);
    }
  });
});

