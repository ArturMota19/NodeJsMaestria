const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("What's your favorite color? ", (color) => {
    
    console.log(`My favorite color is ${color}`)
    readline.close()
})