     require("express-async-errors");

     const migrationseRunner = require("./database/migrations/index");

     const AppError = require("./utils/AppError");

     const express = require("express");

     const routes = require("./routes");

     const app = express();

     migrationseRunner();

     app.use(express.json());

     app.use(routes);

     

     app.use((error, request, response, next) => {
          if(error instanceof AppError){
               return response.status(error.statusCode).json({
                    status: error.statusCode,
                    message: error.message
               })
          }

          console.error(error);

          return response.status(500).json({
               status: "error",
               message: "Internal server error"
          })
     })


     const PORT = 5555;

     app.listen( PORT, () => console.log(`app is running on port ${PORT}`));




    

