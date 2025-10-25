//importando modulo http
const http = require('http')
const url = require('url')

const routes = require('../src/routes')

// funcao pra criar o servidor
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === parsedUrl.pathname && routeObj.method === req.method
    ))

    if(route){
        req.query = parsedUrl.query
        route.handler(req, res)
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>404 - NOT FOUND</h1>')
    }

})

//'ligando' o server na porta 3000
server.listen(3000, () => {
    console.log('Server started')
})