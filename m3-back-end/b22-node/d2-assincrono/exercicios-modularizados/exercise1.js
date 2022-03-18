const exercise1Promise = require('./services/exercise1Promise');

const main = async (num1, num2, num3) => {
  try {
    const response = await exercise1Promise(num1, num2, num3);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

main(60, 90, 119);
main(1, 2, 3);
main('190', NaN, 78);
