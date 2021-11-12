const { expect, it, describe } = require("@jest/globals");
const service = require("./service");

describe("Testes para a função generateRandomNumber", () => {
	it("Exercício 1", () => {
		service.generateRandomNumber = jest.fn().mockReturnValue(10);

		expect(service.generateRandomNumber()).toBe(10);
		expect(service.generateRandomNumber).toHaveBeenCalled();
		expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
	});

	it("Exercício 2", () => {
		service.generateRandomNumber = jest
			.fn()
			.mockImplementation((num1, num2) => {
				return num1 / num2;
			});

		expect(service.generateRandomNumber(10, 2)).toBe(5);
		expect(service.generateRandomNumber).toHaveBeenCalled();
		expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
	});

	it("Exercício 3", () => {
		service.generateRandomNumber = jest
			.fn()
			.mockImplementation((num1, num2, num3) => {
				return num1 * num2 * num3;
			});

		expect(service.generateRandomNumber(2, 2, 2)).toBe(8);

		// Nova implementação

		service.generateRandomNumber.mockReset();
		expect(service.generateRandomNumber(2, 2, 2)).toBe(undefined);

		service.generateRandomNumber = jest.fn().mockImplementation((num) => {
			return num * 2;
		});

		expect(service.generateRandomNumber(2)).toBe(4);
		expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
	});
});
