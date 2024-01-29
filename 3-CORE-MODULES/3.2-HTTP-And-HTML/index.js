const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

  res.statusCode = 200 // success status code
  res.setHeader('Content-Type', 'text/html') // set the content type to html

  res.end(`
    <h1>Hello! This is my first server with HTTP and HTML</h1>
  `)

})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
