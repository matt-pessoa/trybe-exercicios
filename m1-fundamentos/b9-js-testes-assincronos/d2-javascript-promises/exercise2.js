const generateRandomArray = () => {
  // gera um array com numeros aleatorios de 1 a 50
  const randomArray = [];
  for (let index = 0; index < 10; index += 1) {
    randomArray.push((Math.random() * 50) ** 2);
  }

  return randomArray;
};

const promise = new Promise((resolve, reject) => {
  const arraySum = generateRandomArray().reduce((acc, curVal) => acc + curVal); // soma todos os valores do array aleatorio

  if (arraySum < 8000) {
    // caso a soma seja menor do que 8000, a promise será fulfilled
    return resolve(`Promise resolvida: ${arraySum}`);
  }
  reject(`Promise rejeitada: ${arraySum}`); // caso contrário, rejected
})
  .then((message) => console.log(message)) // se a promise for fulfilled, console.log(retorno do resolve)
  .catch((err) => console.log(err)); // se a promise for rejected, console.log(retorno do reject)
