const fs = require('fs');
const colors = require('colors');
const listadoPath = './database/data.json';
let listaDeTareas = [];

//Funcion anonima que se ejecuta siempre para poder obtener la lista de tareas de la DB
(()=>{
    try{
        listaDeTareas = require('../database/data.json'); //De esta forma podemos leer el archivo directamente
    }catch{
        listaDeTareas = [];
    }
})();


const crearTarea = (descripcion) => {
    let tarea = {
        descripcion,
        completado: false
    };

    listaDeTareas.push(tarea);
    guardarDB();

    return tarea;
};

const getListado = () => {
    return listaDeTareas;
}


const actualizarTarea = (descripcion, completado) => {
    console.log("descripcion: ", descripcion)
    console.log("completado", completado);
    let index = listaDeTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    
    if(index < 0){
        return 'La tarea que quiere actualizar no existe en la base de datos';
    }

    listaDeTareas[index].completado = completado;
    console.log(listaDeTareas);
    guardarDB();
    return 'Se actualizó correctamente la tarea';

}

const listar = () => {
    if(listaDeTareas.length === 0){

    }
}

const borrarTareasCompletadas = () => {
    listaDeTareas = listaDeTareas.filter((tarea)=>{
        console.log("Tarea", tarea)
        return tarea.completado === false;
    });
    guardarDB();
}


const guardarDB = () => {
    let data = JSON.stringify(listaDeTareas);

    fs.writeFile(listadoPath, data, err => {
        if(err){
            console.log(err);
        }else{
            console.log("Se ha guardado la tarea en la base de datos de forma satisfactoria");
        }
    });
}

//IMPORTANTE: Recordar realizar el module.export para poder utilizar las funciones fuera de la clase
module.exports = {
    crearTarea,
    getListado,
    actualizarTarea,
    borrarTareasCompletadas
}
