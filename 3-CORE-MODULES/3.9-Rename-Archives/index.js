const fs = require('fs')

const oldName = 'archive.txt'
const newName = 'renamedArchive.txt'

fs.rename(oldName, newName, function(err){
  // if don't have the archive.txt file, it will throw an error
  if(err){
    console.log(err)
    return
  }

  console.log(`Archive renamed, ${oldName} -> ${newName}`)
})