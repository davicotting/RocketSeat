
    export class Router{

        // para criar funcoes na classe nao se usa --> funcion <--, apenas: nomeDaClasse() {...};
        // e para se chamar ou usar uma propriedade ou funcao se usa o this. exemplo: this.funcaoCriada();

        pages = {}

        add(routeName, directory){
            // variavel pages foi criada com this.pages;

            this.pages[routeName] = directory; // propriedade e valor | propriedade : this.page[routeName] | Valor: directory
        }

        routes(event) {
            event = event || window.event;
            event.preventDefault();
            
            window.history.pushState({},'', event.target.href);
            this.goSwitch();
    
        }

        goSwitch() {
            const { pathname } = window.location;
    
            console.log(pathname);
    
            const routes = this.pages[pathname] || this.pages["/error"]; // pra encontrar ele utiliza o "argumento" do href e usa como chave na hora de varrer o objeto que contem os caminhos do diretorio, ou seja se: href='/Hello' e a propriedade do objeto esta como '/hello' o diretorio nao sera encontrado e cai no 404 ( porque foi determinado na condicao );
    
            console.log(routes);
    
            fetch(routes)
            .then((data) => data.text())
            .then((html) => {
                document.querySelector('#app').innerHTML = html;
            })

    }

 }


    
