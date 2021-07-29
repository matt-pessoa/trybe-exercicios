/**
 * ? Exercício 4
 * Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
 * Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
 */

let candidata1 = "reprovada";

switch (candidata1) {
  case "aprovada":
    console.log("Parabéns você foi aprovado(a)!");
    break;
  case "lista":
    console.log("Você está na lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovado(a)");
    break;
}
