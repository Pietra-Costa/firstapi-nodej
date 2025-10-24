//importando modulo http
const http = require('http')

//imporatacao dos mocks
const users = require('../src/mocks/users')

// funcao pra criar o servidor
const server = http.createServer((req, res) => {

    //console que ira mostrar dados da requisicao, nesse caso o método e dps o endpoint (/users, /carros)
    console.log(`Request method: ${req.method} | Endpoint: ${req.url}`)

    if (req.url === '/users' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        //o end sempre precisa retornar uma string, por isso usamos o stringfy
        res.end(JSON.stringify(users))
    } else {
        //else do 404
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>404 - NOT FOUND</h1>')
    }


})

//'ligando' o server na porta 3000
server.listen(3000, () => {
    console.log('Server started')
})