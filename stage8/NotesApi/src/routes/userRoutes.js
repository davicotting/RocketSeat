
    const UserControllers = require("../controllers");

    const userControllers = new UserControllers();

    const { Router } = require("express");

    const userRoutes = Router();

    const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

    const multer = require("multer");

    const uploadConfigs = require("../configs/upload");

    const upload = multer(uploadConfigs.MULTER);

    const UserAvatarController = require("../controllers/UserAvatarController");

    const userAvatarController = new UserAvatarController();
    
    userRoutes.post("/", userControllers.create);
    userRoutes.put("/", ensureAuthenticated, userControllers.update);
    userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);


    module.exports = userRoutes;