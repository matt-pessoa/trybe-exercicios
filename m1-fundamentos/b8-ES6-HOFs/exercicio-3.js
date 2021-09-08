const handleGabarito = (studentAnswers, rightAnswers, func) => {
  return func(studentAnswers, rightAnswers);
};

const handlePontos = (studentAnswers, rightAnswers) => {
  const testLength = rightAnswers.length;
  let total = 0;

  for (let index = 0; index < testLength; index += 1) {
    if (studentAnswers[index] === 'N.A') {
      total = total;
    } else if (studentAnswers[index] === rightAnswers[index]) {
      total += 1;
    } else {
      total -= 0.5;
    }
  }
  return total;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(handleGabarito(STUDENT_ANSWERS, RIGHT_ANSWERS, handlePontos));
