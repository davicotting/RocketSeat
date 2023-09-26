    /* Tipos de variaveis */

    // const - a variavel matem o seu valor imutavel ou seja sempre o com mesmo valor

    // alem disso seu escopo nao é do tipo global

    const nome = "Davi Cotting";

    nome = "daniel";

     console.log(nome);

    // let - Esse tipo de variavel é parecido com o tipo var, no sentido que seu valor nao é constante, porem seu escopo é de bloco

    let Name = "Davi";

    Name = "Javascript";

    console.log(Name);

    {
        Name = "valor recebido no bloco"
        console.log(Name)
    }

    console.log(Name)

    // var - menos utilizada, pois devido seu escopo ser global, ele ignora escopos e seu valor atua em todos os escopos do algoritmo. Alem de ser possivel alterar seu valor durante a solucao do problema.

    var linguagem = "ingles";

    console.log(linguagem)

    {
        linguagem = "portugues"
        console.log(linguagem);
    }

    linguagem = "espanhol";
    console.log(linguagem);






