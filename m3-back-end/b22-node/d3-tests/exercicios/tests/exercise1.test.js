const { expect } = require("chai");
const getSignal = require("../getSignal");

describe("Quando o número for maior que zero", () => {
	it("deve retornar positivo", () => {
		const output = getSignal(5);
		expect(output).to.be.equals("positivo");
	});
});

describe("Quando o número for igual a zero", () => {
	it("deve retornar neutro", () => {
		const output = getSignal(0);
		expect(output).to.be.equals("neutro");
	});
});

describe("Quando o número for menor que zero", () => {
	it("deve retornar negativo", () => {
		const output = getSignal(-7);
		expect(output).to.be.equals("negativo");
	});
});
