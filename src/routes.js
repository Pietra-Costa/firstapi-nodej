
const UserController = require('./controllers/UserController')

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        //handler - funcao q quero executar quando essa rota for chamada - n executa no array
        handler: UserController.listUsers
    }
]