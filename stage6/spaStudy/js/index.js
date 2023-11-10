
    import { Router } from './router.js';

    const router = new Router();

    // esta sendo adc em um objeto dentro da classe router que se chama pages

    router.add("/", '/pages/home.html');
    router.add('/about', '/pages/about.html');
    router.add("/contact", '/pages/contact.html');
    router.add("/error", '/pages/404.html');

    

   router.goSwitch();

    window.onpopstate = () => router.goSwitch(); // toda vez que o usuario retorna a pagina ela logo sera carregada utilizando o popstate e executando o go switch();
    window.routes = () => router.routes(); // colocando na window essa funcao, por que caso contrario a funcao routes() nao sera disparada.