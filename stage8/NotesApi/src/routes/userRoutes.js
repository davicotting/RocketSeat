
    const UserControllers = require("../controllers");

    const userControllers = new UserControllers();

    const { Router } = require("express");

    const userRoutes = Router();

    const authMiddleware = require("../middlewares/ensureAuthenticated");

    userRoutes.post("/", userControllers.create);
    userRoutes.put("/", authMiddleware, userControllers.update);

    module.exports = userRoutes;