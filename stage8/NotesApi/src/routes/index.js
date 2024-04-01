    
    const { Router } = require('express');  // here
    const usersRoutes = require('./userRoutes');
    const notesRoutes = require('./notesRoutes');
    const tagsRoutes = require("./tagsRoutes");

    const routes = Router();
    routes.use('/users', usersRoutes);
    routes.use('/notes', notesRoutes);
    routes.use('/tags', tagsRoutes);

    module.exports = routes;