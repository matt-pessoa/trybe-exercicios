const readline = require('readline-sync');

const imcDataEntry = () => {
  const weight = readline.questionFloat('Qual o seu peso? ');
  const height = readline.questionFloat('Qual a sua altura? ');

  const data = {
    weight,
    height,
  };

  return data;
};

module.exports = imcDataEntry;
