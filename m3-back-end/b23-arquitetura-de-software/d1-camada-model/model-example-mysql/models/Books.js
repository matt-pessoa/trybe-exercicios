const connection = require("./connection");

const getAllBooks = async () => {
	const [books] = await connection.execute(
		"SELECT id, title, author_id FROM model_example.books;"
	);

	return books;
};

const getBookById = async (bookId) => {
	const [books] = await connection.execute(
		`SELECT * FROM model_example.books WHERE id = ${bookId}`
	);

	return books;
};

const getAuthorById = async (authorId) => {
	const [books] = await connection.execute(
		`SELECT * FROM model_example.books WHERE author_id = ${authorId};`
	);

	return books;
};

const isValid = (title, authorId) => {
	if (!title || typeof title !== "string") return false;
	if (!authorId || typeof authorId !== "string") return false;

	return true;
};

const createNewBooks = async (title, author_id) => {
	const [books] = await connection.execute(
		`INSERT INTO model_example.books (title, author_id) VALUES (?,?)`,
		[title, author_id]
	);

	return books;
};

module.exports = {
	getAllBooks,
	getAuthorById,
	getBookById,
	createNewBooks,
	isValid,
};
