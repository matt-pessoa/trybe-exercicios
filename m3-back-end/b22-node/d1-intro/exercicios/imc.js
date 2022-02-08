const readline = require("readline-sync");

const weight = readline.questionFloat("Qual o seu peso?");
const height = readline.questionFloat("Qual a sua altura?");

function imcCalculator(weight, height) {
	const imc = weight / height ** 2;
	return imc;
}

console.log(imcCalculator(weight, height));
