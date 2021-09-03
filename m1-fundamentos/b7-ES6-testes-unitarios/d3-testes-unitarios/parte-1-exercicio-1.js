function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const assert = require('assert');

// Teste 1
assert.strictEqual(sum(4, 5), 9);

// Teste 2
assert.strictEqual(sum(0, 0), 0);

// Teste 3 - Verifica se a função retorna um erro
assert.throws(() => {
  sum(4, '5');
});

// Teste 4 - Verifica qual erro a função retorna (esperado: 'parameters must be numbers')
assert.doesNotThrow(() => {
  sum(4, '5');
});
