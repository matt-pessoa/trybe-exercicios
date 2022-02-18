const fs = require("fs");

function escreveArquivo(nome, conteudo) {
	try {
		fs.writeFileSync(nome, conteudo);
		return "ok";
	} catch (err) {
		return "not ok";
	}
}

module.exports = escreveArquivo;
