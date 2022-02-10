const numbersPromise = require("./exercise1");

function getRandomNumbers() {
	const randomArray = [];
	while (randomArray.length <= 3) {
		const randomNumber = Math.floor(Math.random() * 100 + 1);
		randomArray.push(randomNumber);
	}
	return randomArray;
}

numbersPromise(...getRandomNumbers())
	.then((result) => console.log(result))
	.catch((err) => console.error(err.message));
