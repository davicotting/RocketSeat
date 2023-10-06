
    let firstNumber = prompt("Informe o primeiro numero");
    let secondNumber = prompt("Informe o segundo numero");

    const soma = (Number(firstNumber) + Number(secondNumber));
    const subtracao = (Number(firstNumber) -  Number(secondNumber));
    const multiplicacao = (Number(firstNumber) *  Number(secondNumber));
    const divisao = (Number(firstNumber) /  Number(secondNumber));
    const resto = (Number(firstNumber) %  Number(secondNumber));

    alert(`O resultado da soma entre ${firstNumber} e ${secondNumber} eh igual a ${soma}`);
    alert(`O resultado da subtracao entre ${firstNumber} e ${secondNumber} eh igual a ${subtracao}`);
    alert(`O resultado da multiplicacao entre ${firstNumber} e ${secondNumber} eh igual a ${multiplicacao}`);
    alert(`O resultado da divisao entre ${firstNumber} e ${secondNumber} eh igual a ${divisao}`);
    alert(`O resultado do resto da divisao entre ${firstNumber} e ${secondNumber} eh igual a ${resto}`);

    