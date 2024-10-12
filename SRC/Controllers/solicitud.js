const { matchedData } = require('express-validator');
const { solicitud } = require("../../models/");
const {handleHttpError}= require('../../utils/handleHttpError');
/**
 * Obtener lista de datos
 * @param {*}
 * @param {*}
 *
 */
const getItems = async (req, res) => {
    try {       
        const datos = await solicitud.findAll({});
        res.status(200).send(datos); 
    } catch (e) {
        handleHttpError(res,'Error get items')
    }
    
};

/**
 * Obtener obtener dato
 * @param {*}
 * @param {*}
 *
 */
const getoneItems = async (req, res) => {
   
    try {
        const User = req.User;
        const {id} = matchedData(req);
        const datos= await solicitud.findOne({ where: { id: id } });
        
        res.send(datos); 
        
    } catch (e) {
        handleHttpError(res,'Error get items')
    }
    
};
/**
 * Crear
 * @param {*}
 * @param {*}
 *
 */

const crearItems = async (req, res) => {
    const body = matchedData(req);
    try {
        const creacion = await solicitud.create(body);
        res.status(201).send({ creacion });
    } catch (error) {
        console.error("Error al insertar solicitud:", error);
        handleHttpError(res,'Error Crear items');
    }
};
/**
 * Actualizar datos
 * @param {*}
 * @param {*}
 *
 */

const ActualizarItems = async(req, res) => {

    const { id, ...body } = matchedData(req);
    try {
        const creacion = await solicitud.update(body,{
            where: {id:id}
        });
        res.status(201).send({ creacion });
    } catch (error) {
        console.error("Error al insertar solicitud:", error);
        handleHttpError(res,'Error Update Items');
    }
};
/**
 * Borrar Datos
 * @param {*}
 * @param {*}
 *
 */
const deleteItems = async (req, res) => {
    
    try {
        const {id} = matchedData(req);
        
        const datos = await solicitud.destroy({where:{id:id}});
        res.send('Elemento eliminado');  
    } catch (e) {
        console.log(e);
        handleHttpError(res,'Error Eliminar items');
    }
    
};

module.exports = {
    getItems,
    getoneItems,
    crearItems,
    ActualizarItems,
    deleteItems,
};
