const readline = require('readline-sync');

const factorialDataEntry = () => {
  const input = readline.questionInt('Insira um número: ');

  if (input > 0) {
    return input;
  }
  return console.log('O valor deve ser um número inteiro e maior que zero.');
};

module.exports = factorialDataEntry;
