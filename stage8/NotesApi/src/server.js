    
    require("express-async-errors");

    const migrationsRunner = require("./database/migrations");

    const AppError = require("./utils/AppError.js");

    const express = require("express");

    const routes = require("../src/routes");

    const server = express();

    server.use(express.json());

    migrationsRunner();

    server.use((error, request, response, next) => {
        	if(error instanceof AppError){
                return response.status(error.statusCode).json({
                    status: error.statusCode,
                    message: error.message
                })
            }

            console.error(error);

            return response.status(500).json({
                status: "error",
                message: "Internal server error :("
            });
    });


    const PORT = 4545;

    server.use(routes);

    server.listen(PORT, () => console.log(`RocketNotes server is running on port ${PORT}`));

    