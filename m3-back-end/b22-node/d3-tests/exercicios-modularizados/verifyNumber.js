const verifyNumber = (number) => {
	if (typeof number === "number") {
		if (number < 0) {
			return "negativo";
		} else if (number === 0) {
			return "neutro";
		} else {
			return "positivo";
		}
	}
	return "o valor deve ser um número";
};

module.exports = verifyNumber;
