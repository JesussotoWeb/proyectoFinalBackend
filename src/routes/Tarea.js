const {Router} = require("express");
const router = Router();

const {setTarea, getTarea, removeTarea, putTarea} = require("../controllers/TareaController");

/* /api/tarea */

router.post("/", setTarea)
router.get("/tareas", getTarea)
router.delete("/:id", removeTarea)

router.put("/:id", putTarea)

module.exports = router;