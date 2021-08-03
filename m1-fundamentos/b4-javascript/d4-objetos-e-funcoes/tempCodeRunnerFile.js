let word = "banana"; // exemplo com as palavras trybe e be
let ending = "nana";

let wordSplit = word.split(""); // divide "trybe" em letras --> ['t','r','y','b','e']
let endingSplit = ending.split(""); // divide "be" em letras --> ['b','e']

let slicer = -1 * endingSplit.length; // vou cortar o array wordSplit do tamanho do array endingSplit, multiplico por -1 para cortar do final para o início, já que queremos comparar o final
let wordEnding = wordSplit.slice(slicer).join(""); // corto o array wordSplit e uno o resultado em uma única string

if (wordEnding === ending) { // comparação entre a string recém feita e o ending inicial
  console.log(true);
} else {
  console.log(false);
}
