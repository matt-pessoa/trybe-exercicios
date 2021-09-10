/**
 * ? Para fixar - forEach
 * * https://codepen.io/pen/?template=LYZPEwV
 */
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((element) => showEmailList(element));

/**
 * ? Para fixar - find
 */

// ? 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  const verifyDivisibility = (num) => num % 3 === 0 && num % 5 === 0;

  return array.find(verifyDivisibility);
};

console.log(findDivisibleBy3And5(numbers));
