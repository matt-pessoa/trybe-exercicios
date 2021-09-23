const myRemove = require('./myRemove');

describe('Exercício 2', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const expectedArray = [1, 2, 4];
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expectedArray);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const notExpectedArray = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(notExpectedArray);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const expectedArray = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(expectedArray);
  });
});
