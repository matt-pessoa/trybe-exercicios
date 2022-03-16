const indexDataEntry = require('./controllers/indexDataEntry');
const indexChoices = require('./services/indexChoices');

const main = () => {
  const scriptChoice = indexDataEntry();
  indexChoices(scriptChoice);
};

main();
