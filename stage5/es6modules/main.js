
    import soma, {message as mensagem, steveJobs} from './utils.js';
    import meuNome from './frase.js';

    console.log(mensagem);  // Hello, World!  - utils.js
    console.log(steveJobs);  // Steve Jobs - utils.js
    console.log(meuNome);  // Davi Thomeny Cotting - frase.js
    console.log(soma(5));  // 10 - utils.js

    /* import * as calculator from ./utils.js | importo tudo, e tudo vira calculator */

    // Exemplo:

    import * as calculate from './calculate.js';

    console.log(calculate.divide(10, 2)); // operacao de divisao simples >> 10 / 2 = 5;
    console.log(calculate.multiply(10, 10)); // 10 * 10 = 100;
    console.log(calculate.sub(23, 3)); // 23 - 3 = 20;

    


