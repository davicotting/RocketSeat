    require("express-async-errors");
    const express = require("express");
    const app = express();
    const routes = require("./routes");
    const AppError = require("./utils/AppError.js");
    const database = require("./database/sqlite");

    const PORT = 2121;

    app.use(express.json());
    app.use(routes);

    database();

    app.use((error, request, response, next) => {
        if(error instanceof AppError){
            return response.status(error.statusCode).json({
                status: "error",
                message: error.message
            })
        }

        console.error(error);

        return response.status(500).json({
            status: "error",
            message: "Internal server error."
        });
        
    });

    app.listen(PORT, console.log(`RocketMovies is running on port ${PORT}`));



