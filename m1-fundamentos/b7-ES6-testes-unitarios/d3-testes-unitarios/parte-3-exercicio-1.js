const greetPeople = (people) => {
  let greeting = '';
  let newArray = [];

  for (const person in people) {
    greeting = `Hello ${people[person]}`;
    newArray.push(greeting);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

/**
 * * Testes
 */
const assert = require('assert');

assert.strictEqual(typeof greetPeople, 'function');
assert.strictEqual(true, Array.isArray(parameter));
assert.deepStrictEqual(greetPeople(parameter), result);
const myArray = ['Alfie', 'Tommy', 'Changreta'];
greetPeople(myArray);
assert.deepStrictEqual(['Alfie', 'Tommy', 'Changreta'], myArray);
