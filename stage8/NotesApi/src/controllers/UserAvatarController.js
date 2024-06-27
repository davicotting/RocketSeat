    const knex = require("../database/knex");
    const AppError = require("../utils/AppError");
    const DiskStorage = require("../providers/diskStorage");
    class UserAvatarController{
        async update(request, response){
            const user_id = request.user.id;
            const avatarFileName = request.file.filename;

            const user = knex("users").where({is: user_id}).first();

            if(!user){
                throw new AppError("Ixi deu ruim! somente usuarios autenticados podem auterar suas proprias fotos de usuario!", 401);
            }

            const diskStorage = new DiskStorage();

            if(user.avatar){
                await diskStorage.deleteFile(user.avatar);
            }

            const fileName = await diskStorage.saveFile(avatarFileName);

            user.avatar = fileName;

            await knex("users").update({ avatar: fileName }).where({ id: user_id });

            return response.json({user}); 


        }
    }

    module.exports = UserAvatarController;
