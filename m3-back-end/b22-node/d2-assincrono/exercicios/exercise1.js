function numbersPromise(num1, num2, num3) {
	const promise = new Promise((resolve, reject) => {
		if (
			typeof num1 !== "number" ||
			typeof num2 !== "number" ||
			typeof num3 !== "number"
		) {
			reject(new Error("Informe apenas números"));
		}

		const result = (num1 + num2) * num3;

		if (result < 50) {
			reject(new Error("Valor muito baixo"));
		}
		resolve(result);
	});

	return promise;
}

numbersPromise(1, 2, 3)
	.then((result) => console.log(result))
	.catch((err) => console.error(err.message));
