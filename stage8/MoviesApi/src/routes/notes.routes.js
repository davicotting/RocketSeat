
const {Router} = require("express");

const NotesController = require("../controllers/notesController.js");
const notesController = new NotesController();

const notesRoutes = Router();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/:user_id", notesController.show);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;