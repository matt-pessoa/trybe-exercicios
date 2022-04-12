const userValidation = (req) => {
	const { firstName, lastName, email, password } = req.body;

	if (!firstName || !lastName || !email || !password) {
		return false;
	}
	if (password.length < 6) {
		return false;
	}
	return true;
};

module.exports = {
	userValidation,
};
