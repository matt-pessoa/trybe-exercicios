/**
 * * Exercício 1 - Crie uma função que receba um número e retorne seu fatorial
 */

function calculateFactorial(num) {
  let factorial = num;
  if (num === 0 || num === 1) {
    factorial = 1;
  } else {
    for (let nextNumber = num - 1; nextNumber >= 1; nextNumber -= 1) {
      factorial *= nextNumber;
    }
  }
  return factorial;
}
console.log(calculateFactorial(5));

// Fatorial recursivo
function recursiveFactorial(num) {
  let factorial = num;
  if (num === 0 || num === 1) {
    factorial = 1;
  } else {
    factorial *= recursiveFactorial(num - 1);
  }
  return factorial;
}
console.log(recursiveFactorial(5));

// Fatorial utilizando ternary operator & arrow function
const factorialTernary = (num) =>
  num > 1 ? num * factorialTernary(num - 1) : 1;
console.log(factorialTernary(5));
