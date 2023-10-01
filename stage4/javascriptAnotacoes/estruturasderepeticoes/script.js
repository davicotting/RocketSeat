    // Estrutura de repeticao

    // for

    for(let i = 0; i <= 10; i++){
       
        if(i === 6){
            continue; // ignora e continua 
        }

        console.log(i);
    };

    // while

    let y = 0;
    while(y <= 20){
        console.log(y);
        y++;
    }

    // For of | para percorrer strings e arrays

    // array - 

    let listadenomes = ['wozniak', 'jobs', 'gates']

    for(let nome of listadenomes){
        console.log(nome);
    }

    // string -

    let meuNome = 'Davi Thomeny Cotting';

    for(let separadoporcaractere of meuNome) {
        console.log(separadoporcaractere);
    }

    // for in | Percorre um objeto.

    const person = {
        name: 'Davi',
        lastname: 'Cotting',
        age: 18,
        notAfraid: true
    }

    for(let propriedade in person){
        // console.log(propriedade) -- acessando a propridade apenas
        console.log(person[propriedade]); // valor da propriedade
    }


