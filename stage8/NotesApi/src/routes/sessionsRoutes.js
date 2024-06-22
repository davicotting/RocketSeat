
    const { Router } = require("express");

    const sessionsRoutes = Router();

    const SessionsController = require("../controllers/sessionsController");

    const sessionsController = new SessionsController();

    sessionsRoutes.post("/", sessionsController.create); // nao esquecer da duvida aqui!

    module.exports = sessionsRoutes;