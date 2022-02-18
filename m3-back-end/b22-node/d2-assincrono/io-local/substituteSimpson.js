const fs = require("fs").promises;

async function substituteSimpson() {
	const file = await fs
		.readFile("./simpsonFamily.json")
		.then((fileContent) => JSON.parse(fileContent));

	const nelsonId = file.find(({ name }) => name === "Nelson Muntz").id;

	const newFile = file.filter(({ id }) => id !== nelsonId);
	newFile.push({ id: nelsonId, name: "Maggie Simpson" });

	await fs.writeFile("./simpsonFamily.json", JSON.stringify(newFile));
}

substituteSimpson();
