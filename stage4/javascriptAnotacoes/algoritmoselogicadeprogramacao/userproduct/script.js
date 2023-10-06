    let options;
    let item;
    let items = [];
    let algorithmStatus = true;

    do{
         options =  Number(prompt("Escolhas uma das opcoes a seguir \n 1. Inserir um item na lista. \n 2. Visualizar itens da lista. \n 3. Finalizar o algoritmo."));     
         console.log(options);

         switch(options)
         {
            case 1:
                item = prompt("Digite o item que deseja adicionar na lista.");
                items.push(item);
            break;
            case 2:
                if(items.length > 0){
                alert(`${items.join(", ")}.`);
                break;
                } else{
                    alert(`Nao existem itens cadastrados`);
                    break;
                }
            case 3:
                alert("Fim do algoritmo")
                algorithmStatus = false;
            break;
            default:
                alert(`${options} eh uma opcao invalida! Tente novamente.`)
                break;
        }
        
}while(algorithmStatus == true);