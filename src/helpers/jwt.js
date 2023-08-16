const jwt = require("jsonwebtoken");

const generarJWT = (nombre, apellido) => {
    return new Promise((resolve, reject) => {
        const payload = { nombre, apellido };


        jwt.sign(payload, process.env.TOKEN_KEY, {
            expiresIn: "1m"
        }, (err, token) => {
            if( err ){
                console.log(err);
                reject("no se pudo generar el token");
            }

            resolve(token);
        });
    })
}

module.exports = generarJWT;