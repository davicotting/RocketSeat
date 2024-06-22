
    const uploadConfigs = require("../configs/upload");
    const fs = require("fs");
    const path = require("path");

    class diskStorage{
        async save(file){
            await fs.promises.rename(
                path.resolve(uploadConfigs.TMP_FOLDER, file),
                path.resolve(uploadConfigs.UPLOADS_FOLDER, file)
            );
            return file;
        }

        async delete(file){
            const filePath = path.resolve(uploadConfigs.UPLOADS_FOLDER, file);

            try{

                await fs.promises.stat(filePath);

            }catch{

                return;

            }

            await fs.promises.unlink(filePath)

        }
    }

    module.exports = diskStorage;