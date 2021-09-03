const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arr) => {
  const newArray = [];
  for (word of arr) {
    newArray.push(word.length);
  }
  return newArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const output = wordLengths(words);

assert.strictEqual(typeof wordLengths, 'function');
assert.deepStrictEqual(output, expected);
