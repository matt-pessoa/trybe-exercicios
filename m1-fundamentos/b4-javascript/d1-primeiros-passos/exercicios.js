/**
 * ? Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
 * 1) Adição (a + b)
 * 2) Subtração (a - b)
 * 3) Multiplicação (a * b)
 * 4) Divisão (a / b)
 * 5) Módulo (a % b)
 */
let a1 = 4;
let b1 = 12;

console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);
console.log(a1 % b1);

/**
 * ? Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
 */
let a2 = 22;
let b2 = 54;

console.log(Math.max(a2, b2));

/**
 * ? Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
 */

let a3 = 24;
let b3 = 90;
let c3 = 65;

console.log(Math.max(a3, b3, c3));

/**
 * ? Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
 */

let a4 = -80;

if (a4 > 0) {
  console.log("positive");
} else if (a4 < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

/**
 * ? Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
 * Um ângulo será considerado inválido se não tiver um valor positivo
 */

let l1 = 90;
let l2 = 30;
let l3 = 60;

if (l1 > 0 && l2 > 0 && l3 > 0 && l1 + l2 + l3 === 180) {
  console.log(true);
} else {
  console.log("Isso não é um triângulo");
}
// ! Embora esteja correto, o código acima não é legível
let sumOfAngles = l1 + l2 + l3;
let allPositives = l1 > 0 && l2 > 0 && l3 > 0;

if (allPositives) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log("Isso não é um triângulo");
  }
} else {
  console.log("Isso não é um triângulo");
}

/**
 * ? Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
 * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
 * Exemplo: bishop (bispo) -> diagonals (diagonais)
 */

let userPiece = window.prompt("Nome da peça: "); // O usuário define o nome da peça
