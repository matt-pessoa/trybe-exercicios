function techList(arr, name) {
  // seu código aqui
  const sortedArray = arr.sort();
  const arrayTech = [];
  let objectTech = {};

  if (arr.length > 0) {
    for (let tech of sortedArray) {
      objectTech.name = name;
      objectTech.tech = tech;
      arrayTech.push(objectTech);
      objectTech = {};
    }
    return arrayTech;
  }
  return 'Vazio!';
}

module.exports = techList;
