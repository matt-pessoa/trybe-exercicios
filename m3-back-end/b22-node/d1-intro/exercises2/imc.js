const readline = require('readline-sync');

const imc = () => {
  const weight = 100;
  const height = 1.92;

  const imcCalc = weight / height ** 2;

  console.log(imcCalc);
};

imc();
