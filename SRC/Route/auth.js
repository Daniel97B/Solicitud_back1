const express = require('express');
const router = express.Router();
const {RegistroUser,LoginUser} = require('../Controllers/auth');
const {validacionRegistrar,validacionIngreso} = require('../../validators/auth');

//* Ruta de logueo
router.get("/login",validacionIngreso,LoginUser);

//TODO rutas envio de datos
router.post("/register",validacionRegistrar,RegistroUser);



module.exports = router;