const fs = require('fs')

fs.stat("newArchive.txt", (err, stats) => {
  if(err){
    console.log(err)
    return
  }
  // Archive is a file
  console.log(stats.isFile())
  // Archive directory
  console.log(stats.isDirectory())
  // Archive is a symbolic link
  console.log(stats.isSymbolicLink())
  // Archive creation date
  console.log(stats.ctime)
  // Archive size
  console.log(stats.size)

})