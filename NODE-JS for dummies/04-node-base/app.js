const {crearArchivo} = require("./multiplicar/multiplicar");

// let base = 5;

let argv = process.argv;
let base = argv[2]; //3er casilla del vecto = 1ra variable que se le pasa desde node

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} fue creado satisfactoriamente`))
    .catch(err => console.log(err));


//const tabla3 = fs.readFile("./tablas/tabla-3.txt", );
