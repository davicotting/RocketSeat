
    const migrations = require("./createUser");
    const columnPassword = require("./columnPassword"); // fiz merda! na hora de criar a migration da tabela users, esqueci de colocar o password
    const databaseConnection = require("../sqlite");
    const { error } = require("console");


    async function databaseRunner(){
        const schemas = [
            migrations,
        ].join("");

        databaseConnection().then(db => db.exec(schemas))
        .catch(console.error(error));
    }

    module.exports = databaseRunner;
