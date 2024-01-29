const url = require('url')

const adress = 'http://localhost:3000/catalog?name=book&price=20'
const parsedUrl = new url.URL(adress)
// Host: the host name and port
console.log(parsedUrl.host)
// Pathname: the path after the host
console.log(parsedUrl.pathname)
// Search: the query string
console.log(parsedUrl.search)
// SearchParams: the query string as an object
console.log(parsedUrl.searchParams)
// Get the value of a query string
console.log(parsedUrl.searchParams.get('name'))