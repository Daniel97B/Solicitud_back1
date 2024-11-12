const {check} = require('express-validator');
const validateResults = require('../utils/handlesolicitud');

const validacionCreateItem = [
    check("Nombre_tarea").exists().notEmpty(),
    check("Solicitante").exists().notEmpty(),
    check("Asignado_a").exists().notEmpty(),
    check("Fecha_solicitud").exists().notEmpty(),
    check("Estado").exists().notEmpty(),
    check("Fecha_culminacion"),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];

const validacionEdición = [
    check("id").exists().notEmpty(),
    check("Estado").exists().notEmpty(),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];

const validacionAprobacion = [
    check("id").exists().notEmpty(),
    check("Estado").exists().notEmpty(),
    check("Fecha_culminacion"),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];
const validaciongetoneItem = [
    check("id").exists().notEmpty(),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];

const validaciongetPendiente = [
    check("Asignado_a").exists().notEmpty(),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];
const validaciongetSolicitud = [
    check("Solicitud").exists().notEmpty(),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];

module.exports = {
    validacionCreateItem,
    validaciongetoneItem,
    validaciongetPendiente,
    validaciongetSolicitud,
    validacionAprobacion,
    validacionEdición
};