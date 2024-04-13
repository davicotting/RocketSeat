
    const { Router } = require("express");

    const routes = Router();

    const userRoutes = require("./user.routes.js");
    const notesRoutes = require("./notes.routes.js");
    const tagsRoutes = require("./tags.routes.js");

    routes.use("/users", userRoutes);
    routes.use("/notes", notesRoutes);
    routes.use("/tags", tagsRoutes);

    module.exports = routes;