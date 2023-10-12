    
    // variaveis: 

    const screen1 = document.querySelector(".screen1")
    const screen2 = document.querySelector(".screen2")
    const inputNumber = document.querySelector("#inputNumber");
    const btnToTry = document.querySelector("#btnToTry");
    const btnToBack = document.querySelector("#btnToBack");
    let randomNumber = Math.round(Math.random() * 10); 
    let attempts = 1;

    // Eventos:

     btnToTry.addEventListener('click', clickToTry);
     btnToBack.addEventListener('click', backToMenu);

     // para verificar se na class list da screen1 tem a classe hide se tiver e o enter for pressionado ele alterna para outra pagina. 
     
     document.addEventListener('keydown', function(e){
        if(e.key == 'Enter' && screen1.classList.contains("hide")){
            togglePage();
        }
     })
    
    // Funcoes:



    function generateNewRandomNumber(){
        randomNumber = Math.round(Math.random() * 10);
    }

        function clickToTry(event){
            event.preventDefault(); // nao faca o padrao ( enviar o formulario no caso, pois o html iria enviar formulario ao inves de rodar o meu script)

            if(Number(inputNumber.value) == randomNumber){

               togglePage()
    
                let screen2h2 = document.querySelector(".screen2 h2")
                 screen2h2.innerText  = `voce acertou em ${attempts} tentativas`;
            }

            attempts++; // para cada click a variavel de tentativas incrementa +1;

        }

        function backToMenu() {

            inputNumber.value = ''; // valor do input vai ser limpado ao voltar

            attempts = 1; // numero de tentativas foi resetado

    	    togglePage();
            
            generateNewRandomNumber(); // novo numero ao retornar aos menus

        }

        function togglePage(){
            screen1.classList.toggle("hide"); // classe hide adicionada na tela 1
            screen2.classList.toggle("hide"); // removendo a classe hide da tela 2
        }
          