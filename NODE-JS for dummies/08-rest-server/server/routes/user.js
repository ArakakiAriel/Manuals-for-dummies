const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const User = require('../models/user');

//Obtener registros
app.get('/usuario', (req, res) => {
    res.json('get Usuario');
  });
  
//Crea nuevos usuarios
app.post('/usuario', (req, res) => {
    let body = req.body;

    let usuario = new User({
        user: body.user,
        email: body.email,
        password: bcrypt.hashSync(body.password, 13),
        role: body.role
    });

    usuario.save((err, userDB) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        // userDB.password = null;

        res.json({
            ok: true,
            user: userDB
        })

    })

    if(body.name === undefined){
    }else{
        res.json({
            persona: body
        });
    }

});

//Actualizar registros  
app.put('/usuario/:id1', (req, res) => {
    let id = req.params.id1; //De esta forma podemos pasar parametros desde la url y almacenarlos en una variable
    let body = req.body;

    //Ver la documentacion https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
    User.findByIdAndUpdate(id, body, {new:true}, (err, userDB) => {
        if(err) {
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    })

});

//Borrar o cambiar estado de registros para que no este disponible (Hoy día ya no se borran registros, se cambia un flag)
app.delete('/usuario', (req, res) => {
    res.json('DELETE Usuario');
});

module.exports = app;