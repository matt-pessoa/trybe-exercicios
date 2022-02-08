const readline = require("readline-sync");

function getResult(guess, randomValue) {
	if (guess === randomValue) {
		return console.log("Parabéns, número correto!");
	}

	return console.log(`Opa, não foi dessa vez. O número era ${randomValue}`);
}

function runGame() {
	const guess = readline.questionInt(
		"Qual o seu palpite de número (entre 1 e 10)?"
	);
	const randomValue = Math.floor(Math.random() * 10 + 1);

	getResult(guess, randomValue);

	playAgain();
}

function playAgain() {
	const again = readline.question("Jogar novamente? (yes ou no)");
	if (again !== "yes") {
		return console.log("Até a próxima!");
	}
	runGame();
}

runGame();
