const express = require("express");
const { createNewUser } = require("./model/User");
const { createNewUserValidation } = require("./model/Validation");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

app.post("/user", async (req, res) => {
	try {
		if (!createNewUserValidation(req)) {
			return res.status(400).json({
				error: true,
				message: "O campo 'password' deve ter pelo menos 6 caracteres",
			});
		} else {
			const { firstName, lastName, email, password } = req.body;

			const newUser = await createNewUser(firstName, lastName, email, password);

			return res.status(201).json(newUser);
		}
	} catch (error) {
		console.log(error);
		return res.status(500).end();
	}
});
