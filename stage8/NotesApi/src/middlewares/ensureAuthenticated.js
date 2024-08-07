    const AppError = require("../utils/AppError");
    const authConfigs = require("../configs/auth");
    const { verify } = require("jsonwebtoken");

    function ensureAuthenticated(request, response, next){
        const authHeader = request.headers.authorization;

        if(!authHeader){
            throw new AppError("Ixi deu ruim! token nao gerado ou foi expirado.", 401);
        }

        const [, token] = authHeader.split(" ");

        try{
            const { sub: user_id } = verify(token, authConfigs.jwt.secret); 

            request.user = {
                id: Number(user_id),
            }

            return next();

        }catch{
            throw new AppError("Ixi deu ruim, seu token é inválido!", 401);
        }
    }

    module.exports = ensureAuthenticated;

