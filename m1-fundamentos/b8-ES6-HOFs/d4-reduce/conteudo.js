const assert = require('assert');

const numbers = [18, 19, 23, 53, 4, 5, 85, 76, 23, 54];
/**
 * ? 1 - Crie duas funções que retornam o maior valor do array: uma vez utilizando o for e outra utilizando o reduce.
 */

const findLargestFor = (array) => {
  let largestNumber = array[0];
  for (number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
};
assert.strictEqual(findLargestFor(numbers), 85);

const findLargestReduce = (array) => {
  const getLargest = array.reduce((pValue, cValue) =>
    pValue > cValue ? pValue : cValue
  );

  return getLargest;
};
assert.strictEqual(findLargestReduce(numbers), 85);

/**
 * ? 2- Crie uma função que some todos os números pares utilizando reduce.
 */
const sumEvenNumbersFilterReduce = (array) => {
  const filterEven = array.filter((number) => number % 2 === 0);
  const sumOfEven = filterEven.reduce((acc, number) => acc + number, 0);

  return sumOfEven;
};

const expectedEvenSum = 18 + 4 + 76 + 54;
assert.strictEqual(sumEvenNumbersFilterReduce(numbers), expectedEvenSum);

const sumEvenNumbersReduce = (array) => {
  const sumOfEven = (acc, number) => (number % 2 === 0 ? acc + number : acc);
  const total = array.reduce(sumOfEven, 0);

  return total;
};
assert.strictEqual(sumEvenNumbersReduce(numbers), expectedEvenSum);
