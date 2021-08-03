/**
 * ? 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
 */

function reverseString(word) {
  let wordSplit = word.split(""); // returns an array with every word character splitted
  let reverseArray = wordSplit.reverse(); // inverte o array acima
  let joinArray = reverseArray.join(""); // junta os caracteres em uma string (deve passar o argumento "" para evitar commas)

  return joinArray;
}

function isPalindrome(word) {
  let reversedWord = reverseString(word);

  if (word === reversedWord) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

isPalindrome("arara");

/**
 * ? 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
 */

function findLargestNumberIndex(arr) {
  let maior = arr[0]; // Comparador (inicia a comparação no primeiro item do array)
  let maiorIndex = 0; // Comparador index (inicia a comparação no primeiro index (0))

  for (let index = 0; index <= arr.length; index += 1) {
    // iterando o index
    if (arr[index] > maior) {
      // se o número do index i for maior que o maior numero até agora, ele vira o novo maior
      maior = arr[index];
      maiorIndex = index;
    }
  }
  return maiorIndex;
}

teste = [2, 3, 6, 7, 10, 1];
console.log(findLargestNumberIndex(teste));

/**
 * ? 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
 */

function findSmallestNumberIndex(arr) {
  let smallestNumber = arr[0];
  let smallestIndex = 0;

  for (let index = 0; index <= arr.length; index += 1) {
    /** ! for (index in arr) faz o mesmo */
    if (arr[index] < smallestNumber) {
      smallestNumber = arr[index];
      smallestIndex = index;
    }
  }
  return smallestIndex;
}

testSmallestIndex = [2, 4, 6, 7, 10, 0, -3];
console.log(findSmallestNumberIndex(testSmallestIndex));

/**
 * ? 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
 */

function findLongestName(arr) {
  let longestName = arr[0];

  for (let index in arr) {
    if (arr[index].length > longestName.length) {
      longestName = arr[index];
    }
  }
  return longestName;
}

testLongestName = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
console.log(findLongestName(testLongestName));

/** 
 * ? 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
 */

function mostRepeated(arr) {
  let maxFreq = 1; // inicia a frequência máxima = 1 para ser comparada com a frequência dos elementos
  let counter = 0; // inicia o contador dos elementos
  let maxItem; // inicializa a variavel maxItem --> elemento com maior frequência será guardado nessa variável

  for (indexElement in arr) {
    // percorre o index do array
    for (indexNextElement in arr) {
      // percorre o index do array
      if (arr[indexElement] === arr[indexNextElement]) {
        // compara o elemento do primeiro loop com todos os elementos do array
        counter += 1; // se for igual, o contador é adicionado 1
      }
      if (maxFreq < counter) {
        // caso o contador seja maior do que a frequência máxima atual,
        maxFreq = counter; // o contador se torna a nova frequência máxima
        maxItem = arr[indexElement]; // e o item correspondente torna-se o item mais frequente
      }
    }
    counter = 0; // zera o contador para a proxima comparação
  }
  return maxItem;
}

let arrayTeste = [3, 1, 2, 3, 8, 2, 3]; // resultado esperado: 3
console.log(mostRepeated(arrayTeste));

/** ! Debug */
// let maxFreq = 1; // inicia a frequência máxima = 1 para ser comparada com a frequência dos elementos
// let counter = 0; // inicia o contador dos elementos
// let maxItem; // inicializa a variavel

// for (indexElement in arrayTeste) {
//   // percorre o index do array
//   // [3, 1, 2, 3, 8, 2, 3]
//   console.log("element: " + arrayTeste[indexElement]);
//   for (indexNextElement in arrayTeste) {
//     console.log("indexNextElement: " + arrayTeste[indexNextElement]);
//     if (arrayTeste[indexElement] === arrayTeste[indexNextElement]) {
//       counter += 1;
//     } else if (maxFreq < counter) {
//       maxFreq = counter;
//       maxItem = arrayTeste[indexElement];
//     }
//   }
//   counter = 0;
// }

/** 
 * ? 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
 */

function gaussSum(num) {
  let arrayNumbers = [];
  let soma = 0;
  for (let numero = 0; numero <= num; numero += 1) {
    arrayNumbers.push(numero);
  }
  for (index in arrayNumbers) {
    soma += arrayNumbers[index];
  }
  return soma;
}

console.log(gaussSum(5));

/**
 * ? 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
 */

function isEnding(word, ending) {
  let wordSplit = word.split("");
  let endingSplit = ending.split("");

  let slicer = -1 * endingSplit.length;
  let wordEnding = wordSplit.slice(slicer).join("");

  if (wordEnding === ending) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

isEnding("trybe", "be");
isEnding("joaofernando", "fernan");

/**
 * * Conceito
 */
// let word = "trybe"; // exemplo com as palavras trybe e be
// let ending = "be";

// let wordSplit = word.split(""); // divide "trybe" em letras --> ['t','r','y','b','e']
// let endingSplit = ending.split(""); // divide "be" em letras --> ['b','e']

// let slicer = -1 * endingSplit.length; // vou cortar o array wordSplit do tamanho do array endingSplit, multiplico por -1 para cortar do final para o início, já que queremos comparar o final
// let wordEnding = wordSplit.slice(slicer).join(""); // corto o array wordSplit e uno o resultado em uma única string

// if (wordEnding === ending) { // comparação entre a string recém feita e o ending inicial
//   console.log(true);
// } else {
//   console.log(false);
// }
