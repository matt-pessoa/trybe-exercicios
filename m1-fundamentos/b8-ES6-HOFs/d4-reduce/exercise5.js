const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const dotOccurrences = {};
  for (word of names) {
    word = word.toLowerCase();
    dotOccurrences[word] = 0;
    for (letter of word) {
      letter === 'a'
        ? (dotOccurrences[word] += 1)
        : (dotOccurrences[word] = dotOccurrences[word]);
    }
  }

  return Object.values(dotOccurrences).reduce((acc, curVal) => acc + curVal);
}

assert.deepStrictEqual(containsA(), 20);
