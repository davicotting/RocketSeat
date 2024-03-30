
    const UserControllers = require("../controllers");

    const userControllers = new UserControllers(); // here

    const { Router } = require("express");  // here

    const userRoutes = Router();

    userRoutes.post("/", userControllers.create);
    userRoutes.post("/:id", userControllers.update);

    module.exports = userRoutes;