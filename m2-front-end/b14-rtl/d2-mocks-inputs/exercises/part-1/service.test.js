const { expect, it } = require("@jest/globals");
const service = require("./service");

describe("Testes para a função generateRandomNumber", () => {
	it("Verifica se a função foi chamada", () => {
		service.generateRandomNumber = jest.fn().mockReturnValue(10);

		expect(service.generateRandomNumber()).toBe(10);
		expect(service.generateRandomNumber).toHaveBeenCalled();
		expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
	});

	it("Verifica se a função foi chamada apenas uma vez", () => {
		service.generateRandomNumber = jest
			.fn()
			.mockImplementation((num1, num2) => {
				return num1 / num2;
			});

		expect(service.generateRandomNumber(10, 2)).toBe(5);
		expect(service.generateRandomNumber).toHaveBeenCalled();
		expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
	});
});
