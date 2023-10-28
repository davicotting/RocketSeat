    

    import { Modal } from '../js/modal.js';
    import { errorElements } from '../js/alert.js';
    import { calculateIMC, inputVerifier } from '../js/utils.js';
    
    const form = document.querySelector("form");
    export let inputWeight = document.querySelector("#weight");
    export let inputHeight = document.querySelector("#height");

    inputWeight.oninput = () => errorElements.closed();
    inputHeight.oninput = () => errorElements.closed();    
    
     export const formElements = form.onsubmit = (event) => {
        event.preventDefault();
        
        console.log(inputWeight.value);
        console.log(inputHeight.value);

        

      let weightValue = inputWeight.value;
      let heightValue = inputHeight.value;

        const weightOrHeightisNaN = inputVerifier(weightValue) || inputVerifier(heightValue);


        if(weightOrHeightisNaN){
           errorElements.open();
            return;
        } else{
            errorElements.closed();
        }

        const result = calculateIMC(weightValue, heightValue);
        displayResultMessage(result);

        
   
    }

    function displayResultMessage(result){
        
        Modal.open()
        Modal.message.innerHTML = `${result}`;
        
    }

