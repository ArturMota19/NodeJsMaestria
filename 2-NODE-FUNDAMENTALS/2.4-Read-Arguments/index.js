// node index.js name=NAME age=AGE

const args = process.argv.slice(2) // Only the third argument in array

console.log(args)

// Now, to get just the name

const name = args[0].split('=')[1]
const age = args[1].split('=')[1]

console.log(name,age)

// Final result
console.log(`His name is ${name}, and he is ${age} years old`)
