const fs = require("fs").promises;

fs.readFile("./simpsons.json", "utf-8").then((fileContent) => {
	const arrayOfCharacters = JSON.parse(fileContent).map(
		({ id, name }) => `${id} - ${name}`
	);
	return arrayOfCharacters.forEach((character) => console.log(character));
});
