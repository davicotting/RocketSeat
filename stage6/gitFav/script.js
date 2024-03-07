   
    // data archquiteture

    export class FavData{
        constructor(root){
            
            this.root = document.querySelector(root);
            this.tbody = this.root.querySelector('tbody');
        }
    }

    // html and events 

    export class FavEvents extends FavData{
        constructor(root){
            super(root);
            this.update();
        }


    

        // events 

        deleteAllTrs(){
            this.tbody.querySelectorAll('tr').forEach( tr => {
                tr.remove();
            })
        }

        update(){
            this.deleteAllTrs();
            

        }



    }




