
    completado = {
        alias: 'c',
        default: false,
        describe: 'Tarea completada'
    }
    descripcion = {
        demand: true, //Campo obligatorio
        alias: 'd', //Se lo puede llamar como node app -b 20 (Donde seteamos a la base con el valor 20)
        describe: 'Descripcion de la tarea' //Se indica una descripcion breve a cerca del atributo
    }


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer',{
        descripcion
    })
    .command('listar', 'Muestra todas las tareas por hacer')
    .command('actualizar', 'Actualiza una tarea por hacer',{
        descripcion,
        completado
    })
    .command('borrar', 'Borra las tareas que ya han sido completadas2')
    .help() //Con el uso de 'node app listar --help' nos va a mostrar la descripcion de la clase y con que parametros se puede llamar
    .argv;

module.exports = {
    argv
}