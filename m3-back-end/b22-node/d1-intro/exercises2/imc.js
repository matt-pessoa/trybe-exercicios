const readline = require('readline-sync');

const imc = () => {
  const weight = readline.questionFloat('Qual o seu peso? ');
  const height = readline.questionFloat('Qual a sua altura? ');

  const imcCalc = weight / height ** 2;

  console.log(imcCalc.toFixed(2));
};

imc();
