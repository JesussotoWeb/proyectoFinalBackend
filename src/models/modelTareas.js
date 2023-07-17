const { Schema, model } = require("mongoose")

const tareaModelo = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    fech_creacion: {
        type: String
    },
    limite: {
        type: String
    }
});

const modeloTareas = model("Tarea", tareaModelo);
module.exports = modeloTareas;