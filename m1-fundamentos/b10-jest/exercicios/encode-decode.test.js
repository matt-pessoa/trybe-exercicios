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

  it('Para a função decode testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u', () => {
    expect(encodeDecode.decode('1 2 3 4 5')).toMatch('a e i o u');
  });
});
