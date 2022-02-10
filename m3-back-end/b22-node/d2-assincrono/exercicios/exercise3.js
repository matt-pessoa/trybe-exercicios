const numbersPromise = require("./exercise1");

function getRandomNumbers() {
	const randomArray = [];
	while (randomArray.length <= 3) {
		const randomNumber = Math.floor(Math.random() * 100 + 1);
		randomArray.push(randomNumber);
	}
	return randomArray;
}

async function consumeExercise1() {
	try {
		const result = await numbersPromise(...getRandomNumbers());
		console.log(result);
	} catch (err) {
		console.error(err.message);
	}
}

consumeExercise1();
