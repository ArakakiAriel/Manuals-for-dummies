const http = require('http');

//De esta forma levantamos el servidor
http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "application/json"})

    let salida = {
        nombre: "Fernando",
        edad: 32,
        url: req.url // va a enviar lo que vaya luego del localhost:8080/(esto)
    }
    res.write(JSON.stringify(salida));
    // res.write("Hola Mundo");
    res.end();
}).listen(8080); //En el puerto 8080

console.log("Escuchando el puerto 8080");