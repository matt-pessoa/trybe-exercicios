const fs = require("fs").promises;

async function appendToFile() {
	const file = await fs
		.readFile("./simpsonFamily.json")
		.then((fileContent) => JSON.parse(fileContent));

	file.push({ id: "8", name: "Nelson Muntz" });

	fs.writeFile("./simpsonFamily.json", JSON.stringify(file));
}

appendToFile();
