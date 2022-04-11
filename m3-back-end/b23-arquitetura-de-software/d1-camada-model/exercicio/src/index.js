const express = require("express");
const connection = require("./connection");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

app.post("/user", (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		const { insertedId } = connection.execute(
			`INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)`,
			[firstName, lastName, email, password]
		);

		return res.status(200).json({
			id: insertedId,
			first_name: firstName,
			last_name: lastName,
			email,
			password,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).end();
	}
});
