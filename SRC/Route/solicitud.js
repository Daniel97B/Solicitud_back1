const express = require('express');
const router = express.Router();
const {getItems,getoneItems, crearItems,ActualizarItems,deleteItems} = require('../Controllers/solicitud');
const {validacionCreateItem,validaciongetoneItem}= require('../../validators/solicitud');
const ingresoMiddleware = require('../../middleware/session');
const {chekroll} = require('../../middleware/rol');


//Rutas de visualizacion
router.get('/',ingresoMiddleware,chekroll('User'),getItems);
router.get("/:id",validaciongetoneItem,ingresoMiddleware,getoneItems);


//TODO rutas envio de datos
router.post('/', validacionCreateItem,ingresoMiddleware, crearItems);

//?Actualizacion
router.put('/:id',validaciongetoneItem, validacionCreateItem,ingresoMiddleware, ActualizarItems);

//!Eliminar
router.delete('/:id',validaciongetoneItem,ingresoMiddleware, deleteItems);

module.exports = router