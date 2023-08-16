const { Schema, model } = require("mongoose")

const tareaModelo = new Schema({
    nombreTask: {
        type: String
    },
    descripcion: {
        type: String
    },
    fecha: {
        type: Date
    }
});

const modeloTareas = model("Tarea", tareaModelo);
module.exports = modeloTareas;