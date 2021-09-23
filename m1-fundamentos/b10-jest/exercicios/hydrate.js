function hydrate(str) {
  const regularExpression = /\d+/g;
  // * \d --> metacharacter que busca por dígitos (números)
  // No entanto, \d retorna a primeira ocorrência de numeros. Se tivermos uma string '1234_4321' vamos receber apenas '1234'
  // * /g --> modificador 'global search'
  // retorna todos os numeros na string

  const arrayNumbers = str
    .match(regularExpression)
    // * match() --> método que recebe regular expressions e retorna os resultados
    .map((element) => parseInt(element));
  const sumWaterCups = arrayNumbers.reduce((acc, curVal) => acc + curVal);

  if (sumWaterCups === 1) {
    return `${sumWaterCups} copo de água`;
  }
  return `${sumWaterCups} copos de água`;
}

console.log(hydrate('1 vinho, 13 cerveja'));

module.exports = hydrate;
