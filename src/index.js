//importando modulo http
const http = require('http')

const routes = require('../src/routes')

// funcao pra criar o servidor
const server = http.createServer((req, res) => {

    const route = routes.find((routeObj) => (
        routeObj.endpoint === req.url && routeObj.method === req.method
    ))

    if(route){
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