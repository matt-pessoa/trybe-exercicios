const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const Books = require("./models/Books");

app.get("/books", async (req, res) => {
	const books = await Books.getAllBooks();

	return res.status(200).json(books);
});

app.post("/books", async (req, res) => {
	const { title, author_id } = req.body;

	console.log(title);

	if (!Books.isValid(title, author_id))
		return res.status(400).json({ message: "Dados inválidos" });

	await Books.createNewBooks(title, author_id);

	return res.status(200).json({ message: "Livro criado com sucesso!" });
});

app.get("/books/:id", async (req, res) => {
	const { id } = req.params;
	const books = await Books.getBookById(id);

	return res.status(200).json(books);
});

app.get("/books/search", async (req, res) => {
	const { authorId } = req.query;
	const books = await Books.getAuthorById(authorId);

	return res.status(200).json(books);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
