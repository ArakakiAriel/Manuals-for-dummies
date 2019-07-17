const argv = require('yargs')
    .command('listar'/*Nombre que se utilizará para llamarlo en la consola*/, 'Imprime en consola la tabla de multiplicar',{
        base: {
            demand: true, //Campo obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
.argv;


const {crearArchivo} = require("./multiplicar/multiplicar");

// let base = 5;

let argv2 = process.argv;

console.log("Limite:", argv.limite)
// console.log(argv);
// console.log(argv2);

// let base = argv[2]; //3er casilla del vecto = 1ra variable que se le pasa desde node

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo ${archivo} fue creado satisfactoriamente`))
//     .catch(err => console.log(err));


//const tabla3 = fs.readFile("./tablas/tabla-3.txt", );
