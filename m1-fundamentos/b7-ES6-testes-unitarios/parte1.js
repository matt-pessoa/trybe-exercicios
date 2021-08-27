/**
 * * Exercício 1
 */
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

/**
 * * Exercício 2
 */
 const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 // Seu código aqui.
 oddsAndEvens.sort((a,b) => {
   return a - b;
 });
 
 console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
 
 /**
  * ! .sort([funcaoDeComparacao])
  * ? Para entender a função de comparação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  * 
  * * 1) funcaoDeComparacao omitida:
  *      o array é ordenado de acordo com a pontução de código Unicode de cada um dos caracteres     (ordena de acordo com sua corversao para texto).
  *  ex: 9 vem antes de 80 numericamente, mas em texto "80" vem antes de "9".
  * 
  * * 2) funcaoDeComparacao 
  *    * a) .sort() retorna < 0:
  *        ordena A para um índice anterior a B. A vem primeiro.
  *    * b) .sort() retorna === 0:
  *        ordenacao inalterada.
  *    * c) .sort() retorna > 0:
  *        ordena B para um índice anterior a A. B vem primeiro.
  */ 