const readline = require('readline-sync');

const indexDataEntry = () => {
  const scripts = [
    { option: 0, name: 'IMC' },
    { option: 1, name: 'Average Speed' },
    { option: 2, name: 'Lottery' },
  ];
  console.table(scripts);
  const scriptChoice = readline.questionInt('Qual script você deseja abrir? ');
  return scriptChoice;
};

module.exports = indexDataEntry;
