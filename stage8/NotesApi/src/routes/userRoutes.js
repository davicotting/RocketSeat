
    const UserControllers = require("../controllers");

    const userControllers = new UserControllers;

    const Router = require("express");

    const userRoutes = Router();

    userRoutes.post("/", userControllers.create);
    userRoutes.post("/:id", userControllers.update);

    module.exports = userRoutes;