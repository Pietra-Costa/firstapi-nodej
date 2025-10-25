//Controllers é onde iremos guardar as regras de negócio

//imporatacao dos mocks
const users = require('../mocks/users')

module.exports = {
    listUsers(req, res){
        res.writeHead(200, {'Content-Type': 'application/json'})
        //o end sempre precisa retornar uma string, por isso usamos o stringfy
        res.end(JSON.stringify(users))
    }
}