
    // Exercicios

    // 1) Declare uma variavei com nome weight

    let weight;

    // 2) qual o tipo da variavel acima | R: Undefined.


    /* 
       3) Declare variaveis e atribua valores para cada um dos dados:

        * name: String 
          age: Number (interger)
          stars: Number (float)
          isSubscribed: Boolean.


    */


    console.log(typeof weight);

    let name = "Davi Cotting"; // String

    let age = 18; // Number

    let stars = 10.00; // Float 

    let isSubscribed = true; // Boolean

    // 4) Qual o tipo dessa variavel a seguir? | Resposta: Objeto.

    let student = {};

    console.log(typeof student);

    // 5) Atribua a ela as mesmas propriedades do exercicio 3.

    student = {
        name: "Davi",
        age: 18,
        isSubscribed: true,
        weight: 88.8,
    };

    console.log(student);

    // 6) Mostre no console a seguinte mensagem:

    /*


        <name> de idade <age> pesa <weight> kg.

        Substitua pelo s valores de cada propriedade do objeto.


    */

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);

    /*
    
    7) Declare uma variavel do tipo array, de nome
    Students e atribua a ela nehum valor, ou seja,
    somente um array vazio.
    
    */
   
    let students = [];

    /*
    
    8) Reatribua valor para a variavel acima, colocando
    dentro dela o objeto student da questao 4 (Nao copiar e colar o objeto, 
    mas usar o objeto criado e inserir ele no array)
    
    */

    students = [student];

    console.log(students)

    /*
    
    9) Coloque no console o valor da posicao 0 do array acima
    
    
    */

    console.log(students[0])

    /*
    
    10) Crie um novo student e coloque
     na posicao 1 do array students
    
    */

     jordan = {
        name: "Jordan",
        age: 23,
        isSubscribed: true,
        weight: 90.1,
     }


     students = [
        student,
        jordan
     ]

     // ou students[1] = jordan;

     console.log(students);

     /*
     
     11) Sem rodar o codigo responda qual e a resposta do codigo abaixo e por que? apos sua resposta, rode o codiigo e veja se voce acertou.

     Resposta: 
     
     Undefined, pois como a variavel e let tem uma propriedade de atuar em nivel global
     ela sofre hoistling, ou seja ela e elevado ao comeco do algoritimo com o valor indefinido.
     logo fica mesmo que por
     baixo dos panos, dessa forma:

     var a;

     console.log(a)

     var a = 1;

     */

     console.log(a);

     var a = 1;