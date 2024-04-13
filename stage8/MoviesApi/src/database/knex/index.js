
    const configs = require("../../../knexfile.js");
    const knex = require("knex");

    const connection = knex(configs.development);

    module.exports = connection;
