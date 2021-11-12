function generateRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 100);

	return randomNumber;
}

module.exports = { generateRandomNumber };
