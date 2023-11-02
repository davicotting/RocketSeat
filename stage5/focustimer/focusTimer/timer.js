    
    import state from "./state.js";
    import * as elements from "./elements.js"
    import { reset } from "./actions.js"
    import { kichenAudio } from "./sounds.js";

    export function countdown(){

        clearTimeout(state.countdownId);

        // recursao precisa de momento de parada:

        if(!state.isRunning){
            return; // parou o countdown quando o estado mudar
        }

        let minutes = Number(elements.minutes.textContent);
        let seconds = Number(elements.seconds.textContent);

        seconds--

        if(seconds < 0){
            seconds = 59;
            minutes--;
           
        }

        if(minutes < 0){
            reset();
            kichenAudio.play();
            return;
        }

        updateDisplay(minutes, seconds);

        state.countdownId = setTimeout( () => {

            countdown(); // function call back da funcao countdown

        }, 1000); // 1s de espera


    }

    export function updateDisplay(minutes, seconds){

        minutes = minutes ?? state.minutes;  // minutos = minutos se nao for passado como parametro minutos recebe os minutos definidos no stae que no caso e 25min.
        seconds = seconds ?? state.seconds; // mesma logica

        elements.minutes.textContent = String(minutes).padStart(2, "0"); // ( nao esquecer que sao os minutes do parametro e nao os minutes do state)
        elements.seconds.textContent =  String(seconds).padStart(2, "0");

        // padstart preenche o comeco, caso esteja preenchido com um caractere preencha com "0";
        



    }