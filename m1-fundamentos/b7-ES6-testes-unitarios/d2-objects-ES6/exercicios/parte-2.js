const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
const newShift = (obj, newKey, newValue) => {
  obj[newKey] = newValue;
};
newShift(lesson2, 'turno', 'noite');

// Exercicio 2
const listKeys = (obj) => {
  const arrayOfKeys = Object.keys(obj);
  console.log(arrayOfKeys);
};
listKeys(lesson1);

// Exercicio 3
const objectLength = (obj) => {
  const arrayOfEntries = Object.entries(obj);
  const objLength = arrayOfEntries.length;
  console.log(objLength);
};
objectLength(lesson3);

// Exercicio 4
const listValues = (obj) => {
  const arrayOfValues = Object.values(obj);
  console.log(arrayOfValues);
};
listValues(lesson2);

// Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 }); // assign um objeto contendo lesson1, lesson2 e lesson3
console.log(allLessons);

// Exercicio 6
const numberOfStudents = (obj) => {
  const arrayOfKeys = Object.keys(obj);
  let total = 0;
  for (let key of arrayOfKeys) {
    total += obj[key].numeroEstudantes; // nao posso usar dot notation em [key] pois cada key é uma string ['lesson1', 'lesson2', 'lesson3']
  }
  return total;
};
numberOfStudents(allLessons);

// Exercicio 7
const getValueByNumber = (obj, number) => {
  const arrayOfValues = Object.values(obj);
  const valueByNumber = arrayOfValues[number];

  return valueByNumber;
};
console.log(getValueByNumber(lesson1, 0));

// Exercicio 8
const verifyPair = (obj, key, value) => {
  const arrayOfEntries = Object.entries(obj);
  let isEqual = false;

  for (const index in arrayOfEntries) {
    if (
      key === arrayOfEntries[index][0] &&
      value === arrayOfEntries[index][1] // primeiro elemento do array de numero index do arrayOfEntries
    ) {
      isEqual = true;
    }
  }
  return isEqual;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// ['turno', 'noite'] == ['turno', 'noite'];  // não é possível comparar arrays em JS
