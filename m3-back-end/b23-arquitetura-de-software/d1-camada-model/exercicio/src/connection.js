const mysql = require("mysql2/promise");

const connection = mysql.createPool({
	host: "localhost",
	user: "matt",
	password: "Mapf!707",
	database: "exercicio",
	port: "3306",
});

module.exports = connection;
