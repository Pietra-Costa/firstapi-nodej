//Controllers é onde iremos guardar as regras de negócio

//imporatacao dos mocks
const users = require('../mocks/users')

module.exports = {
    listUsers(req, res){
        const {order} = req.query
        const sortedUsers = users.sort((a,b ) =>{
            if(order === 'desc'){
                return a.id < b.id ? 1 : -1
            }
            return a.id > b.id ? 1 : -1
        })
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    },

    getUserById(req, res){
        const {id} = req.params
        const user = users.find((user) => 
            user.id === Number(id)
        )

        if(!user){
            res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>404 - USER NOT FOUND</h1>')
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(user, id))
    }
}