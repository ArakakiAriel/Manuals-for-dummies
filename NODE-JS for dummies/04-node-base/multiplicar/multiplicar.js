const fs = require("fs");

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor ingresado "${base}" no es numérico`); 
            return;
        } 

        let tabla = "";
            for(let i = 1; i <= 10; i++){
                tabla += (`${base} * ${i} = ${base * i} \n`)
            }
            
            fs.writeFile(`./tablas/tabla-${base}.txt`, tabla, (err)=>{
                if(err){
                    reject(err);
                } 
                else {
                    resolve(`tabla-${base}.txt`);
                }
            })
        
    })
}


module.exports = {
    crearArchivo

}