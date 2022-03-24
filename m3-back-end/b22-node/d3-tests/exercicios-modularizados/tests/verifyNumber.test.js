const { expect } = require("chai");
const { describe } = require("mocha");
const verifyNumber = require("../verifyNumber");

describe("Verifica o parâmetro passado", () => {
	it("espera que o retorno seja uma string", () => {
		expect(verifyNumber(2)).to.be.a("string");
	});

	it("espera que o parâmetro seja do tipo number", () => {
		expect(verifyNumber("2")).to.be.equals("o valor deve ser um número");
	});

	describe("Quando o parâmetro é maior que zero", () => {
		it("espera que o retorno seja 'positivo'", () => {
			expect(verifyNumber(-2)).to.be.equals("negativo");
		});
	});

	describe("Quando o parâmetro é igual a zero", () => {
		it("espera que o retorno seja 'neutro'", () => {
			expect(verifyNumber(0)).to.be.equals("neutro");
		});
	});

	describe("Quando o parâmetro é menor que zero", () => {
		it("espera que o retorno seja 'negativo'", () => {
			expect(verifyNumber(5)).to.be.equals("positivo");
		});
	});
});
