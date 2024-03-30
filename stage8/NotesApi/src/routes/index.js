    
    const { Router } = require('express')  // here

    const usersRoutes = require('./userRoutes')
    const notesRoutes = require('./notesRoutes')

    const routes = Router()
    routes.use('/users', usersRoutes)
    routes.use('/notes', notesRoutes)

    module.exports = routes