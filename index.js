const express = require('express');
const cors = require('cors');
const app = express();

require("./src/db/conexion");

app.use(cors());
app.use(express.json())

app.use("/api/auth", require("./src/routes/Auth.js"));

app.use("/api/tarea", require("./src/routes/Tarea.js"));

  
app.listen(4500, () => {
    console.log('Server iniciado exitsamente en la ruta: ' + 4500)
})