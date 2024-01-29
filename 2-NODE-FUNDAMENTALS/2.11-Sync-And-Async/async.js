const fs = require('fs');

// Here, we can see a difference between sync and async

console.log("Beginning")

fs.writeFileSync('notes.txt', 'This file was created by Node.js!', function(err){
  setTimeout(function() {
    console.log("File written")
  }, 1000)
})

console.log("End")