# Curso en el que se aprenden las bases de node

* Importar clases externas o creadas por nosotros
* npm init (Configuracion del package.json)
* npm install (Instalacion de paquetes externos Ej: yargs)
* uso de yargs
* mostrar en consola con colores

-----------------------------------------------------------------------------

## YARGS
- Es una librería que nos ayuda en la definicion de los parametros de entrada. A su vez, nos permite setear alias, si es requerido, un valor por defecto, etc.
- Fijarse en app.js el código y los comentarios}

###### <u>Modo de uso</u>
node app listar --limite 11 --base 692  
** <Descripcion>**
En este ejemplo estamos mostrando por linea de comandos la tabla de base 692 del 1 al 11


node app crear --base 692  
** <Descripcion>**

-----------------------------------------------------------------------------

## MOSTRAR EN CONSOLA CON COLORES
- npm install colors --save <!-- El --save es para poder guardarlo en el package.json -->
- Fijarse en multiplicar.js el modo de uso
