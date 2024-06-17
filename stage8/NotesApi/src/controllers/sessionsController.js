

    const knex = require("../database/knex");
    const { compare } = require("bcryptjs"); 
    const AppError = require("../utils/AppError");
    const authConfigs = require("../configs/auth");
    const { sign } = require("jsonwebtoken");
    
   

    class sessionsController{
        async create(request, response) {
            const { email, password } = request.body;

            const user = await knex("users").where({email}).first();
            
            if(!user){
                throw new AppError("Email e/ou senha incorreta", 401);
            }

            const matchPassword = await compare(password, user.password);

            if(!matchPassword){
                throw new AppError(`Email e/ou senha incorreta`, 401);
            }

            const { expiresIn, secret } = authConfigs.jwt;

            const token = sign({}, secret, {
                subject: 
                String(user.id),
                expiresIn,
            })
            

            return response.json({ user, token });
        }
    }

    module.exports = sessionsController;