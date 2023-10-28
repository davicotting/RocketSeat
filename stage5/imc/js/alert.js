
    export const errorElements = {
        errorScreen: document.querySelector(".error-wrapper"),
        open(){
            errorElements.errorScreen.classList.add("open");
        },
        
        closed(){
            errorElements.errorScreen.classList.remove("open");
        }

        
    }

   

    