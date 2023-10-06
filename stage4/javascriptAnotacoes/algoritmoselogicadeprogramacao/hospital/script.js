
    let pacientes = [];
    let mostrarPacientes = [];

    pacientes = [
        {
         name: "davi",
         idade: 18,
         peso: 88.8,
         altura: 1.91
        },

        {
            name: "evelane",
            idade: 70,
            peso: 999.999,
            altura: 1.50
        },
        
        {
            name: "antonio",
            idade: 10,
            peso: 20.1,
            altura: 1.20
        },

    ]

   for(let indice = 0; indice < pacientes.length; indice++){
        mostrarPacientes[indice] = pacientes[indice].name;
   }

    alert(mostrarPacientes.join(", "));




    