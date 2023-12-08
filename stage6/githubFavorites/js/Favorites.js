
    export class Favorites {
        constructor(root){
            this.root = document.querySelector(root)
            this.entries = []
            this.update();

            

            
        }

        load(){
            this.entries = [

            {
                login: 'davicotting',
                name: 'Davi Cotting',
                public_repos: '76',
                followers: '626000',
            },
        
            {
                login: 'davicotting',
                name: 'Davi Cotting',
                public_repos: '76',
                followers: '626000',
            }
        
        ]

        }
    }

    export class favoritesView extends Favorites{
        constructor(root){
            super(root);
           
        }

        update() {
            this.removeAllTr();

            
        this.entries.forEach(user => {
            console.log(user);
        })

        }

        createRow(){
            const tr = document.createElement(`tr`);
            tr.innerHTML = `
            <tr>
                    <td class="user">
                        <img src="https://github.com/davicotting.png" alt="">
                        <a href="https://github.com/davicotting" target="_blank">
                            <p>Davi Cotting</p>
                            <span>davicotting</span>
                        </a>          
                    </td>
                    <td class="repositories">59</td>
                    <td>125</td>
                    <td class="followers">
                        <button class="remove">&times;</button>
                    </td>
                </tr>
            
                `;

                return tr;

        }

        removeAllTr() {
            const tbody = this.root.querySelector('table tbody');
            tbody.querySelectorAll('tr').forEach((tr) => {
                tr.remove();
            });
        }
        
    }