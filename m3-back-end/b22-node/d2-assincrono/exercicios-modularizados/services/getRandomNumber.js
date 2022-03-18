const getRandomNumber = () => {
  const arrayOfRandomNumbers = [];
  while (arrayOfRandomNumbers.length <= 3) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    arrayOfRandomNumbers.push(randomNumber);
  }

  return arrayOfRandomNumbers;
};

module.exports = getRandomNumber;
