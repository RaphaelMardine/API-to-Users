const http = require('http')

const port = 8080
const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h1>Home Page</h1>')
  }
  if (req.url === '/users') {
    const users = [
      { name: 'John Doe', email: 'johndoe@adkpsaoj.com' },
      { name: 'Raphael', email: 'rapf;ckcsj' }
    ]
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(JSON.stringify(users))
  }
})

server.listen(port, () => console.log(`Rodando na porta ${port} `))
