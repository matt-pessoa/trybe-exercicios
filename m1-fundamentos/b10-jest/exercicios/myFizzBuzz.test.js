const myFizzBuzz = require('./myFizzBuzz');

describe('Exercício 3', () => {
  it('Verifica se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
});
