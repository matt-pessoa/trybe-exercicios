const generateRandomArray = () => {
  const randomArray = [];
  for (let index = 0; index < 10; index += 1) {
    randomArray.push((Math.random() * 50) ** 2);
  }

  return randomArray;
};

const promise = new Promise((resolve, reject) => {
  const arraySum = generateRandomArray().reduce((acc, curVal) => acc + curVal);

  if (arraySum < 8000) {
    const array = [arraySum / 2, arraySum / 3, arraySum / 5, arraySum / 10];
    return resolve(array);
  }
  reject(`Promise rejeitada: ${arraySum}`);
})
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
