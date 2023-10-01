
    // switch 

    function temperatura(temperature) {
    
        switch(true){
            case temperature <= 35.0:
                console.log(`Sua temperatura: ${temperature}ºC, hipotermia! procure um casaco e uma bebida quente.`);
                break;
            case temperature >= 36.0 && temperature <= 37.5:
                console.log(`Sua temperatura: ${temperature}ºC, Otimo! sua temperatura esta normal.`);
                break;
            case temperature >= 37.6 && temperature <= 39.5:
                console.log(`Sua temperatura atual: ${temperature}ºC, Ruim! Voce esta com febre, procure ajuda medica para estabilizar a temperatura corporal`);
                break;
            case temperature >= 39.6 && temperature <= 41.0:
                console.log(`Sua temperatura atual: ${temperature}ºC, Perigo! Voce esta com febre alta, procure um hospital imediatamente.`);
                break;
            case temperature >= 41.1:
                console.log(`Sua temperatura: ${temperature}ºC, Hipertermia! Voce possivelmente morrera em breve!`);
            break;
            default:
                console.log('Erro.')
                break;
        }
    }

    temperatura(36);

    function DigiteSeuNome(nome) {
        if(nome === ''){
            throw new Error('Campo de nome obrigatorio'); // por que isso nao dispara tambem :(
        }else{
            console.log(nome);
        }
    }
    
    try{
        DigiteSeuNome(''); // campo vai como vazio pra testar o erro.
    }catch(error){
        console.log(error); // so isso dispara <<<<
    }

    console.log('aplicacao continua');

    
