
    const express = require("express");


    const app = express();

    app.use(express.json());

    

    app.post("/products", (request, response) => {
        
        const { product, material, keyBoardSwitch } = request.body;

        response.json(`${product}, Switch ${keyBoardSwitch}, Material utilizado: ${material}`);

    })

    const PORT = 7777;
    
   

    app.listen(PORT, () => console.log(`App is running at port ${PORT}`));