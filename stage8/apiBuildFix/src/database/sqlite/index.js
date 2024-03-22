
    const sqlite = require("sqlite"); // "conector" do sqlite3 (driver).
    const sqlite3 = require("sqlite3"); // driver.
    const path = require("path"); // resove a navegacao de diretorios para diferentes sistemas operacionais.


    async function databaseConnection(){
        const database = await sqlite.open({
            filename: path.resolve(__dirname, "..", "database.db"),
            driver: sqlite3.Database
        })

        return database;
    }

    module.exports = databaseConnection;
    
