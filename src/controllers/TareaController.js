const modeloTareas = require("../models/modelTareas");

const setTarea = async (req, res) => {
    const {nombreTask} = req.body;

    try{
        let Tarea = await modeloTareas.findOne({nombreTask})
        res.status(200).json({
            ok: true,
            msg: "Datos registrados",
            Trea: req.body.nombreTask
        })

        Tarea = new modeloTareas(req.body)
        Tarea.save()
    }catch (error){
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            error: error
        })
    }

}
const getTarea = async (req, res) => {
    
    const listarTareas = await modeloTareas.find();

    res.json({
        ok: true,
        lista: listarTareas
    })

    
}

const removeTarea = async (req, res) => {
    

    const idTarea = req.params.id;

    try{
        const Tarea = await modeloTareas.findById(idTarea);
        
        if(!Tarea){
            return res.status(404).json({
                ok: false,
                message: "No se encuentra la tarea"
            })
        }
         await modeloTareas.findByIdAndDelete(Tarea)

         return res.status(200).json({
            ok: true,
            message: "Se ha eliminado la tarea"
        })

    }catch(Error){
        return res.status(500).json({
            ok: false,
            message: "Error en el servidor"
        })
    }



}

const putTarea = async (req, res) => {

    const idTarea = req.params.id;
    const updateTarea = req.body;
    try{
        const tarea = await modeloTareas.findByIdAndUpdate(idTarea, updateTarea, {new: true})

        if(!tarea){
            return res.status(404).json({
                ok: false,
                menssage: "No se encuentra la tarea"
            })
        }

        return res.status(200).json({
            ok: true,
            menssage: "Tarea actualizada"
        })

    }catch(error){
        return res.status(500).json({
            ok: false,
            menssage: "Error en el servidor"
        })
    }
}
module.exports = {
    setTarea,
    getTarea,
    removeTarea,
    putTarea
}