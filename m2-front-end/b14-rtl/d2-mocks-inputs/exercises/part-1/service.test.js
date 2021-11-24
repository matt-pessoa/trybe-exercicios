const { expect, it, describe, afterEach } = require("@jest/globals");
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

describe("Testes para as funções do Exercício 4", () => {
	it("Testa a implementação de toLowerCase na função UpperCase", () => {
		service.strToUpperCase = jest
			.spyOn(service, "strToUpperCase")
			.mockImplementation((str) => str.toLowerCase());
		expect(service.strToUpperCase("STRING")).toBe("string");
	});

	it("Testa a implementação de retornar a ultima letra para getFirstLetter", () => {
		service.getFirstLetter = jest
			.spyOn(service, "getFirstLetter")
			.mockImplementation((str) => str[str.length - 1]);
		expect(service.getFirstLetter("string")).toBe("g");
		expect(service.getFirstLetter("string")).not.toBe("s");
	});

	it("Testa a implementação de aumentar o numero de parametros de concatenateStrings", () => {
		service.concatenateStrings = jest
			.spyOn(service, "concatenateStrings")
			.mockImplementation((str1, str2, str3) => {
				return `${str1}${str2}${str3}`;
			});
		expect(service.concatenateStrings("s", "t", "r")).toBe("str");
	});

	it("Verifica se o comportamento original da função strToUpperCase foi restaurado", () => {
		service.strToUpperCase.mockRestore();
		expect(service.strToUpperCase("string")).toBe("STRING");
	});
});

describe("Testes para a função fetchDog", () => {
	service.fetchDog = jest.fn();
	afterEach(service.fetchDog.mockReset);

	it("testando requisição caso a promisse resolva", async () => {
		service.fetchDog.mockResolvedValue("request sucess");

		service.fetchDog();
		expect(service.fetchDog).toHaveBeenCalled();
		expect(service.fetchDog).toHaveBeenCalledTimes(1);
		await expect(service.fetchDog()).resolves.toBe("request sucess");
		expect(service.fetchDog).toHaveBeenCalledTimes(2);
	});

	it("testando requisição caso a promisse seja rejeitada", async () => {
		service.fetchDog.mockRejectedValue("request failed");

		expect(service.fetchDog).toHaveBeenCalledTimes(0);
		await expect(service.fetchDog()).rejects.toMatch("request failed");
		expect(service.fetchDog).toHaveBeenCalledTimes(1);
	});
});
