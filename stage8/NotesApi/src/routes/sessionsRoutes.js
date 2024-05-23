
    const { Router } = require("express");

    const SessionsController = require("../controllers/sessionsController");

    const sessionsController = new SessionsController();

    const SessionsRoutes = Router();

    SessionsRoutes.post("/", sessionsController.create);

    module.exports = SessionsRoutes;

