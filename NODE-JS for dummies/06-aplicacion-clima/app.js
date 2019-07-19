const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        describe: 'Direccion de la ciudadd para obtener el clima',
        demand: true
    }
}).argv;

//Necesitamos crear una funcion async que encapsule ambas funciones de getLugar y getClima para que getClima pueda esperar la respuesta de getLugar
const getInfo = async(direccion) => {
    let getLugar = await lugar.getLugarLatLon(argv.direccion);
    let getClima = await clima.getClima(getLugar)
        
    return getClima;

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);



