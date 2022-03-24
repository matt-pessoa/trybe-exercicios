const { expect } = require("chai");
const { describe } = require("mocha");
const verifyNumber = require("../verifyNumber");

describe("Verifica o parâmetro passado", () => {
	it("espera que o retorno seja uma string", () => {
		expect.fail("TBI");
	});

	describe("Quando o parâmetro é maior que zero", () => {
		it("espera que o retorno seja 'positivo'", () => {
			expect.fail("TBI");
		});
	});

	describe("Quando o parâmetro é igual a zero", () => {
		it("espera que o retorno seja 'neutro'", () => {
			expect.fail("TBI");
		});
	});

	describe("Quando o parâmetro é menor que zero", () => {
		it("espera que o retorno seja 'negativo'", () => {
			expect.fail("TBI");
		});
	});
});
