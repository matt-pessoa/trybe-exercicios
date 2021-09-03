function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const assert = require('assert');

// Teste 1
const expectedArray = [1, 2, 4];
assert.deepStrictEqual(expectedArray, myRemove([1, 2, 3, 4], 3));

// Teste 2
assert.notDeepStrictEqual([1, 2, 3, 4], myRemove([1, 2, 3, 4], 3));

// Teste 3
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);
