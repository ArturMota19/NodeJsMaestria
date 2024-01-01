// require is a standard import format
const fs = require('fs'); // import FileSystem, a node Core module.
fs.readFile('data.txt', 'utf8', (err, data) =>{

    if(err){
        console.log(err) // if we have a error, print it
        return // do not continue the code
    }

    console.log(data)

}); // Archive path, Archive code, and a anonymous function