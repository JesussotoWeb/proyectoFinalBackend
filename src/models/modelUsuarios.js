const {Schema, model} = require("mongoose");

const userModel = Schema({

    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    password: {
        type: String,
    }
})

const ModelUser = model("User", userModel);

module.exports = ModelUser;