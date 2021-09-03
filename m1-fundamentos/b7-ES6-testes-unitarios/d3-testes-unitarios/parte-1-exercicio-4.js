function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
const assert = require('assert');

// Teste 1
assert.strictEqual('fizzbuzz', myFizzBuzz(15));

// Teste 2
assert.strictEqual('fizz', myFizzBuzz(6));

// Teste 3
assert.strictEqual('buzz', myFizzBuzz(10));

// Teste 4
assert.strictEqual(47, myFizzBuzz(47));

// Teste 5
assert.strictEqual(false, myFizzBuzz('pão'));
