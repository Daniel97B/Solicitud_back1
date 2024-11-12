const router = require("express").Router();
const ingresoMiddleware = require("../../middleware/session");
const {validacionAreaUsuario} = require('../../validators/area');
const {area_usuario, getArea,getAreaForUser} = require("../Controllers/Area");


router.get('/',ingresoMiddleware,getArea);
router.get('/:id',validacionAreaUsuario,ingresoMiddleware,getAreaForUser);

//!Crear relacion entre Usuario y area
router.post('/',validacionAreaUsuario,ingresoMiddleware,area_usuario);

module.exports = router;