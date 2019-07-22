const hbs = require('hbs');

//Helpers
//Si no existe la variable enviada a los hbs, este lo va a buscar en los Helpers registrados de la siguiente manera
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(" ");
});
