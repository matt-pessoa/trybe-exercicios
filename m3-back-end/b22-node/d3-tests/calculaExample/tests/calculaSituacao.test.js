const { expect } = require("chai");

const calculaSituacao = require("../calculaSituacao");

describe("Quando a média for menor que 7", () => {
	it("retorna reprovado", () => {
		const output = calculaSituacao(4);
		expect(output).equals("reprovado");
	});
});

describe("Quando a média for igual a 7", () => {
	it("retorna aprovado", () => {
		const output = calculaSituacao(7);
		expect(output).to.be.equals("aprovado");
	});
});

describe("Quando a média for maior que 7", () => {
	it("retorna aprovado", () => {
		const output = calculaSituacao(9);
		expect(output).equals("aprovado");
	});
});
