// node .\index.js --name=Artur --age=21
const minimist = require("minimist");

const args = minimist(process.argv.slice(2)) // Process same as 2.4 section
console.log(args)

const name = args['name'] // using minimist helps to get the value
const age = args['age']
console.log(name, age)

// Final result
console.log(`His name is ${name}, and he is ${age} years old`)