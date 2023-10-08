    
    let verificador = true 
    let listaDeAlunos = [];
    let nome;
    let primeiraNota;
    let segundaNota;

    do{

    // Surgem novas opcoes.

    let opcao = Number(prompt(`Escolha uma das opcoes:\n1. Inserir aluno \n2. Visualizar alunos\n3. Finalizar algoritmo`));


    switch(opcao){
    case 1:
         nome = prompt(`Qual o seu nome?`);
         primeiraNota = Number(prompt(`Informe sua primeira nota:`));
         segundaNota = Number(prompt(`Informe sua segunda nota:`));

        let aluno = {
            nome: nome,
            primeiraNota: primeiraNota, 
            segundaNota: segundaNota
        };

        listaDeAlunos.push(aluno);

        alert(`${nome} foi adcionado a lista com sucesso!`);

    break;

    case 2:

    let media = function(notaUm, notaDois){
        mediafinal = (notaUm + notaDois) / 2 ;

        if(mediafinal >= 7){
            return `Aprovado! Sua media: ${mediafinal}.`
        } else{
            return `Reprovado! Sua media: ${mediafinal}.`
        }
    }

    for(let i = 0; i < listaDeAlunos.length; i++){
        alert(`A Media do aluno(a): ${listaDeAlunos[i].nome} \n${media(listaDeAlunos[i].primeiraNota, listaDeAlunos[i].segundaNota)}`);
    }
    break;

        case 3:
            verificador = false;
        break;
        }

}while(verificador == true);
