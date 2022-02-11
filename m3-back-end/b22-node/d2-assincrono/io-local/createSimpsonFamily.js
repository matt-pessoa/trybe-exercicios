const fs = require("fs").promises;

async function createFamily() {
	const file = await fs.readFile("./simpsons.json", "utf-8");

	const getFamily = JSON.parse(file).filter(({ id }) => id <= 4);

	fs.writeFile("simpsonFamily.json", JSON.stringify(getFamily));
}

createFamily();
