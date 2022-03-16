const readline = require('readline-sync');
const averageSpeedDataEntry = require('./controllers/averageSpeedDataEntry');
const averageSpeedCalc = require('./services/averageSpeedCalc');

const mainSpeed = () => {
  const { distance, time } = averageSpeedDataEntry();
  const avgSpeed = averageSpeedCalc(distance, time);

  console.log(avgSpeed);
};

mainSpeed();
