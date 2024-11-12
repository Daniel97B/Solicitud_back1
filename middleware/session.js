
const  {user } = require('../models');
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
        
        const dataToken = await verifySing(token);        
        if(!dataToken.id){
            res.send(res,"ERROR EN EL ID_TOKEN",401);
            res.send('token invalido')
            return
        }
        const User = await user.findOne({where:{id: dataToken.id}});
        req.User = User;
        
        
        next(); 
    } catch (e) {
        res.status(401).send('NO SESION');        
    }
};

module.exports = ingresoMiddleware;