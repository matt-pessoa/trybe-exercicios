const readline = require('readline-sync');

const averageSpeedDataEntry = () => {
  const time = readline.questionInt('Tempo (em segundos): ');
  const distance = readline.questionInt('Distância (em metros): ');

  const data = { time, distance };

  return data;
};

module.exports = averageSpeedDataEntry;
