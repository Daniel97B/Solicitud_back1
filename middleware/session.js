
const { login } = require('../models');
const { verifySing } = require('../utils/handleJwt');
const {handleHttpError} =require('../utils/handleHttpError');
//*Creamos la funcion de validación para los persmisos de las rutas

const ingresoMiddleware = async(req, res, next)=>{
    try {
        if (!req.headers.authorization) {
            handleHttpError(res,'NO TOKEN',409);
            return;        
        };
        //!Esta guardando el token una variable, seleccionando la ultima parte.
        const token = req.headers.authorization.split (' ').pop();
        console.log(token);
        
        const dataToken = await verifySing(token);
        console.log(dataToken);
        
        if(!dataToken.id){
            handleHttpError(res,"ERROR EN EL ID_TOKEN",401);
            return
        }
        const user = await login.findOne({where:{id: dataToken.id}});
        req.User = user;
        
        
        next(); 
    } catch (e) {
        handleHttpError(res,'NO SESION',e)        
    }
};

module.exports = ingresoMiddleware;