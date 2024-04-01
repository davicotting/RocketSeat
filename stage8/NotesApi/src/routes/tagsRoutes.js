
    const TagsControllers = require("../controllers/TagsControllers");

    const tagsControllers = new TagsControllers(); 

    const { Router } = require("express"); 

    const tagsRoutes = Router();

    tagsRoutes.get("/:user_id", tagsControllers.index);

    module.exports = tagsRoutes;