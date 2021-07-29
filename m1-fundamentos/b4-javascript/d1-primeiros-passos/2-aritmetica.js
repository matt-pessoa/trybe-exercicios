/**
 * * Tipos primitivos
 * A tipagem do JavaScript é dinâmica. É possível redefinir o valor de uma variável no futuro.
 */

let movie = "The Lord of the Rings"; //  string literal
let score = 10.89; //  number literal
let isValid = true; //  boolean
let name; //  undefined
let color = null; //  nulo
color = "red"; // redefinição

/**
 * *Aritmética
 * !    +       -             *          /        **
 *    soma  subtracao  multiplicacao  divisao  potencia
 */

/**
 * ? Exercício 1
 * Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
 * Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
 * Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;
 */

let base = 5;
let altura = 8;
let area = base*altura;
console.log(area)

let perimetro = (base*2) + (altura*2);
console.log(perimetro);