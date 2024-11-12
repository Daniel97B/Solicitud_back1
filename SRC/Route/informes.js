const express = require('express');
const router = express.Router();
const {cantidadsolictud} = require('../Controllers/informes');
const {validaciongetoneItem}= require('../../validators/solicitud');
const ingresoMiddleware = require('../../middleware/session');

//*Contador de solicitudes y realizadas

router.get('/informe/:id', validaciongetoneItem,cantidadsolictud);

module.exports = router;