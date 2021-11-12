function generateRandomNumber() {
	const randomNumber = Math.floor(Math.random() * 100);

	return randomNumber;
}

function strToUpperCase(string) {
	const stringUpperCase = string.toUpperCase();

	return stringUpperCase;
}

function getFirstLetter(string) {
	const firstLetter = string[0];

	return firstLetter;
}

function concatenateStrings(str1, str2) {
	const concatenatedStrings = `${str1}${str2}`;

	return concatenatedStrings;
}

async function fetchDog() {
	const URL = "https://dog.ceo/api/breeds/image/random";
	const response = await fetch(URL);
	const data = await response.json();

	return data;
}

module.exports = {
	generateRandomNumber,
	strToUpperCase,
	getFirstLetter,
	concatenateStrings,
	fetchDog,
};
