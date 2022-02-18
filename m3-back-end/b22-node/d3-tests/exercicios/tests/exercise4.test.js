const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const escreveArquivo = require("../escreveArquivo");

const CONTEUDO_ARQUIVO = "TDD é vida";

describe("Quando escreve o arquivo", () => {
	before(() => {
		sinon.stub(fs, "writeFileSync").returns("ok");
	});
	after(() => {
		fs.writeFileSync.restore();
	});
	it("deve retornar ok", () => {
		const output = escreveArquivo("arquivo.txt", CONTEUDO_ARQUIVO);
		expect(output).to.be.equals("ok");
	});
});
