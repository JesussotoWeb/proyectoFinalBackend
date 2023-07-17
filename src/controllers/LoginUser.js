
const { response } = require("express");
const ModeloUser = require("../models/modelUsuarios");

const registrarUser = async (req, res) => {
    const {nombre} = req.body;

    try{
        let User = await ModeloUser.findOne({nombre})
        res.status(200).json({
            ok: true,
            msg: "Datos registrados",
            userName: req.body.nombre,
            userLastName: req.body.apellido,
        })

        User = new ModeloUser(req.body)
        User.save()
    }catch (error){
        console.log(error);

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
    registrarUser
};