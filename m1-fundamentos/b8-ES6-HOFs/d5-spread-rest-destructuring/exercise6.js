const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (list) => {
  const [name, brand, year] = list;
  const carInfo = (name, brand, year) => {
    return {
      name,
      brand,
      year,
    };
  };

  return carInfo(name, brand, year);
};

assert.deepStrictEqual(toObject(palio), {
  name: 'Palio',
  brand: 'Fiat',
  year: 2019,
});
assert.deepStrictEqual(toObject(shelbyCobra), {
  name: 'Shelby Cobra',
  brand: 'Ford',
  year: 1963,
});
assert.deepStrictEqual(toObject(chiron), {
  name: 'Chiron',
  brand: 'Bugatti',
  year: 2016,
});
