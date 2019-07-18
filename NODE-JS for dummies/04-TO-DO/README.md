# Curso en el que se aprenden conceptos claves creando una aplicacion que pueda listar las cosas por hacer que uno le pase por linea de comandos

* Crear tareas por hacer
* Listar las tareas creadas
* Actualizar tareas
* Borrar tareas completadas

-----------------------------------------------------------------------------

## Temas vistos:

* Creacion de una base de datos con formato JSON
* Manipulacion del formato JSON 
* Repaso de uso de YARGS y COLORS
* Uso del 'fs' para leer y escribir un archivo
* Repaso de funciones de los vectores (Ej: filter, findIndex)

-----------------------------------------------------------------------------

- <b>node app crear -d "Pasear al perro" </b>
###### Descripcion: con esta sentencia se crearan las tareas que luego se alojan en la base de datos (Archivo JSON creado dentro de la ruta /database)

- <b>node app listar</b>
###### Descripcion: Lista en la consola todas las tareas que existen en la base de datos

- <b>node app actualizar -d "Pasear al perro" -c true</b>
###### Descripcion: Actualiza la tarea enviada

- <b>node app borrar</b>
###### Descripcion: Borra todas las tareas completadas de la base de datos

-----------------------------------------------------------------------------