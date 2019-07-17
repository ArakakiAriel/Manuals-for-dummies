const argv = require('yargs')
    .command('listar'/*Nombre que se utilizará para llamarlo en la consola*/, 'Imprime en consola la tabla de multiplicar',{
        base: {
            demand: true, //Campo obligatorio
            alias: 'b' //Se lo puede llamar como node app -b 20 (Donde seteamos a la base con el valor 20)
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() //Con el uso de 'node app listar --help' nos va a mostrar la descripcion de la clase y con que parametros se puede llamar
    .argv;


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
        .catch(err => console.log(err));
}

//Llama a la funcion crearArchivo pasandole el flag 'listar' por lo que muestra la tabla en vez de crearla
function listar(base, limite){
    crearArchivo(base, limite, 'listar')
        .then(tabla => console.log(tabla))
        .catch(err => console.log(err));
}
