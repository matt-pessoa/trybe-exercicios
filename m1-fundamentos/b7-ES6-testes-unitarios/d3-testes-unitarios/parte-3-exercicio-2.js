const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let counter = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] !== 'a' &&
      characters[index] !== 'o' &&
      characters[index] !== 'i' &&
      characters[index] !== 'e' &&
      characters[index] !== 'u'
    ) {
      results.push(characters[index]);
    } else {
      counter += 1;
      results.push(counter);
    }
  }
  let completeWord = '';
  for (letter of results) {
    completeWord += letter;
  }
  return completeWord;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

/**
 * * Testes
 */
const assert = require('assert');

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(typeof removeVowels(parameter), 'string');
assert.strictEqual(removeVowels(parameter), result);
