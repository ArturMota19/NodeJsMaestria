const x = 10

try {
  // we cannot reassign a const variable
  x = 2
} catch(err){
  console.log(`Ops, we got an error: ${err}`)
}
// but the difference between throw and try/catch is that the program will continue
console.log("Continue the program")