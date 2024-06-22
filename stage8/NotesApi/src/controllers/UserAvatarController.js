    const AppError = require("../utils/AppError");
    const knex = require("../database/knex");
    const DiskStorage = require("../providers/diskStorage");

    // concertar o bug da pasta tmp nao estar deletando os arquivos temporarios ao passar pra uploads.
    
    class UserAvatarController{
        async update(request, response){
            const AvatarFilename = request.file.filename;
            const user_id = request.user.id;
            const diskStorage = new DiskStorage();

            const user = await knex("users").where({id: user_id}).first();

            if(!user){
                throw new AppError(`Ixi deu ruim! Token inválido e/ou expirado.`, 401);
            }

            if(user.avatar){
                await diskStorage.delete(user.avatar);
            }

           const filename = await diskStorage.save(AvatarFilename);

           user.avatar = filename;

           await knex("users").update(user).where({id: user_id});

           return response.json(`Avatar atualizado com sucesso!\nInformacoes do usuario:\n${user}`, 201);


        }
    }

    module.exports = UserAvatarController;