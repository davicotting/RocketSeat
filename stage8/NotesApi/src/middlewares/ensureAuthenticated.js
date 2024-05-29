
    const authConfigs = require("../configs/auth");
    const AppError = require("../utils/AppError");
    const { verify } = require("jsonwebtoken");

    function ensureAuthenticated(request, response, next){
        const authHeader = request.headers.authorization;

        if(!authHeader){
            throw new AppError("JWT token nao informado!", 401);
        }

        const [, token ] = authHeader.split(" "); // token é esplitado, mas sem o bare

        try{

                const { sub: user_id }  = verify(token, authConfigs.jwt.secret); // verificamos se o token é um token válido.

        return request.user = {
            id: Number(user_id)
        }

        // acima nos criamos uma nova propriedade nas nossas requisicoes 

        return next();

        }catch{
            throw new AppError("JWT token inválido!", 401)
        }


    }

    module.exports = ensureAuthenticated;