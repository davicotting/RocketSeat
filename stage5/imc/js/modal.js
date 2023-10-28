    

    export const Modal = {

        wrapper:  document.querySelector(".modal-wrapper"),
        message: document.querySelector("#result"),
        buttonClose: document.querySelector(".close"),
        
        open(){
            Modal.wrapper.classList.add("open");
        },

        closed(){
            Modal.wrapper.classList.remove("open");
        }
    }

    Modal.buttonClose.onclick = () => {
        Modal.closed();
    }

    window.addEventListener('keydown', escKeydown);

    function escKeydown(event){
        if(event.key == 'Escape'){
            Modal.closed();
            console.log('funcao buttonclose() recebida e executada com sucesso!');
        }
    }
    
