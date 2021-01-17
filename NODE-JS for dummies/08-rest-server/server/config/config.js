
//===============
//    Puerto
//===============
process.env.PORT = process.env.PORT || 3000;


//===============
//    Entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//========================
//  Vencimiento de Token (1HORA)
//========================
process.env.CADUCATE_TOKEN = 60 * 60 * 1000;


//=========================
//  Seed de Autenticación
//=========================
process.env.SEED = process.env.SEED || 'seed-for-making-token';


//=========================
//  Google Client ID
//=========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '843246965520-2q5k0dhjmc0o59jvte08rqvdcn68jdov.apps.googleusercontent.com';

//===============
//   DataBase
// Acá vamos a encontrar como configurar nuestra base de datos creada en MongoDB Atlas para poder almacenar allí la información
//===============
let urlDB;

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27018/cuentas'
}else{
    urlDB = 'mongodb+srv://kenjiman:p9YxtOCvGmOobqaJ@llevomiscuentasdb-2xdud.mongodb.net/llevomiscuentas'
}

process.env.URLDB = urlDB;