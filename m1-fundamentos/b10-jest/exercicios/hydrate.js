function hydrate(str) {
  const regularExpression = /\d+/g;

  const arrayNumbers = str
    .match(regularExpression)
    .map((element) => parseInt(element));
  const sumWaterCups = arrayNumbers.reduce((acc, curVal) => acc + curVal);

  if (sumWaterCups === 1) {
    return `${sumWaterCups} copo de água`;
  }
  return `${sumWaterCups} copos de água`;
}

console.log(hydrate('1 vinho, 13 cerveja'));

module.exports = hydrate;
