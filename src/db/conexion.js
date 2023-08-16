const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL)
mongoose.set("strictQuery", true);

const database = mongoose.connection;

database.on("connected", () => {
    console.log("Base de datos creada y inicializada")
})
database.on("error", () => {
    console.log("Error al establecer con la DB")
})

module.exports = mongoose;