const { matchedData } = require('express-validator');
const {handleHttpError} =require('../utils/handleHttpError');
//*Array con los roles permitidos
const chekroll = (roll) => (req,res,next)=>{
    try {

        const { Roll } = req.User.dataValues;
        const checkValueRol = roll.some((rolSingle) => Roll.includes(rolSingle));
        
        if (!checkValueRol) {
            handleHttpError(res,'Usuario sin permisos',403)
        };

        next();
    
    } catch (e) {
        handleHttpError(res,'Permisos de rol',403)
    }
    
};

module.exports = {
    chekroll
};