
    let darkmode = true;
    const buttonToggle = document.querySelector("#toggleMode");


    buttonToggle.addEventListener('click', (event) =>{

        document.documentElement.classList.toggle('light');

        const mode = darkmode ? 'light' : 'dark';
        event.currentTarget.querySelector('span').textContent = '${mode} mode ativado';

        darkmode = !darkmode;
    })