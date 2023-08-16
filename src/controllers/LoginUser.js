
const { response } = require("express");
const ModeloUser = require("../models/modelUsuarios");
const generarJWT = require('../helpers/jwt');

const registrarUser = async (req, res) => {
    const {nombre, apellido} = req.body;

    try{
        let User = await ModeloUser.findOne({nombre})


        if(User){
            return res.status(403).json({
                ok: false,
                msg: "Usuario existente"
            })

        }
        

        /* Token */
        const token = await generarJWT(nombre,apellido)


        User = new ModeloUser(req.body)
        User.save()


        return res.status(200).json({
            ok: true,
            msg: "Datos registrados",
            userName: req.body.nombre,
            userLastName: req.body.apellido,
            token
        })
    }catch (error){
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            error: error
        })
    }
         
}
const sesionUser = async (req, res) => {
    const {nombre, apellido} = req.body;

    try {
        
        const user = await ModeloUser.findOne({nombre});
        if(!user){
            return res.status(404).json({
                ok: false,
                menssage: "No se encuentra el usuario"
            })
        }

        /* JWT */
        const token = await generarJWT(nombre, apellido);
        return res.status(200).json({
            ok: true,
            nombre: nombre,
            apellido: apellido,
            token: token
        })


    } catch(error) {
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            error: error
        })
    }
}
const getUser = async (req, res = response) => {
   
    const listarUsuarios = await ModeloUser.find();

    res.json({
        ok: true,
        lista: listarUsuarios
    })
         
}



module.exports = {
    getUser,
    registrarUser,
    sesionUser
};