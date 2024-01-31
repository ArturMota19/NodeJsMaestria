const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {

  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  if(!name){
    // if no name, read the index.html file, that has the form
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  }else{
    // \r -> carriage return (move the cursor to the beginning of the line)
    // \n -> new line
    const newName = name + '\r\n'
    // If has a name, write it to a .txt file
    fs.appendFile('name.txt',newName, (err, data) => {
      res.writeHead(302, {
        location: '/'
      })
      return res.end()
    })
  }


})


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
