const readline = require('readline-sync');

const replayLottery = () => {
  const replay = readline.question('Quer jogar de novo? (s/n) ');

  if (replay !== 's') {
    return false;
  }
  return true;
};

module.exports = replayLottery;
