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


let getSalario = async (empleado) => {

        let sueldoDB = salarios.find(salario => {
            return salario.id === empleado.id;
        });

        if(sueldoDB){
            return ({nombre: empleado.nombre, salario: sueldoDB.salario});
        }else{
            throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
        };

}

let getEmpleado = (id) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if(empleadoDB){
            return (empleadoDB);
        }else{
            throw new Error(`No existe un empleado con el id: ${id}`);
        }
} 

let getInfo = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de u$d ${resp.salario}`;
}


for(let i = 1; i < 4; i++){
getInfo(i)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));
}