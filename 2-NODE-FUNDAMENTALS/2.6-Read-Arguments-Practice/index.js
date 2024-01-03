// node .\index.js --a=2 --b=3 
const minimist = require("minimist");

// Extern Module
const args = minimist(process.argv.slice(2)) // Process same as 2.4 section

// Intern Module
const sum = require('./module').sum;

const firstNumber = parseInt(args["a"])
const secondNumber = parseInt(args["b"])

console.log(sum(firstNumber, secondNumber))

