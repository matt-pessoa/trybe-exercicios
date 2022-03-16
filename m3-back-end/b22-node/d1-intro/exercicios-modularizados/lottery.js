const lotteryDataEntry = require('./controllers/lotteryDataEntry');
const lotteryCalc = require('./services/lotteryCalc');
const replayLottery = require('./services/replayLottery');

const mainLottery = () => {
  const guess = lotteryDataEntry();
  lotteryCalc(guess);
  replayLottery() ? lottery() : console.log('Até a próxima!');
};

module.exports = mainLottery;
