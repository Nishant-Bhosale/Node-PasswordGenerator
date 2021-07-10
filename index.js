const program = require("commander");
const createPassword = require("./utils/createPassword");
const log = console.log;
program.version("1.0.0").description("Simple Password Generator");

program
	.option("-l, --length <number>", "Length of Password", "9")
	.option("-nn, --no-numbers", "remove numbers")
	.option("-ns, --no-symbols", "remove symbols")
	.parse();

const { length, numbers, symbols } = program.opts();

log(createPassword(length, numbers, symbols));
