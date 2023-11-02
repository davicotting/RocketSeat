    import state from './state.js';
    import * as timer from './timer.js';
    import * as elements from "./elements.js";
    import * as soundEffects from "./sounds.js";

    export function toggleRunning(){
      state.isRunning = document.documentElement.classList.toggle('running');
      timer.countdown();
      soundEffects.buttonPressAudio.play();
    }

    export function reset(){
     state.isRunning = false;
     document.documentElement.classList.remove('running');
     timer.updateDisplay();
     
    }

    export function toggleMusic(){
        state.isMute = document.documentElement.classList.toggle("music-on");
      
        if(state.isMute){
          soundEffects.bgAudio.play();
          return;
        }

        soundEffects.bgAudio.pause();
    }

    export function set(){
        
      elements.minutes.setAttribute('contenteditable', true);
      elements.minutes.focus()
      soundEffects.buttonPressAudio.play();
    }