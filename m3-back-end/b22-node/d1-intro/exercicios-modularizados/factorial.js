const factorialDataEntry = require('./controllers/factorialDataEntry');
const factorialCalc = require('./services/factorialCalc');

const factorial = () => {
  const input = factorialDataEntry();
  const output = factorialCalc(input);

  return console.log(`O fatorial de ${input} é ${output}`);
};

module.exports = factorial;
