const {Router} = require("express");
const router = Router();


const {getUser, registrarUser} = require("../controllers/LoginUser");

/* 
       /api/auth/
*/
router.get('/users', getUser)
router.post('/', registrarUser)
/* router.put('/', registrarUser)
router.delete('/', registrarUser) */


module.exports = router;