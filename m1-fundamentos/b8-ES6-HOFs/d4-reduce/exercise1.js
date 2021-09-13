const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const flat = (acc, curVal) => {
    return acc.concat(curVal);
  };

  return arrays.reduce(flat, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
