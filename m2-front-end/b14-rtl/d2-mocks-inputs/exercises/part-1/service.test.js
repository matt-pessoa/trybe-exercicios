const { expect } = require("@jest/globals");
const service = require("./service");

describe("Testes para a função generateRandomNumber", () => {
	it("Verifica se a função foi chamada", () => {
		service.generateRandomNumber = jest.fn().mockReturnValue(10);

		expect(service.generateRandomNumber()).toBe(10);
		expect(service.generateRandomNumber).toHaveBeenCalled();
		expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
	});
});
