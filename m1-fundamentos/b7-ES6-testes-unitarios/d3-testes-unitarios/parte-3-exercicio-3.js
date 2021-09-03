/**
 * ! A função possui os seguintes erros:
 * todo expected: output ser array // actual: number
 * todo expected: array com numeros > 10 // actual: soma dos numeros maiores que 10
 */
const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

/**
 * * Testes
 */
const assert = require('assert');

// assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);
