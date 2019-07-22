# Curso en el que se aprende a desplegar Webservers - HTTP - EXPRESS - HBS


## Temas vistos:

* Uso y configuracion de Express
* Servir contenido estático
* Template engines
* Handlebars
  a. Helpers
  b. Parciales
  c. Variables
* Despliegues en Heroku y Github
* Hacer carpetas públicas en la web

-----------------------------------------------------------------------------

```
nodemon server -e js,hbs,html,css
```
###### Descripcion: Se levanta un servidor http en el localhost:8080 y al utilizar el -e se le indica luego que tipo de archivos necesitamos que quede escuchando por cambios y actualizar

-----------------------------------------------------------------------------

## HTTP

```const http = require('http');```

- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/): Descargamos el source o bien con ```npm install bootstrap --save```
    - En caso de descargar el source, copiar la carpeta dist en tu carpeta public y luego renombrarla como assets
    
-----------------------------------------------------------------------------

## [Express](https://www.npmjs.com/package/express)
<b>Es un paquete que facilita las llamadas HTTP</b>

- Filtra peticiones que no definimos (A diferencia de la llamada normal a http cuando utilizamos express, este filtra peticiones que no han sido creadas)
- Disminuye las lineas de código para levantar un servidor
- Permite la renderizacion dinámica de los sitios webs por lo que va a ser más facil darle formato a nuestras paginas .htmls

##### Instalacion:
```
npm install express --save
```

-----------------------------------------------------------------------------

## [Handlebars](https://www.npmjs.com/package/hbs)
<b>Es un paquete que se complementa con express para poder tener un css default en cada pagina que se desee. Además agrega funcionalidades como los parciales y helpers</b>

##### Instalacion:
```npm install hbs --save```}

### Parciales--------
<p>Los parciales simplifican la repeticion de codigo al crear archivos .hbs</p>

1. En nuestro server.js escribimos para registrar los parciales
```
hbs.registerPartials(__dirname + '/views/partials');
```
2. Luego creamos una carpeta contenedora /views/partials en donde vamos a crear nuestros archivos hbs
3. Para llamar a los hbs que van a ser nuestras páginas (que se encuentran dentro de /views) se las llaman de la siguiente manera dentro de server.js
```
app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Kenji",
        anio: new Date().getFullYear()
    }); 
});
```

### Helpers--------
<p>Los helpers son funciones del HBS que se disparan cuando el template lo requiera</p>

- Se declaran las funciones en una clase helpers.js de la siguiente manera
```
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
```
- Se pueden utilizar en las clases .hbs para lo que uno quiera hacer

-----------------------------------------------------------------------------
## [Heroku](https://dashboard.heroku.com/)
<p>Servicio en la nube que permite desplegar aplicaciones php, ruby, node, etc.</p>

1. Para poder logearse con heroku
```heroku login```
2. Nos paramos sobre el branch y ponemos:
```heroku git:remote -a kenjiman-webpage```

