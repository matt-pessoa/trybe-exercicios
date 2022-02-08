const readline = require("readline-sync");

const weight = readline.question("Qual o seu peso?");
const height = readline.question("Qual a sua altura?");

function imcCalculator(weight, height) {
	const imc = weight / height ** 2;
	return imc;
}

console.log(imcCalculator(weight, height));
