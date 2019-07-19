# Curso en el que se aprenden conceptos claves creando una aplicacion que pueda listar las cosas por hacer que uno le pase por linea de comandos

* Crear tareas por hacer
* Listar las tareas creadas
* Actualizar tareas
* Borrar tareas completadas

-----------------------------------------------------------------------------

## Temas vistos:

* Consumo de API's
* Uso de POSTMAN
* Llamadas HTTP hacia servidores externos
* Paquete request
* Paquete Axios
* Uso de servicios para obtener la direccion por nombre
* Uso de OpenWeather para obtener el clima
* Respaldos locales y remotos 

-----------------------------------------------------------------------------

<b>node app -d Madrid España </b>
###### Descripcion: 

-----------------------------------------------------------------------------

### City Geolocation
Es un API para obtener las coordenadas de una ciudad en base al nombre que se le pase como argumento

Para poder probar el API de City Geolocation nos iremos al postman y pondremos lo siguiente:

endpoint: https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New+York
HEADERS
- X-RapidAPI-Key c2d663da1emsha08e003b2a32299p190766jsn5fff7cf716c8


-----------------------------------------------------------------------------
### AXIOS y REQUEST (NPM)
<b>Ambos son paquetes que trabajan con peticiones hacia servicios REST</b>

- Axios trabaja en base a promesas (En esta oportunidad usaremos axios ya que nos deja conbinar las promesas con el async await)
- Request trabaja en base a callbacks

- npm i axios

#### Para realizar una consulta a la API desde nuestro codigo se debe declarar una instancia así
```
const instance = axios.create({
   baseURL: 'URL QUE SE PUEDE PROBAR DESDE POSTMAN',
   timeout: 10000, 
   headers: {'X-RapidAPI-Key': 'c2d663da1emsha08e003b2a32299p190766jsn5fff7cf716c8'} //(Headers que tienen que ir en la consulta)
});
```
#### Luego para capturar la respuesta
```
const resp = await instance.get();
```
-----------------------------------------------------------------------------