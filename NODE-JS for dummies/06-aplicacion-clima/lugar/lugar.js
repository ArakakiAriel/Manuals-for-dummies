const axios = require('axios');
const colors = require('colors');

const getLugarLatLon = async(lugar) => {
    const encodedURL = encodeURI(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${lugar}`);

//De esta forma nosotros nos conectamos con el API mandandole la consulta
const instance = axios.create({
    baseURL: encodedURL,
    timeout: 10000,
    headers: {'X-RapidAPI-Key': 'c2d663da1emsha08e003b2a32299p190766jsn5fff7cf716c8'}
});

const resp = await instance.get();
let resultados = resp.data.Results;
//Si no hay resultado para la consulta se muestra un error
if(resultados.length === 0){
    throw new Error(`No hay resultado para ${lugar}`);
}

//Se agarra al primer elemento del array de respuesta (Primer match de consulta)
const resultado = resultados[0];
    return {
        name: resultado.name,
        lat: resultado.lat,
        lon: resultado.lon
    }
}

module.exports = {
    getLugarLatLon
}