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
