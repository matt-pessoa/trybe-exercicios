const express = require("express");
const { createNewUser } = require("./model/User");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

app.post("/user", async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		const newUser = await createNewUser(firstName, lastName, email, password);

		return res.status(200).json(newUser);
	} catch (error) {
		console.log(error);
		return res.status(500).end();
	}
});
