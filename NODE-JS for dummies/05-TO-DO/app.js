
const porHacer = require('./por-hacer/por-hacer');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crearTarea(argv.descripcion);
    break;
    case 'listar':
        let listado = porHacer.getListado();

    for(let tarea of listado){
        console.log('=======Por Hacer======='.yellow);
        console.log(tarea.descripcion);
        if(tarea.completado){
            console.log("Estado:", "Completado".green);
        }else{
            console.log("Estado:", "Por hacer".red);
        }
        console.log('======================='.yellow);
    }
    break;
    case 'actualizar':
        let actualizar = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizar);
    break;
    case 'borrar':
        let borrar = porHacer.borrarTareasCompletadas();
        console.log(borrar);
    default:
        console.log('No se reconoce el comando')
}
