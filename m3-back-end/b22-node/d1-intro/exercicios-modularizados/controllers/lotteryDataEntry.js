const readline = require('readline-sync');

const lotteryDataEntry = () => {
  const guess = readline.questionInt('Qual o seu palpite? ');

  return guess;
};

module.exports = lotteryDataEntry;
