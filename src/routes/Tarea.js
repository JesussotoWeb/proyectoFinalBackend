const {Router} = require("express");
const router = Router();

const {setTarea, getTarea} = require("../controllers/TareaController");
/* /api/tarea */
router.post("/", setTarea)
router.get("/tareas", getTarea)

module.exports = router;