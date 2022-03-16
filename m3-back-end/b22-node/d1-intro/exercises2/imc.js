const imcCalc = require('./services/imcCalc');
const imcDataEntry = require('./controllers/imcDataEntry');
const imcSituation = require('./services/imcSituation');

const mainImc = () => {
  const { weight, height } = imcDataEntry();
  const imc = imcCalc(weight, height);
  const situation = imcSituation(imc);

  console.log(situation);
};

mainImc();
