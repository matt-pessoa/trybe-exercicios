const verifyNumber = (number) => {
	if (number < 0) {
		return "negativo";
	} else if (number === 0) {
		return "neutro";
	} else {
		return "positivo";
	}
};

module.exports = verifyNumber;
