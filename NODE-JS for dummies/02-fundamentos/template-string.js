let nombre = "Deadpool";
let real = "Wade Winston";

var deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    alias: "Deadpool"
}


function recitar(){
    let {nombre:primerNombre, apellido, alias} = deadpool; //Destructuración de variables
    console.log(`${primerNombre} ${apellido} es ${alias}`);
}

recitar();