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

module.exports = {
	getAllBooks,
	getAuthorById,
	getBookById,
};
