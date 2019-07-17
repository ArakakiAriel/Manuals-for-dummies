let empleados = [{
    id: 1,
    nombre: "Ariel"
},{
    id: 2,
    nombre: "Carla",
},{
    id:3,
    nombre: "Gaston"
}];

let salarios = [{
    id:1,
    salario:10000
},{
    id:2,
    salario:15000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });

    if(empleadoDB){
        callback(null, empleadoDB);
    }else{
        callback(`No existe un empleado con el id: ${id}`);
    }

    console.log("----------------------------------------");
} 

let getSalario = (empleado, callback) => {

    let sueldoDB = salarios.find(salario => {
        return salario.id === empleado.id;
    })
    if(sueldoDB){
        callback(null, {nombre: empleado.nombre, salario: sueldoDB.salario});
    }else{
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
    }
}

for(let i = 1; i < 4; i++){

    getEmpleado(i, (err, empleado) => {
        if(err){
            return console.log(err);
        }
        getSalario(empleado, (err, empleadoConSalario) => {
            if(err){
                return console.log(err);
            }

            console.log(empleadoConSalario);
        });
    });

}