const factorialCalc = (input) => {
  const arrayOfNumbers = [];
  while (input >= 1) {
    arrayOfNumbers.push(input);
    input -= 1;
  }

  const output = arrayOfNumbers.reduce((acc, curVal) => acc * curVal);

  return output;
};

module.exports = factorialCalc;
