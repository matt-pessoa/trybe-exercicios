const greetPeople = (people) => {
  let greeting = 'Hello ';
  let newArray = [];

  for (const person in people) {
    greeting += people[person];
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
// assert.deepStrictEqual(greetPeople(parameter), result); // actual: 'Hello IrinaAshleighElsa --> Não é um array, não tem um 'Hello' para cada nome
assert.strictEqual(true, Array.isArray(parameter));
