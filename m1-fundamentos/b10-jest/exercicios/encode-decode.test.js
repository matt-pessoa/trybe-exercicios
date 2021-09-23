const encodeDecode = require('./encode-decode');

describe('Exercício 4', () => {
  it('Testa de encode e decode são funções', () => {
    expect(typeof encodeDecode.encode && typeof encodeDecode.decode).toBe(
      'function'
    );
  });
});
