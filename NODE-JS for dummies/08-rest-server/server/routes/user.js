const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const messages = require('../constants/messages');
const app = express();
const User = require('../models/user');
const {verifyToken, verifyAdminRole} = require('../middlewares/authentication');

const activeUsers = {state:true}
//Obtener registros
//Importante, ver que se realiza verifyToken para ver si se sigue con la ejecución o no
app.get('/usuario', verifyToken, (req, res) => {

    /*Los valores que se encuentren dentro de req.query son enviados en la url de la forma ?limite=valor&desde=otrovalor */
    let desde = Number.parseInt(req.query.desde) || 0;
    let limite = Number(req.query.limite) || 0;

    User.find(activeUsers, 'user email role state google') //En el find podemos poner validaciones que se requieran (Ej traer solo los usuarios de google) y también qué campos mostras (Ej 'user email')
        .skip(desde) //Se saltea los primeros x cantidad de registros
        .limit(limite)//Muestra x cantidad de registros (Le pone tope)
        .exec((err, users) => { //Luego de traer los objetos que matchean se declara que hacer
            if(err){
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
            let show = users.length;//Muestra la cant que cumple validaciones

            //User.count({validaciones que generalmente es igual a la de find},callback)
            User.count(activeUsers, (err, count) => { //count cuenta el total de registros en la bd
                res.json({ //Mando la respuesta como json
                    ok: true,
                    showing: `${show}/${count}`,
                    users
                })
            });

            
        })




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
app.put('/usuario/:id1',verifyToken, verifyAdminRole, (req, res) => {
    let id = req.params.id1; //De esta forma podemos pasar parametros desde la url y almacenarlos en una variable
    let body = _.pick(req.body, ['user','img','email','role', 'state']);
   
    //Ver la documentacion https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
    //context: 'query' (Sirve para que el runValidators no rompa con los campos definidos como unique)
    User.findByIdAndUpdate(id, body, {new:true, runValidators: true, context: 'query'}, (err, userDB) => {
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
app.delete('/usuario/:id',verifyToken, (req, res) => {
    let id = req.params.id;
    return findUserAndDelete(id, res);
});

//Si es usuario con rol de admin podrá eliminar a otro usuario cualquiera
app.delete('/usuario', [verifyToken, verifyAdminRole], (req, res) => {
    let id = req.body.id;
    return findUserAndDelete(id, res);
});

let findUserAndDelete = ((id, res) => {
    if(id === undefined){
        return res.status(400).json({
            ok:false,
            err: {
                message: messages.USER_TO_DELETE_NOT_FOUND
            }
        });
    }
    User.findByIdAndUpdate(id, {state: false}, (err, userDB) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        if(userDB.state === true){
            res.json({
                ok: true,
                message: `The user "${userDB.user}" was succesfully unsubscribed`
            });
        }else{
            res.json({
                ok: false,
                message: `The user "${userDB.user}" it's already unsubscribed`
            });
        }
    });
});

module.exports = app;