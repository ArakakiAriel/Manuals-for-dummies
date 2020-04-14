const express = require('express');
const bcrypt = require('bcrypt'); //Libreria de encriptado
const jwt = require('jsonwebtoken');

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const messages = require('../constants/messages')

const app = express();
const User = require('../models/user'); //Obtener info del usuario


app.post('/login', (req, res) => {
    let body = req.body;

    const searchUser = {user: body.user};

    User.findOne(searchUser, )
        .exec((err, userDB) => { //Luego de traer el objeto que matchea se declara que hacer
            if(err){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }

            //Valido que el usuario se encuentre en la base de datos y que sea un usuario activo
            if(!userDB || !userDB.state){
                return res.status(400).json({
                    ok:false,
                    err: {
                        message: messages.FAIL_LOGIN                 }
                });                
            }

            //De esta forma comparamos la password encodeada 
            if(!bcrypt.compareSync(body.password, userDB.password)){
                return res.status(400).json({
                    ok:false,
                    err: messages.FAIL_LOGIN
                });
            }

            //De esta forma generamos el token
            let token = jwt.sign({
                user: userDB
            }, process.env.SEED, {expiresIn: process.env.CADUCATE_TOKEN});
            
            let user_id = userDB._id;
            res.set('user-id', user_id); //Agrega en los headers de la respuesta el user-id de mongo

            res.json({ //Mando la respuesta como json
                ok: true,
                message: `Welcome ${body.user}!`,
                token
            })           
        })

});



//Configuraciones de Google
async function verify( token ) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    console.log(payload.name);
    console.log(payload.picture);
    console.log(payload.email);
}

app.post('/google', (req, res) => {
    let token = req.body.id_token;

    verify(token);
    res.json({
        token
    })
})


module.exports = app;