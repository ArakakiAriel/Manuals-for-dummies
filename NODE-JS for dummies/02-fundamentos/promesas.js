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


let getSalario = (empleado, callback) => {

    return new Promise((resolve, reject) => {

        let sueldoDB = salarios.find(salario => {
            return salario.id === empleado.id;
        })
        if(sueldoDB){
            resolve({nombre: empleado.nombre, salario: sueldoDB.salario});
        }else{
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        }

    })
}

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
            
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if(empleadoDB){
            resolve(empleadoDB);
        }else{
            reject(`No existe un empleado con el id: ${id}`);
        }
    });
} 


for(let i = 0; i < 10; i++){

    getEmpleado(i).then(empleado => {
        
        getSalario(empleado).then(empleadoConSalario  => {
            console.log(empleadoConSalario);
        }, (err) => {
            console.log(err);
        });
    }, (err) => {
        console.log(err);
    });

}