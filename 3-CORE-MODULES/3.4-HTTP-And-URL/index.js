const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  // When the user visits, call the url.parse() method to parse the url
  const urlInfo = require('url').parse(req.url, true)
  // Search the query string for the name parameter
  const name = urlInfo.query.name

  res.statusCode = 200 // success status code
  res.setHeader('Content-Type', 'text/html') // set the content type to html
  // if name is not passed in the query string, show the form to the user
  if(!name){
    res.end(`
    <h1>Ops, its seen that you are not passing any name parameter in the query string.</h1>
    <p>What is your name?</p>
    <form method="GET">
      <input type="text" name="name"/>
      <input type="submit" value="SEND"/>
    </form>
  `)
  }else{
    res.end(`
    <h1>Hi, welcome dear ${name}!</h1>
  `)
  }

})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
