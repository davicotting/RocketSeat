
    const form = document.querySelector("form");
    const inputWeight = document.querySelector("#weight");
    const inputHeight = document.querySelector("#height");
    
    form.onsubmit = (event) => {
        event.preventDefault();

        let weightValue = Number(inputWeight.value);
        let heightValue = Number(inputHeight.value);

        
        console.log(`Peso: ${weightValue}\nAltura: ${heightValue}`);
    }