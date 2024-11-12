const {matchedData} = require('express-validator');
const {solicitud,login} = require('../../models/');
const {handleHttpError} = require('../../utils/handleHttpError');
const { count } = require('console');

/**
 * Obtener solicitudes
 */
const cantidadsolictud = async (req,res) => {
    try {
        const id = matchedData(req);
        console.log(id.id);
        const datos = await solicitud.count({
            where:{
                Asignado_a:id.id
            }
        });
        const datosFinalizado = await solicitud.count({
            where:{
                Asignado_a:id.id,
                Estado:1
            }
        });
        Finalizado ={
            Total:datos,
            Finalizado:datosFinalizado
        };
        res.status(200).send(Finalizado);
    } catch (error) {
        handleHttpError(res,error);
    }
}

module.exports={
    cantidadsolictud
}