const myRemove = require('./myRemove');

describe('Exercício 2', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const expectedArray = [1, 2, 4];
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expectedArray);
  });
});
