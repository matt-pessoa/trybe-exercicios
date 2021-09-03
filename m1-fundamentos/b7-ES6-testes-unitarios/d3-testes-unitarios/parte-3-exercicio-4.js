function secondThirdSmallest(array) {
  let results = [];
  let arraySorted = array.slice(); // cria uma cópia deste array
  arraySorted = arraySorted.sort(function (x, y) {
    return x - y;
  });
  results = [arraySorted[1], arraySorted[2]];
  return results;
}

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

/**
 * * Testes
 */
const assert = require('assert');

// assert.strictEqual(typeof secondThirdSmallest, 'function');
// assert.deepStrictEqual(secondThirdSmallest(parameter), result);
const myArray = [4, 5, 29, 1, 33, 3, 12];
secondThirdSmallest(myArray);
assert.deepStrictEqual([4, 5, 29, 1, 33, 3, 12], myArray);
