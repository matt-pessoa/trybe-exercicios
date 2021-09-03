/**
 * ! A função possui os seguintes erros:
 * todo expected: output ser array // actual: number OK
 * todo expected: array com numeros > 10 // actual: soma dos numeros maiores que 10
 */
const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
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

assert.strictEqual(typeof greaterThanTen, 'function');
assert.strictEqual(true, Array.isArray(greaterThanTen(parameter)));
assert.deepStrictEqual(greaterThanTen(parameter), result);
const myArray = [1, 28, 33, 7];
greaterThanTen(myArray);
assert.deepStrictEqual([1, 28, 33, 7], myArray);
