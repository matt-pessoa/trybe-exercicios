const generateRandomNumber = (bet, func) => {
  const random = Math.floor(Math.random() * (5 - 1)) + 1;
  return func(bet, random);
};

const handleCheck = (bet, randomNumber) =>
  bet === randomNumber ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(generateRandomNumber(2, handleCheck));
