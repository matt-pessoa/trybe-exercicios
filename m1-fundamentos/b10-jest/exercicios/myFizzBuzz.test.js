const myFizzBuzz = require('./myFizzBuzz');

describe('Exercício 3', () => {
  it('Verifica se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('Verifica se myFizzBuzz(9) retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  it('Verifica se myFizzBuzz(25) retorna "buzz"', () => {
    expect(myFizzBuzz(25)).toMatch('buzz');
  });

  it('Verfica se myFizzBuzz("não sou um número") retorna false', () => {
    expect(myFizzBuzz('não sou um número')).toBe(false);
  });
});
