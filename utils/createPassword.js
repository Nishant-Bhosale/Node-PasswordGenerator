const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 9, hasNumbers = true, hasSymbols = true) => {
	let chars = alphabets;

	hasNumbers ? (chars += numbers) : "";
	hasSymbols ? (chars += symbols) : "";

	return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
	let password = "";

	for (let i = 0; i <= length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return password;
};

module.exports = createPassword;
