const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){

    res.write('welcome home sweet home alabama.')
    res.end() 
  }
  else if(req.url === '/about'){
    res.write('welcome home sweet home about page.')
    res.end()
  }
  else if(req.url === '/features'){
    res.write('alabama features here')
    res.end()
  }
  else{
    res.write(`
    <h1>Error 499</h1>
    <h1>We ran into some uncalculated error</h1>
    <a href='/'>Home</a>`)
    res.end()
  }
})

server.listen(500)