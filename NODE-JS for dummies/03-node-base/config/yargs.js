//Optimizacion de yargs (Evita codigo repetido)
const opts = {
    base: {
        demand: true, //Campo obligatorio
        alias: 'b', //Se lo puede llamar como node app -b 20 (Donde seteamos a la base con el valor 20)
        describe: 'Tabla del numero de base' //Se indica una descripcion breve a cerca del atributo
    },
    limite: {
        alias: 'l',
        default: 10,
        describe: 'Hacer la tabla hasta el numero limite'
    }
}

const argv = require('yargs')
    .command('listar'/*Nombre que se utilizará para llamarlo en la consola*/, 'Imprime en consola la tabla de multiplicar'/*Descripcion*/, opts)
    .command('crear', 'Crea la tabla de multiplicar',opts)
    .help() //Con el uso de 'node app listar --help' nos va a mostrar la descripcion de la clase y con que parametros se puede llamar
    .argv;

module.exports = {
    argv
}