/**
 * * Exercício 2 - Crie uma função que retorne qual a maior palavra
 */
function findLongestWord(str) {
  strSplit = str.split(' ');
  max = strSplit[0];
  for (let word of strSplit) {
    word.length > max.length ? (max = word) : (max = max); // word é maior que max? se sim, max = word, se não max é max.
  }
  console.log(max);
}
findLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
