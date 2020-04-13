const express = require('express');
const bcrypt = require('bcrypt'); //Libreria de encriptado
const jwt = require('jsonwebtoken');
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



module.exports = app;