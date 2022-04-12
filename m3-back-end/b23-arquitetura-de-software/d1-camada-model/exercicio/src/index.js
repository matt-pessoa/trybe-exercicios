const express = require("express");
const { createNewUser, getUser } = require("./model/User");
const { createNewUserValidation } = require("./model/Validation");
const { getAllUsers } = require("./model/User");

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

app.get("/user", async (_req, res) => {
	try {
		const query = await getAllUsers();

		return res.status(200).json(query);
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
});

app.get("/user/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getUser(id);

		if (!user)
			return res.status(404).json({
				error: true,
				message: "Usuário não encontrado",
			});

		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).end();
	}
});
