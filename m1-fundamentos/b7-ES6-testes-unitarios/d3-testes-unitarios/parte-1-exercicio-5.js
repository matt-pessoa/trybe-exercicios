const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
const assert = require('assert');

// ? obj1 === obj2
assert.deepStrictEqual(obj1, obj2); // true

// ? obj1 === obj3
assert.deepStrictEqual(obj1, obj3); // false

// ? obj2 === obj3
assert.deepStrictEqual(obj2, obj3); // false