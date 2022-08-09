const http = require('http')
const fs = require('fs')

const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('src/index.html').pipe(res)
})

console.log('Server Listening on: ', PORT);
server.listen(process.env.PORT || PORT)