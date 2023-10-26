
    // Variaveis

    const screen1 = document.querySelector(".screen1");
    const screen2 = document.querySelector(".screen2");
    const cookieBefore = document.querySelector("#cookieBefore");
    const doNewCookie = document.querySelector("#doNewCookie");
    const cookieIsOpened = document.querySelector("#cookieIsOpened")

    let AleatoryPhrase = Math.round(Math.random() * 98);

    const cookiePhrases = [
    "O sucesso está no horizonte, continue sua jornada.",
    "Acredite em si mesmo e os outros seguirão.",
    "A paciência é a chave para a sabedoria.",
    "A criatividade é a maior riqueza.",
    "A vida é cheia de surpresas, esteja preparado.",
    "Aprenda com o passado e construa o futuro.",
    "O amor é a resposta para todas as perguntas.",
    "Siga seus sonhos e nunca olhe para trás.",
    "A harmonia está dentro de você.",
    "O otimismo é a chave para a felicidade.",
    "A gentileza é a linguagem universal do amor.",
    "Cada dia é uma nova oportunidade.",
    "Aprenda com seus erros e cresça mais forte.",
    "A sorte favorece os audazes.",
    "A simplicidade é a essência da verdade.",
    "Seja grato pelo que você tem.",
    "A honestidade é a melhor política.",
    "O amor está sempre ao seu redor.",
    "O respeito é o alicerce de todas as relações.",
    "A vida é uma aventura, aproveite-a.",
    "Nunca é tarde demais para recomeçar.",
    "A perseverança leva à vitória.",
    "O conhecimento é o caminho para o poder.",
    "A gratidão transforma o comum em extraordinário.",
    "Sua criatividade é um presente único.",
    "O sucesso começa com a autoconfiança.",
    "A sorte é o que acontece quando a preparação encontra a oportunidade.",
    "A coragem é a primeira qualidade humana.",
    "O perdão é o caminho para a cura.",
    "A sabedoria começa com a reflexão.",
    "A humildade é a chave para o crescimento.",
    "O amor é a única riqueza que cresce quando compartilhada.",
    "A verdade sempre encontra seu caminho.",
    "A felicidade está em suas mãos.",
    "Aprenda a viver o momento presente.",
    "A alegria está nas pequenas coisas da vida.",
    "A confiança em si mesmo é o primeiro passo para o sucesso.",
    "Siga sua intuição, ela raramente falha.",
    "A sabedoria é mais valiosa do que o ouro.",
    "O mundo é o que você faz dele.",
    "O sorriso é a chave para o coração das pessoas.",
    "A simplicidade é a forma mais sofisticada de viver.",
    "A amizade é um tesouro que não tem preço.",
    "A fé move montanhas.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A vida é uma jornada, não um destino.",
    "A resiliência supera a adversidade.",
    "A compaixão é a base da humanidade.",
    "A alegria está em compartilhar.",
    "O amor é o remédio para todas as feridas.",
    "A honestidade é o caminho mais curto para a paz.",
    "A beleza está nos olhos de quem vê.",
    "A sabedoria está no silêncio.",
    "O otimismo é a chave para a alegria.",
    "A empatia é o antídoto para o ódio.",
    "A perseverança é a mãe do sucesso.",
    "A sorte sorri para os persistentes.",
    "A alegria está em compartilhar o que temos.",
    "A vida é uma obra de arte, pinte-a com cores vivas.",
    "A gentileza é uma linguagem universal.",
    "Aprenda com o ontem, viva o hoje, sonhe com o amanhã.",
    "A felicidade está nas coisas simples da vida.",
    "O amor é o combustível da vida.",
    "A verdade é o alicerce da confiança.",
    "A honestidade é o melhor legado.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "A alegria está na jornada, não no destino.",
    "A humildade é o portal para a grandeza.",
    "A sorte favorece aqueles que trabalham duro.",
    "A fé move montanhas e corações.",
    "O amor é a chave para a compreensão.",
    "A perseverança é o segredo do êxito.",
    "A simplicidade é a verdadeira sofisticação.",
    "A empatia constrói pontes.",
    "A honestidade é a melhor política.",
    "O respeito é o fundamento de todas as relações.",
    "A paciência é a mãe da virtude.",
    "A vida é uma dádiva, aproveite-a.",
    "A gratidão transforma o suficiente em mais do que suficiente.",
    "O amor é a resposta, não importa qual seja a pergunta.",
    "A simplicidade é a forma de beleza mais pura.",
    "A gentileza é o idioma do coração.",
    "A criatividade é a chama que acende a inovação.",
    "O sucesso começa com a decisão de tentar.",
    "A coragem é a resistência ao medo.",
    "O perdão é o caminho para a paz interior.",
    "A confiança é a base de qualquer relacionamento.",
    "A gratidão é a atitude que muda tudo.",
    "A vida é um..."
    ];

       
    // Eventos 

    cookieBefore.addEventListener('click', cookieEvent);
    doNewCookie.addEventListener('click', backToMenus);

    // Funções

    function cookieEvent(){
        switchPage();

        cookieIsOpened.innerText = cookiePhrases[switchPhrase()];

    }

    function backToMenus(){
        switchPage();
        cookieIsOpened.innerText = "";
    }

    // trocar pagina

    function switchPage(){
        screen1.classList.toggle("hide");
        screen2.classList.toggle("hide");
    }

    function switchPhrase(){
        AleatoryPhrase = Math.round(Math.random() * cookiePhrases.length);
        return AleatoryPhrase;
    }
