/**
 * * Exercício 1 - Crie uma função que receba um número e retorne seu fatorial
 */

function calculateFactorial(num) {
  let factorial = num;
  for (let nextNumber = (num-1); nextNumber >= 1; nextNumber -= 1){
    factorial *= nextNumber;
  }
  return factorial;
}
console.log(calculateFactorial(5));