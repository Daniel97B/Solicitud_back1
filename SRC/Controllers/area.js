const {relacion_area, area, login} = require('../../models/index');
const {matchedData} = require('express-validator');
const {handelHttpError} = require('../../utils/handleHttpError');
const { where } = require('sequelize');
const { join } = require('path');

/**
 * Asignar area a usuario
 * @param {*} req 
 * @param {*} res 
 */
const area_usuario = async (req, res) => { 
    try {
        const {body} =req;
        console.log(body);
        const area_user = await relacion_area.create(body);
        return res.status(200).send({area_user});
    } catch (error) {
        
        res.status(500).send({message: "Error al asignar area a usuario"});
    }
};
/**
 * Obtener lista de usuarios en una area
 * @param {*} req
 * @param {*} res
 */
const getAreaForUser = async (req, res) => {
    const id=req.params.id;
    console.log(id);
    
    try {
        const areas = await login.findAll({
            include:[{
                model:relacion_area,
                where:{Id_Area:id},
            }],
            attributes:['Nombre','id']
        });
        console.log(areas);
        
        return res.status(200).send({areas});
    } catch (error) {
        console.log(error);
        
        res.status(500).send({message: "Error al obtener area"});
    }
}
const getArea = async(req, res)=>{
    try {
        const areas = await area.findAll({});
        res.status(200).send(areas)
    } catch (error) {
        handelHttpError(res.status(501).send({message:'Error consulta Area'},error))
    }
}
module.exports = {
    area_usuario,
    getArea,
    getAreaForUser
}