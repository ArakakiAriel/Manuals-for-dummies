# Curso en el que se aprende como interactuar con una API externa desde nuestro código


## Temas vistos:

* Consumo de API's
* Uso de POSTMAN
* Llamadas HTTP hacia servidores externos
* Paquete request (teoria)
* Paquete Axios (uso)
* Uso de servicios para obtener la direccion por nombre
* Uso de OpenWeather para obtener el clima
* Refuerzo del tema async await
* Respaldos locales y remotos 

-----------------------------------------------------------------------------

```
node app -d 'Madrid'
La temperatura de Madrid, Spain es de 34.74°

```
###### Descripcion: Se ejecuta la app enviando alguna ciudad y obtiene como respuesta la temperatura actual de ella.

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

```
 npm i axios
```
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