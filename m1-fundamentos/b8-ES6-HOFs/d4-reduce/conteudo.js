const assert = require('assert');

const numbers = [18, 19, 23, 53, 4, 5, 85, 76, 23, 54];
/**
 * ? 1 - Crie duas funções que retornam o maior valor do array: uma vez utilizando o for e outra utilizando o reduce.
 */

const findLargestFor = (array) => {
  let largestNumber = array[0];
  for (number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
};
assert.strictEqual(findLargestFor(numbers), 85);

const findLargestReduce = (array) => {
  const getLargest = array.reduce((pValue, cValue) =>
    pValue > cValue ? pValue : cValue
  );

  return getLargest;
};
assert.strictEqual(findLargestReduce(numbers), 85);

/**
 * ? 2- Crie uma função que some todos os números pares utilizando reduce.
 */
const sumEvenNumbersFilterReduce = (array) => {
  const filterEven = array.filter((number) => number % 2 === 0);
  const sumOfEven = filterEven.reduce((acc, number) => acc + number, 0);

  return sumOfEven;
};

const expectedEvenSum = 18 + 4 + 76 + 54;
assert.strictEqual(sumEvenNumbersFilterReduce(numbers), expectedEvenSum);

const sumEvenNumbersReduce = (array) => {
  const sumOfEven = (acc, number) => (number % 2 === 0 ? acc + number : acc);
  const total = array.reduce(sumOfEven, 0);

  return total;
};
assert.strictEqual(sumEvenNumbersReduce(numbers), expectedEvenSum);

/**
 * ? 3 - Crie uma função para mostrar na tela um relatório que diz em qual matéria o estudante teve melhor desempenho.
 */
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const expectedGrade = [
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
];

const bestGrade = () => {
  const getBestClass = (acc, materia) =>
    acc.nota > materia.nota ? acc : materia;
  return estudantes.map((element) => ({
    name: element.nome,
    materia: element.materias.reduce(getBestClass).name,
  }));
};

assert.deepStrictEqual(bestGrade(), expectedGrade);
