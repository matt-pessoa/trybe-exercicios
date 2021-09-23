const encodeDecode = require('./encode-decode');

describe('Exercício 4', () => {
  it('Testa de encode e decode são funções', () => {
    expect(typeof encodeDecode.encode && typeof encodeDecode.decode).toBe(
      'function'
    );
  });

  it('Para a função encode testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encodeDecode.encode('a e i o u')).toMatch('1 2 3 4 5');
  });
});
