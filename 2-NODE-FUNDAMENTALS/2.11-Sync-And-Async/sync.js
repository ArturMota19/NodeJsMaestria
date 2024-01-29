const fs = require('fs');

console.log("Beginning")

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

console.log("End")