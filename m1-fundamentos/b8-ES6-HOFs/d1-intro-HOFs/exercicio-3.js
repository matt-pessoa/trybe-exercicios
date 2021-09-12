const handleFinalResult = (studentAnswers, rightAnswers, action) => {
  const testLength = rightAnswers.length;
  let total = 0;

  for (let index = 0; index < testLength; index += 1) {
    const questionResult = action(studentAnswers[index], rightAnswers[index]);
    total += questionResult;
  }
  return total;
};

const handleCheckAnswers = (studentAnswer, rightAnswer) => {
  if (studentAnswer === 'N.A') {
    return 0;
  } else if (studentAnswer === rightAnswer) {
    return 1;
  } else {
    return -0.5;
  }
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(
  handleFinalResult(STUDENT_ANSWERS, RIGHT_ANSWERS, handleCheckAnswers)
);
