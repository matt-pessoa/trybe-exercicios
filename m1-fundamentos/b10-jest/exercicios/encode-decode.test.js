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

  it('Para a função encode, testa se as consoantes permanecem como consoantes', () => {
    const consoates = 'b c d f g h j k l m n p q r s t v w x y z';
    expect(encodeDecode.encode(consoates)).toMatch(
      'b c d f g h j k l m n p q r s t v w x y z'
    );
  });

  it('Para a função decode, testa se numeros acima de 5 permanecem os mesmos', () => {
    expect(encodeDecode.decode('6 7 8 9')).toMatch('6 7 8 9');
  });
});
