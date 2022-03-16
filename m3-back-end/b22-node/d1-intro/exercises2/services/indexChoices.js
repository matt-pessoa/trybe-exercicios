const mainImc = require('../imc');
const mainSpeed = require('../averageSpeed');
const mainLottery = require('../lottery');

const indexChoices = (scriptChoice) => {
  if (scriptChoice === 0) {
    mainImc();
  } else if (scriptChoice === 1) {
    mainSpeed();
  } else if (scriptChoice === 2) {
    mainLottery();
  } else {
    console.log('Opção inválida');
  }
};

module.exports = indexChoices;
