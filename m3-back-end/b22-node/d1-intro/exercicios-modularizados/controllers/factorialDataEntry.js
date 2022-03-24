const readline = require('readline-sync');

const factorialDataEntry = () => {
  const input = readline.questionInt('Insira um número: ');

  if (input > 0) {
    return input;
  }
};

module.exports = factorialDataEntry;
