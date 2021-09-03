function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const assert = require('assert');

// Teste 1
assert.deepStrictEqual([1, 2, 4], myRemoveWithoutCopy([1, 2, 3, 4], 3));

// Teste 2
assert.notDeepStrictEqual([1, 2, 3, 4], myRemoveWithoutCopy([1, 2, 3, 4], 3));

// Teste 3
const myArray = [5, 6, 7, 8];
myRemoveWithoutCopy(myArray, 7);
assert.strictEqual(myArray, [5, 6, 7, 8]);
