const express = require('express');
const messages = require('../constants/messages');

let {verifyToken, verifyAdminRole} = require('../middlewares/authentication');

let app = express();

let Category = require('../models/category');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/categoria', verifyToken,(req,res) => {
    Category.find({})
        .exec((err, categories) => {
            if(err){
                return res.status(500).json({
                    ok:false,
                    err
                });
            }

            res.json({
                ok: true,
                categories
            });

        });

    
});

// ============================
// Mostrar una categoria por ID
// ============================
app.get('/categoria/:id', verifyToken,(req,res) => {

    let id = req.params.id;

    Category.findById(id, (err, categoryDB) => {

        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!categoryDB){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            category: categoryDB
        })
    });
    
});

// ============================
//    Crear nueva categoría
// ============================
app.post('/categoria', verifyToken, (req,res) => {
    //Regresa la nueva categoria
    let body = req.body;
    let category = new Category({
        description: body.description,
        user: req.user._id
    })

    console.log(req.user);

    category.save((err, categoryDB) => {

        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!categoryDB){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            category: categoryDB
        })

    });
    
});

// ============================
//   Actualiza una categoría
// ============================
app.put('/categoria/:id',[verifyToken, verifyAdminRole], (req,res) => {

    let id = req.params.id;
    let body = req.body;

    let descCategory = {
        description: body.description
    }

    Category.findByIdAndUpdate(id, descCategory, {new:true, runValidators: true, context: 'query'}, (err, categoryDB) => {

        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!categoryDB){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            category: categoryDB
        })
    });

});

// ============================
//    Elimina una categoría
// ============================
app.delete('/categoria/:id',[verifyToken, verifyAdminRole], (req,res) => {
    //Elimina categoria
    let id = req.params.id;


    Category.findByIdAndRemove(id, {new:true, runValidators: true, context: 'query'}, (err, categoryDB) => {

        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!categoryDB){
            return res.status(400).json({
                ok:false,
                err: messages.ID_NOT_FOUND
            });
        }

        res.json({
            ok: true,
            message: messages.CATEGORY_ELIMINATED
        })
    });
    
});


module.exports = app;