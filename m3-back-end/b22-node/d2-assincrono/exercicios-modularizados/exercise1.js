const exercise1Promise = require('./services/exercise1Promise');
const getRandomNumbers = require('./services/getRandomNumber');

const main = async (num1, num2, num3) => {
  try {
    const response = await exercise1Promise(num1, num2, num3);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

main(...getRandomNumbers());
