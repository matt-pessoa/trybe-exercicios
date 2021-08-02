let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/**
 * ? Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
 */

for (numero of numbers) {
  console.log(numero);
}

/**
 * ? Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
 */

let soma = 0;
for (numero of numbers) {
  soma += numero;
}
console.log(soma);

/**
 * ? Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
 */
/**
 * ? Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 */

let somaNumbers = 0;

for (numero of numbers) {
  somaNumbers += numero;
}

let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("Média aritmética maior que 20");
} else {
  console.log("Média aritmética menor ou igual a 20");
}

/**
 * ? Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 */

let maior = numbers[0];
for (numero of numbers) {
  if (numero > maior) {
    maior = numero;
  }
}
console.log(maior);

/**
 * ? Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */

let valoresImpares = 0;

let x = [2, 4, 6];

for (numero of numbers) {
  if (numero % 2 === 1) {
    valoresImpares += 1;
  }
}

// * Outra forma de fazer o loop for para checar valores ímpares
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 1) {
//     valoresImpares += 1;
//   }
// }

if (valoresImpares > 0) {
  console.log(valoresImpares);
} else {
  console.log("nenhum valor ímpar encontrado");
}

/**
 * ? Utilizando for , descubra qual o menor valor contido no array e imprima-o;
 */

let menor = numbers[0];

for (numero of numbers) {
  if (numero < menor) {
    menor = numero;
  }
}
console.log(menor);

/**
 * ? Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
 */

arrayExercicio8 = [];
for (let i = 1; i <= 25; i += 1) {
  arrayExercicio8.push(i);
}
console.log(arrayExercicio8);

/**
 * ? Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 */

for (numero of arrayExercicio8) {
  console.log(numero / 2);
}
