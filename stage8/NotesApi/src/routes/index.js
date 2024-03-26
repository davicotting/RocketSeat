    
    const Router = require("express");

    const routes = Router();

    const userRoutes = require("./userRoutes");
    const notesRoutes = require("./userRoutes");

    routes.use("/users", userRoutes);
    routes.use("/notes", notesRoutes);

    module.exports = routes;