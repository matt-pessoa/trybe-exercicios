const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

/**
 * * Testes
 */
const assert = require('assert');

// ? Verifica se greetPeople é uma função
assert.strictEqual(typeof greetPeople, 'function');
