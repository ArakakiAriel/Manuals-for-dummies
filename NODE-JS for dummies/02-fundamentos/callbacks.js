let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "ari_kenji",
        id: "id"
    }

    if(id === 20){
        callback(`El usuario con el id ${id} no existe`);
    }else{
        callback(null, usuario);
    }
}
    
getUsuarioById(2, (err, usuario)=>{
    if(err){
        return console.log(err);
    }

    console.log("Usuario de base de datos", usuario);
});