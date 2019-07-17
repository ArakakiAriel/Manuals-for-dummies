const argv = require("./config/yargs").argv;
const colors = require('colors');
const {crearArchivo} = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch(comando){
    case 'listar':
        listar(argv.base, argv.limite);
    break;
    case 'crear':
        crear(argv.base, argv.limite);
    break;
    default:
        console.log("Comando no reconocido");
}

let argv2 = process.argv;

// console.log(argv);

// let base = argv[2]; //3er casilla del vecto = 1ra variable que se le pasa desde node

// console.log(base);


//Llama a la funcion crearArchivo sin el flag 'listar', entonces va a crear el archivo
function crear(base, limite){
    crearArchivo(base, limite)
        .then(archivo => console.log(`El archivo ${archivo} fue creado satisfactoriamente`))
        .catch(err => console.log(err.red));
}

//Llama a la funcion crearArchivo pasandole el flag 'listar' por lo que muestra la tabla en vez de crearla
function listar(base, limite){
    crearArchivo(base, limite, comando)
        .then(tabla => console.log(tabla.yellow))
        .catch(err => console.log(err.red));
}
