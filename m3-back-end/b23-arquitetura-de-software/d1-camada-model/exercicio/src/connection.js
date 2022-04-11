const mysql = require("mysql2/promise");
const express = require("express");

const app = express();
const PORT = 3000;

const connection = mysql.createPool({
	host: "localhost",
	user: "matt",
	password: "Mapf!707",
	database: "exercicio",
	port: "3306",
});

app.use(express.json());
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
