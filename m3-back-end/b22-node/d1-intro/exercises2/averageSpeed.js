const readline = require('readline-sync');

const averageSpeed = () => {
  const time = readline.questionInt('Tempo (em segundos): ');
  const distance = readline.questionInt('Distância (em metros): ');

  const averageSpeedCalc = distance / time;

  console.log(averageSpeedCalc);
};

averageSpeed();
