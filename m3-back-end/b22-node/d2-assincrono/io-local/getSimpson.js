const fs = require("fs").promises;
const readline = require("readline-sync");

const id = readline.question("Qual o id? ");

async function getSimpson(id) {
	const file = await fs.readFile("./simpsons.json", "utf-8");

	const promise = new Promise((resolve, reject) => {
		const getSimpsonById = JSON.parse(file).find(
			(character) => character.id === id
		);

		if (!getSimpsonById) {
			reject(new Error("Id não encontrado"));
		}

		resolve(console.log(getSimpsonById));
	});
	return promise;
}

getSimpson(id);
