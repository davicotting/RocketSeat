
    // Inputs do usuario ->

    let firstNumber = Number(prompt(`Digite o primeiro numero:`));
    let secondNumber = Number(prompt(`Digite o segundo numero:`));

    // Operacoes -> 




    let soma = (primeironumero, segundonumero) => {
        const sum = primeironumero + segundonumero;
        return sum;
    };




    let sub = (primeironumero, segundonumero) => {
        const subtracao = primeironumero - segundonumero;
        return subtracao;
    };




    let mult = (primeironumero, segundonumero) => {
        const multiplicacao = primeironumero * segundonumero;
        return multiplicacao;
    };




    let divisao = (primeironumero, segundonumero) => {
        const div = primeironumero / segundonumero;
        return div;
    };




    let rest = (primeironumero, segundonumero) => {
        const resto = primeironumero % segundonumero;
        return resto;
    };


    // bloco de verificacao para checar se o numero eh impar ou par ( nao esquecer de chamar!!! )

    let numberVerify = (number) => {


        if(number % 2 == 0){
            return `${number} eh par`;
        } else{
          return `${number} eh impar`;
        }

    };

    // bloco de verificacao para checar se os dois numero recebidos no input sao iguais

    let isIdenticalNumber = (primeironumero, segundonumero) => {
        let response;

        if(primeironumero == segundonumero){
            response = `${primeironumero} eh igual a${segundonumero}`;
            return response;
        } else{
            response = `${primeironumero} nao eh igual a ${segundonumero}`;
            return response;
        }

    }



    // Chamando as minhas funcoes ->

    // chamado de funcao de soma >

    alert(`${firstNumber}` + " + " + `${secondNumber} = ${soma(firstNumber, secondNumber)}`);

    // chamando a funcao de sub >

    alert(`${firstNumber} - ${secondNumber} = ${sub(firstNumber, secondNumber)}`);

    // chamando a funcao de multiplicacao >

    alert(`${firstNumber} x ${secondNumber} = ${mult(firstNumber, secondNumber)}`);

    // chamando a funcao de divisao >

    alert(`${firstNumber} ÷ ${secondNumber} = ${divisao(firstNumber, secondNumber)}`);

    // chamando a funcao do resto de divisao >

    alert(`${firstNumber} ÷ ${secondNumber} tem o resto = ${rest(firstNumber, secondNumber)}`);

    // agora chamando as funcoes de verificacao >

    // chamando a funcao que verifica se o numero inserido pelo usuario eh impar ou par >

    alert(`${numberVerify(firstNumber)} e ${numberVerify(secondNumber)}`);

    // chamando a funcao que verifica se o o primeiro numero inserido pelo usuario eh identico ao segundo informado.

    alert(`${isIdenticalNumber(firstNumber, secondNumber)}`);





    