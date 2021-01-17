const express = require('express');

let {verifyToken} = require('../middlewares/authentication');

let app = express();

let Category = require('../models/category');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/category', (req,res) => {

    
});