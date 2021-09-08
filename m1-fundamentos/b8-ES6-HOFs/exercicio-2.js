const generateRandomNumber = (bet, action) => {
  const random = Math.floor(Math.random() * (5 - 1)) + 1;
  return action(bet, random) ? 'Parabéns você ganhou' : 'Tente novamente';
};

const handleCheck = (bet, randomNumber) => bet === randomNumber;

console.log(generateRandomNumber(2, handleCheck));
