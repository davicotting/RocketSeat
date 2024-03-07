
    const { Router } = require("express");

    const usersRoutes = Router();

    usersRoutes.post("/users", (request, response) => {
        
        const {name, email, password} = request.body;
        response.send(`O post foi chamado! Usuario  nome: ${name}, email: ${email} e senha: ${password}`)
    })

    module.exports = usersRoutes;