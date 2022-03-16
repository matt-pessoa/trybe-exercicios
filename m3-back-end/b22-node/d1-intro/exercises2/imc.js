const readline = require('readline-sync');

const imc = () => {
  const weight = readline.questionFloat('Qual o seu peso? ');
  const height = readline.questionFloat('Qual a sua altura? ');

  const imcCalc = weight / height ** 2;

  let situation;
  if (imcCalc < 18.5) {
    situation = 'Abaixo do peso';
  } else if (imcCalc < 24.9) {
    situation = 'Peso normal';
  } else if (imcCalc < 29.9) {
    situation = 'Sobrepeso';
  } else if (imcCalc < 34.9) {
    situation = 'Obesidade grau I';
  } else if (imcCalc < 39.9) {
    situation = 'Obesidade grau II';
  } else {
    situation = 'Obesidade grau III e IV';
  }

  console.log(situation);
};

imc();
