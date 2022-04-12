const mysql = require("mysql2/promise");

const connection = mysql.createPool({
	host: "localhost",
	user: "matt",
	password: "Mapf!707",
	database: "model_example",
});

module.exports = connection;
