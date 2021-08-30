function handleReplaceString(stringDeterminada, parametro) {
  let newString = stringDeterminada.replace('x', parametro);
  return newString;
}
console.log(handleReplaceString('Tryber x aqui!', 'Bebeto');

const arraySkills = ['HTML', 'CSS', 'JavaScript', 'Criatividade', 'Pesquisa'];

function handleConcatenate(replaceFunction) {
  const orderedArraySkills = arraySkills.sort();
  let newString = `${replaceFunction} Minhas cinco principais habilidades são: ${orderedArraySkills[0]}, ${orderedArraySkills[1]}, ${orderedArraySkills[2]}, ${orderedArraySkills[3]} e ${orderedArraySkills[4]}. #VQV`;
  return newString;
}

console.log(
  handleConcatenate(handleReplaceString('Tryber x aqui!', 'Matheus'))
);
