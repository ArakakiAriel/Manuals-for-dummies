const axios = require('axios');
const colors = require('colors');

const getClima = async(lugar) => {
    const encodedURL = encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lon}&appid=7df21b559129d5e8d1e126c958d46d51&units=metric`);

    //De esta forma nosotros nos conectamos con el API mandandole la consulta
    const instance = axios.create({
        baseURL: encodedURL,
        timeout: 10000,
    });
    try {
        const resp = await instance.get();
        let temperatura = resp.data.main.temp;

        if(temperatura < 10){
            return `La temperatura de ${lugar.name} es de`+` ${temperatura}°`.cyan;
        }else if(temperatura > 25){
            return `La temperatura de ${lugar.name} es de`+` ${temperatura}°`.yellow;
        }else{
            return `La temperatura de ${lugar.name} es de`+` ${temperatura}°`.green;
        }
    } catch (error) {
        return `No se pudo determinar el clima de ${lugar.name}`
    }
    
}
   

module.exports = {
    getClima
}