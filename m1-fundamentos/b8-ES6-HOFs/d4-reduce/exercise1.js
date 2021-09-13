const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const flat = (acc, curVal) => {
    return acc.concat(curVal); // acc = ['1', '2', '3'], curVal = [true] | acc.concat(curVal) === ['1','2','3',true]
  };

  return arrays.reduce(flat, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
