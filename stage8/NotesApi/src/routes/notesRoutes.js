
    const NotesControllers = require("../controllers/notesController");

    const notesController = new NotesControllers;

    const Router = require("express");

    const notesRoutes = Router();

    notesRoutes.post("/:user_id", notesController.create);

    module.exports = notesRoutes;