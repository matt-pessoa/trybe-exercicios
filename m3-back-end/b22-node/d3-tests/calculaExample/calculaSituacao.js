function calcula(media) {
	if (media < 7) {
		return "reprovado";
	}
	return "aprovado";
}

module.exports = calcula;
