const express = require('express');
const router = express.Router();
const {RegistroUser,LoginUser,checkToken} = require('../Controllers/auth');
const {validacionRegistrar,validacionIngreso} = require('../../validators/auth');

//* Ruta de logueo
router.post("/login",validacionIngreso,LoginUser);

//TODO rutas envio de datos
router.post("/register",validacionRegistrar,RegistroUser);

//! VERIFICACION DE TOKEN
router.get('/verificacion',checkToken);


module.exports = router;