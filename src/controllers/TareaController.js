

const setTarea = async (req, res) => {
   res.json({
    ok: true,
    datos: req.body
   })

}
const getTarea = async (req, res) => {
    res.send("/api/tarea/tareas ipo")

    
}

module.exports = {
    setTarea,
    getTarea
}