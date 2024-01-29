// import http module
const http = require('http')
// create a port
const port = 3000
// create a server
const server = http.createServer((req, res) => {

  res.write("Welcome to my http server.")
  res.end()

})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
