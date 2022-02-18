function getSignal(num) {
	if (num > 0) {
		return "positivo";
	} else if (num === 0) {
		return "neutro";
	}
	return "negativo";
}

module.exports = getSignal;
