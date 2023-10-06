
    let aluno = prompt("Informe seu nome: ");
    let primeiranota = prompt("Informe a primeira nota: ");
    let segundanota = prompt("Informe a segunda nota: ");
    let terceiranota = prompt("Informe a terceira nota: ");

    let media = ((Number(primeiranota) + Number(segundanota) + Number(terceiranota)) / 3).toFixed(2);

    if(media > 0 && media >= 7){
        alert(`Parabens ${aluno}, sua media: ${media}`);
    } else if(media < 3){
        alert(`Voce foi reprovado! sua media: ${media}`)
    } else{
        alert(`${aluno}, sua media: ${media} Infelizmente voce nao conseguiu antigir a media, da proxima voce consegue. `);
    }


