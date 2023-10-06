    const correctNumber = Math.ceil(Math.random() * 10);
    let numberCheck;
    let contador = 0;
    
    

    do{

        numberCheck = prompt("chute um numero de 1 a 10");
        const validatenumberCheck = Number(numberCheck);
        contador++;

        if(validatenumberCheck < correctNumber){
            alert(`${validatenumberCheck} esta muito abaixo! chute para cima.`);
        } 
        else if (validatenumberCheck > correctNumber) {
            alert(`${validatenumberCheck} esta muito acima! chute para baixo.`);
        } 
        else if (validatenumberCheck === correctNumber){
            alert(`${validatenumberCheck} era o chute certo! Voce acertou na ${contador}a tentativa.`);
            break;
        }
    }while(true)