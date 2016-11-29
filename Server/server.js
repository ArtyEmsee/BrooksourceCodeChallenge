const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('server successfully created, path hit: ', req);
})

server.listen(PORT, function() {
  console.log(`server listening on http://localhost:${PORT}`)
})