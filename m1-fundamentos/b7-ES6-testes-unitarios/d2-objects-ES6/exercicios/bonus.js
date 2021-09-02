/**
 * ! Bônus
 */
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

// Exercício 1
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const mathTotal = (obj) => {
  const arrayOfKeys = Object.keys(obj);
  let totalMathStudents = 0;

  for (const key of arrayOfKeys) {
    const discipline = obj[key].materia;

    if (discipline === 'Matemática') {
      const mathStudentsPerClass = obj[key].numeroEstudantes;
      totalMathStudents += mathStudentsPerClass;
    }
  }

  return totalMathStudents;
};
console.log(mathTotal(allLessons));
