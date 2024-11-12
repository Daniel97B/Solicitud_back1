const express = require('express');
const router = express.Router();
const {getItems,getoneItems, crearItems,ActualizarItems,deleteItems, getPendientes, getSolicitado, aprobarSolicitud} = require('../Controllers/solicitud');
const {validacionCreateItem,validacionEdición,validaciongetoneItem, validacionAprobacion, validaciongetSolicitud, validaciongetPendiente}= require('../../validators/solicitud');
const ingresoMiddleware = require('../../middleware/session');
const {chekroll} = require('../../middleware/rol');


//Rutas de visualizacion
router.get('/',ingresoMiddleware,getItems);
router.get("/:id",validaciongetoneItem,ingresoMiddleware,getoneItems);


//TODO rutas envio de datos
router.post('/', validacionCreateItem,ingresoMiddleware, crearItems);

//?Actualización
router.put('/:id',validaciongetoneItem, validacionEdición,ingresoMiddleware, ActualizarItems);
router.put('/aprobado/:id',validaciongetoneItem, validacionAprobacion,ingresoMiddleware, aprobarSolicitud);

//!Eliminar
router.delete('/:id',validaciongetoneItem,ingresoMiddleware, deleteItems);

//*SOLICITAR PENDIENTES
router.get("/pendientes/:Asignado_a", validaciongetPendiente,ingresoMiddleware,getPendientes);

//*SOLICITAR PENDIENTES
router.get("/solicitado/:Solicitud", validaciongetSolicitud,ingresoMiddleware,getSolicitado);


module.exports = router;