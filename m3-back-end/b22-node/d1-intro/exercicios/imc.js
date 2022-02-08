const readline = require("readline-sync");

const weight = readline.questionFloat("Qual o seu peso?");
const height = readline.questionFloat("Qual a sua altura?");

function situation(imc) {
	if (imc < 18.5) {
		return "Abaixo do peso (magreza)";
	}

	if (imc >= 18.5 && imc < 25) {
		return "Peso normal";
	}

	if (imc >= 25 && imc < 30) {
		return "Acima do peso (sobrepeso)";
	}

	if (imc >= 30 && imc < 35) {
		return "Obesidade grau I";
	}

	if (imc >= 35 && imc < 40) {
		return "Obesidade grau II";
	}

	return "Obesidade graus III e IV";
}

function imcCalculator(weight, height) {
	const imc = weight / height ** 2;
	const table = [{ IMC: imc, Situação: situation(imc) }];

	return table;
}

console.table(imcCalculator(weight, height));
