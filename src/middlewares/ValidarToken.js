const Jwt = require("jsonwebtoken");

const validateToken = (req, res) =>{
    const token = req.header('token')
        try {
            if(!token){
                return res.status(404).json({
                    ok: false,
                    msg: "token invalido"
                })
            }
            const decodePayload = Jwt.verify(token, process.env.TOKEN_KEY)
            req.user = decodePayload;
            return res.status(200).json({
                ok: true,
                msg: 'token valido',
            })
        } catch (error) {
            console.log(error);
            return res.status(403).json({
                ok: false,
                msg: "Token invalidoo"
            })
        }
    
}
module.exports = validateToken;