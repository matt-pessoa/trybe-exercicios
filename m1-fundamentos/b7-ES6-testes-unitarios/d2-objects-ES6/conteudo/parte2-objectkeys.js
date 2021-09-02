/**
 * ! Parte II - Object.keys()
 * * Crie uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".
 */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

/**
 * Versão 1.0
 * Não é uma boa solução, já que 1) seriam necessários dois parâmetros 2) Não utiliza o parâmetro para pegar os objetos
// 
// function listSkills(obj) {
//   const student1Skills = Object.keys(student1);
//   const student2Skills = Object.keys(student2);
//   console.log('Student 1');
//   for (skill of student1Skills) {
//     console.log(`${skill}, Nível: ${obj[skill]}`);
//   }
//   console.log('Student 2');
//   for (skill of student2Skills) {
//     console.log(`${skill}, Nível: ${obj[skill]}`);
//   }
// }
// listSkills(student1);

/**
 * Versão 2.0
 */
function listSkills2(obj) {
  const arraySkills = Object.keys(obj);
  for (key of arraySkills) {
    let value = obj[key];
    console.log(`${key}, Nível: ${value}`);
  }
}
console.log('Estudante 1');
listSkills2(student1);
console.log('Estudante 2');
listSkills2(student2);
