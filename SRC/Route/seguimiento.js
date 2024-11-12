const router = require('express').Router();
const seguimiento = require('../../models/index');
const ingresoMiddleware = require('../../middleware/session');
const {chekroll} = require('../../middleware/rol');
const {getMensajes,getMensajeId,createMessage} = require('../Controllers/seguimiento');
//*Ruta vista 
router.get('/',ingresoMiddleware, getMensajes);
router.get('/:id',ingresoMiddleware,chekroll(['Administrador']), getMensajeId);

//!Creacion de mensajes
router.post('/', ingresoMiddleware,chekroll(['Administrador']), createMessage);
module.exports = router;