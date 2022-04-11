const express = require("express");
const connection = require("./connection");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
