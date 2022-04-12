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

	if (user.length === 0) return false;

	return user;
};

const updateUser = async (id, firstName, lastName, email, password) => {
	const [userId] = await connection.execute(
		`SELECT * FROM users WHERE id = ?`,
		[id]
	);
	await connection.execute(
		`UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?`,
		[firstName, lastName, email, password, id]
	);

	if (userId.length === 0) return false;

	return true;
};

const deleteUser = async (id) => {
	const [userId] = await connection.execute(
		`SELECT * FROM users WHERE id = ?`,
		[id]
	);
	await connection.execute(`DELETE FROM users WHERE id = ?`, [id]);

	if (userId.length === 0) return false;

	return true;
};

module.exports = {
	createNewUser,
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
};
