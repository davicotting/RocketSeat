
    const { Router } = require('express')  // here

    const NotesController = require('../controllers/notesController'); 

    const notesRoutes = Router();  // here

    const notesController = new NotesController();

    notesRoutes.post('/:user_id', notesController.create);
    notesRoutes.get('/:id', notesController.show);
    notesRoutes.delete('/:id', notesController.delete);
    notesRoutes.get('/', notesController.index);


    module.exports = notesRoutes;