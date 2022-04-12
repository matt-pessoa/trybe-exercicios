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
	return query;
};

module.exports = {
	createNewUser,
	getAllUsers,
};
