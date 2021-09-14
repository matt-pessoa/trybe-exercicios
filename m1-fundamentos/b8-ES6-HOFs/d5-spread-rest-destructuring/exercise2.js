const assert = require('assert');

// escreva sum abaixo
const sum = (...args) =>
  args.length > 0 ? args.reduce((acc, curVal) => acc + curVal) : 0;

assert.strictEqual(sum(), 0); // ! Se args.length === 0, retorna undefined
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
