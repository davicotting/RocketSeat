    
    export class GithubUser{
        static search(username){
            const endpoint = `https://api.github.com/users/${username}`;

            return fetch(endpoint).then(data => data.json()).then(({ login, name, public_repos, followers}) => ({
                login,
                name,
                public_repos,
                followers
            }))
        }
    }    
    
    // Classe que contem logica dos dados e como os dados sao estruturados:

    export class Favorites {
        constructor(root){
            this.root = document.querySelector(root)

            this.tbody = this.root.querySelector('table tbody');
            this.load();
            this.update();

            GithubUser.search('davicotting').then(user => console.log(user));

            
        }

        load(){
            this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
        }

        delete(user){
            const filteredEntries = this.entries.filter(entry => entry.login !== user.login);

            this.entries = filteredEntries;
            this.update();
            this.save();
           
        }
    }

    // Classe que vai criar a visualizacao do html e os seus eventos

    export class favoritesView extends Favorites{
        constructor(root){
            super(root);
            this.onadd()
        }

        update() {

            this.removeAllTr();

            
            this.entries.forEach(user => {
            
            const row = this.createRow();
           
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de ${user.name}`;
            row.querySelector('.user a').href = `https://github.com/${user.login}`;
            row.querySelector('.user p').textContent = user.name;
            row.querySelector('.user span').textContent = user.login;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;

            row.querySelector('.remove').onclick = () =>{
                const isOk = confirm('Voce tem certeza que deseja remover esse favorito?');

                if(isOk){
                    this.delete(user);
                }
            }


            this.tbody.append(row); // tbody recebe a row utilizando o append (append adc na arvore)
        })
        
     }

        save(){
           localStorage.setItem('@github-favorites:', JSON.stringify(this.entries)); 
        }

        async add(username){

                const userExists = this.entries.find(entry => entry.login === username);

            if(userExists){
                throw new Error('Este usuario ja esta na sua lista de favoritos!');
            }

        
            try{
                const user = await GithubUser.search(username);
                console.log(user)

                if(user.login === undefined){
                    throw new Error(`O usuario ${user.login} nao existe no GitHub!`);
                }

                this.entries = [user, ...this.entries]; // user adc em um novo array com o novo user mais os usuarios mais adc anteriormente (Spread Operator)
                this.update();
                this.save();
            }catch(error){
               alert(error.message);
            
               // erro sem o .message mostra o no alert ERROR: e a message do throw

            }
        }

        onadd(){
            const addButton = this.root.querySelector('.search .submit');
            addButton.onclick = () => {
                const { value } = this.root.querySelector('#input-search');
                this.add(value);
            }
        }

        createRow(){
            const tr = document.createElement(`tr`);

            tr.innerHTML = `
                    <td class="user">
                        <img src="https://github.com/davicotting.png" alt="">
                        <a href="https://github.com/davicotting" target="_blank">
                            <p>Davi Cotting</p>
                            <span>davicotting</span>
                        </a>          
                    </td>

                    <td class="repositories">?</td>
                    <td class="followers">?</td>
                    <td><button class="remove">Remover</button></td>
                `;

                return tr; // retorna a tr da forma acima para ser usada no resto do programa

        }

        removeAllTr() {
            this.tbody.querySelectorAll('tr').forEach((tr) => {
                tr.remove(); // remove() funcao js que remove o elemento.
            });
        }
        
    }