const {Router} = require("express");
const router = Router();


const {getUser, registrarUser, sesionUser} = require("../controllers/LoginUser");
const validateToken = require("../middlewares/ValidarToken.js")
/* 
       /api/auth/
*/
router.get('/users', getUser)
router.post('/registrarUsuario', registrarUser)
router.post('/login', sesionUser)
router.get('/verificarToken', validateToken)


/* router.put('/', registrarUser)
router.delete('/', registrarUser) */


module.exports = router;