const x = "string"
// check if x is a number
if(!Number.isInteger(x)) {
  // throw an error
  // Here, we create a Error with node, and it will be displayed in the console
  throw new Error("x is not a number")
}
// if x is a number, continue the program, else, stop the program
console.log("Continue the program")