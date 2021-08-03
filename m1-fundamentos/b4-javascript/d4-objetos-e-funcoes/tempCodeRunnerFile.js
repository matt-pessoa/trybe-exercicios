
let arrayTeste = [3, 1, 2, 3, 8, 2, 3];
let maxFreq = 1; // inicia a frequência máxima = 1 para ser comparada com a frequência dos elementos
let counter = 0; // inicia o contador dos elementos
let maxItem;
// console.log(mostRepeated(arrayTeste));

for (element in arrayTeste) {
  // percorre o index do array
  // [3, 1, 2, 3, 8, 2, 3]
  console.log("element: " + arrayTeste[element]);
  for (nextElement in arrayTeste) {
    console.log("nextElement: " + arrayTeste[nextElement]);
    if (arrayTeste[element] === arrayTeste[nextElement]) {
      counter += 1;
    } else if (maxFreq < counter) {
      maxFreq = counter;
      maxItem = arrayTeste[element];
    }
  }
  counter = 0;
}
