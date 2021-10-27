const mongoose = require('mongoose');

let TareaSchema = new mongoose.Schema({
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});

// Defiene el esquema en mongo
module.exports = mongoose.model('tarea', TareaSchema, 'Tareas');