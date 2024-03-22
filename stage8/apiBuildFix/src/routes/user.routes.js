

    const { Router } = require("express");

    const UserControllers = require("../controllers/index");

    const userControllers = new UserControllers();

    const usersRoutes = Router();


    usersRoutes.post("/",  userControllers.create);
    usersRoutes.put("/:id", userControllers.update);

    module.exports = usersRoutes;