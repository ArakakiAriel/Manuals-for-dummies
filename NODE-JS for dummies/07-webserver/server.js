const express = require('express');
const hbs = require('hbs');
const app = express();
//Importamos los helpers
require('./hbs/helpers');

//Para poder utilizar heroku, al no saber en qué puerto lo va a levantar, se realiza lo siguiente
//En caso de no encontrar el process.env.port se levantará en el puerto 8080 (Cuando es local)
const port = process.env.PORT || 8080;

 
//Middleware (Todo lo que se encuentre dentro de la carpeta public van a ser páginas o archivos de dominio público)
app.use(express.static(__dirname +"/public"));

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//Peticiones que entren con "/" ejecutan el siguiente callback
app.get('/', (req, res) => {
    //Renderiza un archivo hbs y se le pasa un objeto con los parametros dinamicos a la pagina web 
    res.render('home', {
        nombre: "Kenji arakaki",
        anio: new Date().getFullYear()
    }); 
});
app.get('/about', (req, res) => {
    //Renderiza un archivo hbs y se le pasa un objeto con los parametros dinamicos a la pagina web 
    res.render('about', {
        anio: new Date().getFullYear()
    }); 
});

//Abre peticion a localhost:8080/data
// app.get("/data", (req, res) => {
//     res.send("Hola Data");
// });
 
app.listen(port, () => {
    console.log("Escuchando peticiones en el puerto", port);
});