const connection = require("../connection");

const createNewUser = (firstName, lastName, email, password) => {
	const { insertedId } = connection.execute(
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

module.exports = {
	createNewUser,
};
