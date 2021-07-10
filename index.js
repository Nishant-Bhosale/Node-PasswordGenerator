#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const log = console.log;

program.version("1.0.0").description("Simple Password Generator");

program
	.option("-l, --length <number>", "Length of Password", "9")
	.option("-s, --save", "save password to passwords.txt")
	.option("-nn, --no-numbers", "remove numbers")
	.option("-ns, --no-symbols", "remove symbols")
	.parse();

const { length, numbers, symbols, save } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
	savePassword(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

log(chalk.blue("GeneratedPassword: ") + chalk.bold(generatedPassword));
log("Password Copied to clipboard");
