const { matchedData } = require('express-validator');
const {handleHttpError} =require('../utils/handleHttpError');
//*Array con los roles permitidos
const chekroll = (roll) => (req,res,next)=>{
    try {
        const { User } = req.user;
        const rolbyuser = User.role;
        console.log(User.Roll);
        
        const checkValueRol = roll.some((rolSingle) => rolbyuser.includes(rolSingle));
        
        
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