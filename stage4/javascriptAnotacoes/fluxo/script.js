
    // switch 

    function temperatura(temperature) {
    
        switch(true){
            case temperature <= 35.0:
                console.log(`Sua temperatura: ${temperature}, hipotermia! procure um casaco e uma bebida quente.`);
                break;
            case temperature >= 36.0 && temperature <= 37.5:
                console.log(`Sua temperatura: ${temperature}, Otimo! sua temperatura esta normal.`);
                break;
            case temperature >= 37.6 && temperature <= 39.5:
                console.log(`Sua temperatura atual: ${temperature}, Ruim! Voce esta com febre, procure ajuda medica para estabilizar a temperatura corporal`);
                break;
            case temperature >= 39.6 && temperature <= 41.0:
                console.log(`Sua temperatura atual: ${temperature}, Perigo! Voce esta com febre alta, procure um hospital imediatamente.`);
                break;
            case temperature >= 41.1:
                console.log(`Sua temperatura: ${temperature}, Hipertermia! Voce possivelmente morrera em breve!`);
            break;
            default:
                console.log('Erro.')
                break;
        }
    }

    console.log(temperatura(40));