const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        describe: 'Direccion de la ciudadd para obtener el clima',
        demand: true
    }
}).argv;

let getLugar = lugar.getLugarLatLon(argv.direccion)
    .then(console.log);





