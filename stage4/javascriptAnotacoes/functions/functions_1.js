    
   //  // function expression - ou function anonymous

   //  const soma = function(number1, number2) {

   //     let total = number1 + number2;
   //     return total;

   //  }

    

   //  let valor1 = 500;
   //  let valor2 = 550;

   //  console.log(`O resultado da soma entre ${valor1} e ${valor2} tem o resultado: ${soma(valor1, valor2)}`)

   //  console.log('------------------------------');



   //   let subject; // isso esta indefinido

   //   function createThink() {
   //      subject = 'study';
   //      return subject;
   //   };

   //   console.log(subject); // undefined

   //   console.log(createThink()); // puxou do subject de cima e modificou em study logo subject = 'study' a partir de agora. ( pois sem parametros uma variavel local nao e criada).
    
   //   console.log(subject) // study 
   //   console.log(subject); // study


    

   //   const myName = function() {
      
   //       console.log("Davi Thomeny Cotting")

   //   }

   //   myName();

   //   // Arrow function

   //   const congrats = (texto) => {

   //    console.log('Antes do callback');


   //    texto()

   //    console.log("Depois do callback", texto)



   //   }

   //   congrats(
   //    () => {
   //       console.log("Estou em uma callback");
   //    } 

   //   );

   //   // callback - nada mais é do que: uma funcao que dentro dela seu parametro recebe uma funcao.

   //   // ou seja name na hora de receber um dado, reebeu um dado do tipo funcao, logo name passa a ser uma funcao.

   //   function callBack(name){

   //    console.log("Iniciando uma callback");
  
   //    name()
  
   //    console.log("Fim do algoritmo");
  
  
   //    }
  
   //    callBack(
   //       () => {
   //          console.log("dado da funcao recebida!")
   //       }
   //    )

   //    // Constructor

   //    function Person(name, age) {
   //       this.name = name;
   //       this.age = age;
   //       this.walk = function andando(){

   //          return "Estou andando!"

   //       }
   //    }

   //    const davi = new Person("Davi Thomeny Cotting", 18);
   //    const antonio = new Person("Antonio", 17)

   //    console.log(antonio.walk());
   //    console.log(davi.walk());

   //    let name = new String("Davizera")

   //    let string = "123";

   //    console.log(Number(string));


   //    let number = 123;

   //    console.log(String(number));

   //    let word = "Hello, World!";

   //    console.log(word.length)

   //    let numero = 123456789;

   //    console.log(String(numero).length);


   //    let frase = "seja bem vindo ao meu console, vou testar o upper e lower case";

   //    console.log(frase.toUpperCase());

   //    console.log(frase.toLowerCase());

   //    let phrase = "Steve Jobs e Mark Zuckerberg sao algumas de minhas inspiracoes";

   //    let array = phrase.split(" "); // quando o split varrer o vetor e encontrar o que eu utilizar como argumento ele remove e separa nossa string dentro do array

   //    console.log(array)

   //    let phraseWithUnderscore = array.join("-"); // detecta o espaco na frase e substitui pelo que for argumentado

   //    console.log(phraseWithUnderscore.toUpperCase());

   //    // verificar elementos dentro da String

   //    let testandoIncludes = "Estou precisando de um macbook";

   //    console.log(testandoIncludes.includes("macbook")); // retorna um valor booleano (case-sensitive) ou seja "e" != "E"

   //   // Construtor

   //   let arrayConstructor = new Array(10); //tamanho 


   //   console.log(arrayConstructor)

   //    console.log([
   //       "a", 
   //    {type: array},
   //     "c",
   //      function(){ 
   //       return "hello, world!"
   //    }
   //    ].length); // [...].length acessar o tamanho |  [...][3] acessar a posicao etc...

   //    let manipulacao = 'manipulacao';
   //    console.log(Array.from(manipulacao)) //Array.from(veriavel) separa toda a string em caracteres ou seja.. oi: vira "o" "i"






   //    let techs = ["html","css","JavaScript"];

   //    // adcionar item no final do array:

   //    techs.push("NodeJS");

   //   // adcionar no comeco:

   //   techs.unshift("SQL")

   //   // remove do final do array 

   //   techs.pop();

   //   console.log(techs)

   //   // remover do comeco

   //   techs.shift();

   //   // pegar somente alguns elementos de um array

   //   console.log(techs.slice(1, 3)) // posicao do elemento ate a posicao de onde quer selecionar

   //   // remover 1 ou mais itens em qualquer posicao de um array

   //   techs.splice(1, 2);

   //   // encontrar a posicao de um elemento no array

   //   let index = techs.indexOf("html") 
   //   console.log(index)
     

   let number = 1;

   console.log(false ? "deu true! fui executado." : "deu false! fui executado."); // se true ele executa a primeira linha, se false ele executa a segunda linha.

   console.log(number == 1 ? "sim, number e exatamente igual a 1." : "nao, number e literalmente 1 e qualquer coisa diferente disso nao e verdadeiro");

   // estanciando um novo objeto 

   let firstname = new String('Davi'); // objeto do tipo string
   let lastname = new String('Cotting'); // objeto do tipo string tambem
   console.log(firstname, lastname)

   // Operadores unarios

   const pessoa = {
      name: 'Davi',
      age: 18,
      sport: 'basketball',
      goodPlayer: true
   }

   delete pessoa.goodPlayer;

   console.log(pessoa);

   // Operadores aritmeticos

   // multiplicacao *
   
   console.log(5 * 5);

   // divisao /

   console.log(5 / 5);

   // soma +

   console.log(5 + 5);

   // subtraacao

   console.log(5 - 5);

   // resto de divisao

   console.log(11 % 3);

   // incremento ++

   let increment = 11;

   increment++ // incremento e sempre o valor + 1;

   console.log(increment) // ou seja... perceba que no console o valor de saida e 12 pois e o valor contido dentro de increment que no caso e 11 com o operador de incremento ++ ou seja 11 + 1 = 12

   // decremento 

   let number10 = 10;

   console.log(--number10); // ou seja o resultado do decremento e o valor total da variavel -1, ou seja, nesse caso o valor da variavel era 10 e foi decrementado, logo 10 - 1 = 9;

   // lembrando: existe diferenca na hora de impor o decremento antes ou depois, veja os exemplos.

   let aleatorynumber = 100;

   console.log(aleatorynumber++) // perceba que no console o valor da variavel continua sendo 100, isso acontece porque ela foi encrementada a partir daquele ponto

   console.log(aleatorynumber) // valor do console = 101

   // agora se fosse antes...

   aleatorynumber = 100;
   
   console.log(aleatorynumber);

   console.log(--aleatorynumber) // ja decrementa na hora!

   console.log(++aleatorynumber) // sai dos 99 pra 100 denovo, ou seja e executado para aquela instrucao, nao para a proxima.

   // Exponencial **

   console.log(5 ** 3) // 5 elevado a 3;

   // Grouping operator (prescedencia)

   console.log(5 * (2 + 2) / 2);

   // operador estritamente igual === (esta relacionado a valor e tipo)

   console.log(5 === '5'); // console = false;

   const one = 1;

   console.log(one === 1); // console = true;

   // Estritamente diferente !== esta relacionado com o valor e tipo

   const two = 2;

   console.log(two !== 2); // ou seja o valor e o tipo do valor 2 e estritamente igual ao valor que esta dentro de two? nao, entao false
   console.log(two !== '2'); // two e estritamente diferente de '2' string? SIM, ou seja TRUE

   // maior que > | maior e igual a => | menor que < | menor e igual a <=.


   // Operadores de atribuicao

   // assigment

   let x = 1;

   // adition assigment

   x += 1; // x = x + 1;
   console.log(x);

   // subtraction assigment

   x -= 1; // x = x - 1; (value into the x varaible = 2)
   console.log(x) // x = 2 - 1 = 1;

   // multiplication assigment

   x *= 2; // x = x * 2;
   console.log(x) // 2

   // division assigment

   let y = 10; // y value = 10;

   y /= 2; // y = y / 2 = 5;
   console.log(y); // 5;

   // reminder

   let z = 10;

   z %= 2; 
   console.log(z);
   
   

   // exponetiation

   let two2 = 2; 

   two2 **= 2; // 2 elevado a 2 = 4;

   console.log(two2);

   // Operadores relacionais

   // && "and" totalmente restrita onde os dois lados devem ser verdadeiros para ser verdadeiros ==> true && true = true

   let leftside = false;
   let rightside = true;

   console.log(leftside && rightside); // apenas verdade se true && true, caso contrario tudo sera falso.

   // || "or" um dos dois lados deve ser verdadeiro para que a condicao seja verdadeira 

   console.log(leftside || rightside) // true

   // ! 'not' troca o valor dentro daquela variavel se true ela vira false e se false vira true.

   console.log(!rightside)  // rightside era true e agora virou false.

   //condicional ternario ? :

   let bread = true;
   let cheese = false;  
                                             
   const niceBreakFast = bread || cheese ? 'O cafe esta perfeito!' : 'Cafe esta incompleto'; // ? => se a condicao foi atendida | : => se a condicao nao foi atendida

   console.log(niceBreakFast);

   // Utilizando o condicional ternario para verificar se uma pessoa e maior de idade

   let age = 17;

   let adult = age >= 18 ? 'voce e maior de idade' : 'voce e menor de idade';

   console.log(adult) // voce e menor de idade

   // String Operator 

   // comparacao

   console.log('a' == 'a')// true

   let alpha = 'alpha';

   alpha += 'bet';

   console.log(alpha); // alphabet

   // 

