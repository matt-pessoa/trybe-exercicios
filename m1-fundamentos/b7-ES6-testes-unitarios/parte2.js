/**
 * * Exercício 1 - Crie uma função que receba um número e retorne seu fatorial
 */

function calculateFactorial(num) {
  let factorial = num;
  for (let nextNumber = num - 1; nextNumber >= 1; nextNumber -= 1) {
    factorial *= nextNumber;
  }
  return factorial;
}
console.log(calculateFactorial(5));

// Fatorial utilizando ternary operator & arrow function
const factorialTernary = (num) =>
  num > 1 ? num * factorialTernary(num - 1) : 1;
console.log(factorialTernary(5));

/**
 * * Exercício 2 - Crie uma função que retorne qual a maior palavra
 */
function findLongestWord(str) {
  strSplit = str.split(' ');
  max = strSplit[0];
  for (let word of strSplit) {
    word.length > max.length ? (max = word) : (max = max); // word é maior que max? se sim, max = word, se não max é max.
  }
  console.log(max);
}
findLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

/**
 * * Exercício 3 - Criar uma página que conte os cliques
 */
const button = document.getElementById('btn');
button.textContent = 'Contador: 0';
function handleClick() {
  let clickCount = 0;

  button.addEventListener('click', (event) => {
    const element = event.target;
    clickCount += 1;
    element.textContent = `Contador: ${clickCount}`;
  });
}
handleClick();
