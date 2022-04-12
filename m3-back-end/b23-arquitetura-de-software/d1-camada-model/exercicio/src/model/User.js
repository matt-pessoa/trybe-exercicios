const connection = require("../connection");

const createNewUser = async (firstName, lastName, email, password) => {
	const { insertedId } = await connection.execute(
		`INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)`,
		[firstName, lastName, email, password]
	);

	return {
		id: insertedId,
		first_name: firstName,
		last_name: lastName,
		email,
	};
};

const getAllUsers = async () => {
	const [query] = await connection.execute(`SELECT * FROM users`);

	if (Object.keys(query) === 0) return [];

	return query;
};

const getUser = async (id) => {
	const [user] = await connection.execute(`SELECT * FROM users WHERE id = ?`, [
		id,
	]);

	return user;
};

module.exports = {
	createNewUser,
	getAllUsers,
	getUser,
};
