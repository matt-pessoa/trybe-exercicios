/**
 * ! Para fixar - forEach
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
 * ! Para fixar - find
 */

// ? 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  const verifyDivisibility = (num) => num % 3 === 0 && num % 5 === 0;

  return array.find(verifyDivisibility);
};

console.log(findDivisibleBy3And5(numbers));

// ? 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  // Adicione seu código aqui:
  const verifyLength = (element) => element.length === 5;

  return array.find(verifyLength);
};

console.log(findNameWithFiveLetters(names));

// ? 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  // Adicione seu código aqui
  const verifyId = (element) => element.id === id;

  return musicas.find(verifyId);
}

console.log(findMusic('31031685'));

/**
 * ! Para fixar
 */
// ? 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const peopleNames = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((element) => element === name);
};

console.log(hasName(peopleNames, 'Ana'));
