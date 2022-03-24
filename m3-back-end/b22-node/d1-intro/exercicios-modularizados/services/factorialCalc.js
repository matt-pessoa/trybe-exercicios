const factorialCalc = (input) => {
  if (input > 0 && Number.isInteger(input)) {
    const arrayOfNumbers = [];
    while (input >= 1) {
      arrayOfNumbers.push(input);
      input -= 1;
    }

    const output = arrayOfNumbers.reduce((acc, curVal) => acc * curVal);

    return output;
  }
  return 'O valor deve ser um numero inteiro e maior que zero';
};

module.exports = factorialCalc;
