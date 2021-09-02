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
  console.log(Object.keys(obj));
};
listKeys(lesson1);
