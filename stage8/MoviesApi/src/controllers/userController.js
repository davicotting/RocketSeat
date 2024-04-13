    
    const knex = require("../database/knex");
    const AppError = require("../utils/AppError.js");
    const databaseConnection = require("../database/sqlite");
    const { hash, compare } = require("bcryptjs");
    
    class UserController{

        async create(request, response){
            const {name, email, password} = request.body;

            const database = await databaseConnection();

            function validarEmail(email) {
                var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            }

           if(!validarEmail(email)){
                throw new AppError(`Ixi deu ruim! Insira um email válido.`, 400);
           }

           const checkingIfEmailHasBeenUsed = await database.get("SELECT * FROM user WHERE email = (?)", [email])
           
           if(checkingIfEmailHasBeenUsed){
                throw new AppError(`Ixi deu ruim! O email já está sendo usado.`, 409);
           }

           if(checkingIfEmailHasBeenUsed == undefined){

                const hashedPassword = await hash(password, 8);

                database.run(
                `INSERT INTO user 
                (name, email, password) 
                VALUES (?, ?, ?)`, 
                [name, email, hashedPassword]);

                return response.status(201).json();
           } 
        }

        async update(request, response){
            const {name, email, current_password, new_password} = request.body;
            const { id } = request.params;

            
            const database = await databaseConnection();

            const user = await database.get(`SELECT * FROM user WHERE id = (?)`, [id]);

            if(!user){
                throw new AppError(`Ixi deu ruim! O id: ${id} nao está registrado.`, 404)
            }

            const checkIfEmailIsAvalible = await database.get(`SELECT * FROM user WHERE email = (?)`, [email]);

            if(checkIfEmailIsAvalible){
                throw new AppError(`Ixi deu ruim! O email já está em uso.`, 409);
            }

            if(!new_password){
                throw new AppError(`Ixi deu ruim! Informe sua nova senha.`, 400);
            }

            if(!current_password){
                throw new AppError(`Ixi deu ruim! Informe sua senha atual`, 400);
            }

           

            
                const checkPassword = await compare(current_password, user.password);

                if(!checkPassword){
                    throw new AppError(`Ixi deu ruim! A senha atual da sua conta nao é essa.`, 401);
                }

                const hashedPassword = await hash(new_password, 8);

                

            const notNullishEmail = email ?? user.email ;
            const notNullishName = name ?? user.name;


            await database.run(`
            UPDATE user
            SET name = ?, email = ?, password = ?
            WHERE id = ?`, 
            [notNullishName, notNullishEmail, hashedPassword, id]);
            
            return response.status(201).json({message: "usuario foi atualizado com sucesso!"});
        }
        
    }

    module.exports = UserController;