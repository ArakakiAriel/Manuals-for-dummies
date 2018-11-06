rem con el "rem" se ingresa el comentario de una linea o sino con ::
:: Asi también se puede comentar.

::TIPS
::No utilizar espacios de más ya que el sistema los cuenta para los nombres de variables o su contenido.
::Para utilizar caracteres especiales se debe anteponer un "^", en el caso de setear una string con "" no haría falta.
:: En caso del %, si se quiere utilizarlo como un caracter normal tiene la excepcion de %%



::Para ejecutar un comando cuyo filename se encuentra almacenado en una variable, simplemente usar dicha variable en lugar del comando. Ejemplo:
:: %MSBUILD% "project.proj"
:: %~dp0 y %CD% indican la ubicación de donde se está ejecutando el script










:: En batch todas las variables son globales por defecto (visibles y modificables por otros scripts).

::Para realizar variables locales----
setlocal
set variable1=valor1

set variable2=texto con espacios

:: variable3 = es otro texto con espacios
::el %variable% será reemplazado por lo que contenga esa variable
set variable3=es otro %variable2% 

::para variables con caracteres especiales se debe utilizar ""  -> OJO: si las comillas envuelven a la variable, estas no aparecen, pero si sólo envuelven el contenido entonces apareceran por pantalla. 

set variable4="old & news"
set "variable5=old ^& news"
::ROMPE
set variable5=old ^& news

echo %variable4%
echo %variable5%

echo %variable3%

echo UBICACION 
%~dp0
%CD%

pause
