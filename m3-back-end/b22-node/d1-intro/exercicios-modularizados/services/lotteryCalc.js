const lotteryCalc = (guess) => {
  const randomNumber = Math.floor(Math.random() * 11);

  if (guess === randomNumber) {
    return console.log('Parabéns, número correto!');
  }
  return console.log(
    `Opa, não foi dessa vez... O número correto era ${randomNumber}`
  );
};

module.exports = lotteryCalc;
