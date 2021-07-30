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

// * Observe como o código abaixo é MUITO mais legível
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

let piece = "knight";
let lowerPiece = piece.toLowerCase();

switch (lowerPiece) {
  case "pawn":
    console.log("Up or diagonally");
    break;
  case "knight":
    console.log("L");
    break;
  case "bishop":
    console.log("diagonally");
    break;
  case "rook":
    console.log("horizontally or vertically");
    break;
  case "queen":
    console.log("horizontally, vertically or diagonally");
    break;
  case "king":
    console.log("horizontally, vertically or diagonally");
    break;
  default:
    console.log("Oops, I don't think that's a real chess piece...");
}

/**
 * ? Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
 */

let porcentagem = 54;

if (porcentagem > 100 || porcentagem < 0) {
  console.log("Erro!");
} else if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/**
 * ? Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

let numberA = 31;
let numberB = 23;
let numberC = 44;

let isEven = false;

if (numberA % 2 == 0 || numberB % 2 == 0 || numberC % 2 == 0) {
  isEven = true;
}
console.log(isEven);

/**
 * ? Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

let numberD = 31;
let numberE = 23;
let numberF = 44;

let isOdd = false;

if (numberD % 2 == 1 || numberE % 2 == 1 || numberF % 2 == 1) {
  isOdd = true;
}
console.log(isOdd);

/**
 * ? Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */

let custoProduto = 100;
let valorVenda = 150;
let imposto = 0.2;

if (custoProduto < 0 || valorVenda < 0) {
  console.log("Erro!");
} else {
  let custoProdutoTotal = custoProduto * imposto + custoProduto;
  let lucro = valorVenda - custoProdutoTotal;
  console.log(lucro);
}

/**
 * ? Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
 */

let salarioBruto = 3000;
let INSS = 0;
let IR = 0;

if (salarioBruto <= 1556.94) {
  INSS = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594.92) {
  INSS = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
  INSS = 0.11 * salarioBruto;
} else {
  INSS = 570.88;
}
let salarioDeduzidoINSS = salarioBruto - INSS;

if (salarioDeduzidoINSS <= 1903.98) {
  IR = 0;
} else if (salarioDeduzidoINSS <= 2836.65) {
  IR = 0.075 * salarioDeduzidoINSS - 142.8;
} else if (salarioDeduzidoINSS <= 3751.05) {
  IR = 0.15 * salarioDeduzidoINSS - 354.8;
} else if (salarioDeduzidoINSS <= 4554.68) {
  IR = 0.225 * salarioDeduzidoINSS - 636.13;
} else {
  IR = 0.275 * salarioDeduzidoINSS - 869.36;
}

let salarioLiquido = salarioDeduzidoINSS - IR;
console.log(salarioLiquido);
