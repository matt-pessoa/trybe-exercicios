const readline = require("readline-sync");

const scripts = [
	{ name: "Calcular IMC", script: "imc" },
	{ name: "Calcular velocidade média", script: "velocidade" },
	{ name: "Jogo de adivinhação", script: "sorteio" },
];

function getScript() {
	console.table(scripts);

	const script = readline.question("Qual script deve ser executado?");

	require(`./${script}`);
}

getScript();
