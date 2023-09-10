const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/'){

    res.write('intro')
    res.end() 
  }
  else if(req.url === '/about'){
    res.write('very cool looking about page')
    res.end()
  }
  else if(req.url === '/features'){
    res.write('features here')
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
