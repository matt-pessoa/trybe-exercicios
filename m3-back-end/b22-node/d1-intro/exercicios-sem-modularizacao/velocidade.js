const readline = require("readline-sync");

const distance = readline.questionFloat(
	"Qual a distância (metros) percorrida?"
);
const time = readline.questionFloat("Qual foi o tempo (segundos) gasto?");

function meanSpeed(distance, time) {
	const output = distance / time;

	return `A velocidade média foi de ${output} m/s`;
}

console.log(meanSpeed(distance, time));
