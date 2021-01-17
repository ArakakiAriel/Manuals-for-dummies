const mongoose = require('mongoose');
const messages = require('../constants/messages');
//Declaramos un esquema
let Schema = mongoose.Schema;

let categorySchema = new Schema({
    description: {type: String, unique: true, required: [true, messages.DESCRIPTION_REQUIRED]},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Category', categorySchema);