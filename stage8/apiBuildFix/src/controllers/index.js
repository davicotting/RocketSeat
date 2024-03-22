    const AppError = require("../utils/AppError");
    
    const { hash, compare} = require("bcryptjs")
     
    const databaseConnection = require("../database/sqlite");

    class UserControllers{

        /* 
        
        essa classe e a parte inteligente do projeto,
        aqui a processaremos todas as requisicoes do usuario.
        
        */

        index(){

            // mostrar varios registros. - get method.

        }

        show(){

            // mostrar um registro em especifico. - get method.


        }


        async create(request, response){

            // cria um registro



            const { name, email, password } = request.body;

            const hashedPassword = await hash(password, 8);

            const database = await databaseConnection();

            const checkIfUserExists = await database.get(`SELECT * FROM users WHERE email = (?)`, [email]);

            if(checkIfUserExists){
                throw new AppError(`Ixi deu ruim! Este email ja esta sendo usado.`, 409);
            }

            await database.run(
            `
            INSERT INTO users 
            (name, email, password) 
            VALUES (?, ?, ?)`, 
            [name, email, hashedPassword]);

            return response.status(201).json();

                
        }   


        delete(){

            // deleta um registro - delete method.

        }

        async update(request, response){

            // atualiza um registro - put method.

            const { name, email, new_password, old_password } = request.body;

            const { id } = request.params;

            const database = await databaseConnection();

            const user = await database.get(`SELECT * FROM users WHERE id = (?)`, [id]);

            if(!user){
                throw new AppError(`Ixi deu ruim! o usuario com o id: ${id} nao existe.`, 404);
            }

            const checkIfEmailExists = await database.get(`SELECT * FROM users WHERE email = (?)`, [email]);


            if(checkIfEmailExists && checkIfEmailExists.id !== id){
                throw new AppError("Ixi deu ruim, este email ja esta em uso.", 409);
            }

            if(new_password && !old_password){
                throw new AppError(`Ixi, deu ruim! A senha antiga precisa ser informada.`);
            }

            if(new_password && old_password){
                const checkingOldPassword = await compare(old_password, user.password);

                if(!checkingOldPassword){
                    throw new AppError(`Ixi deu ruim! A senha informada nao eh a mesma senha que a antiga`, 409);
                }

                
                user.password = await hash(new_password, 8);
            }


            // ERRO AQUI !!

           user.name = name ?? user.name;
           user.email = email ?? user.email;

           await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?
           `, [user.name, user.email, user.password, id]);


            return response.status(200).json();
        }


    }

    module.exports = UserControllers;
