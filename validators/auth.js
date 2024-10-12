const {check} = require('express-validator');
const validateResults = require('../utils/handlesolicitud');

const validacionRegistrar = [
    check("User").exists().notEmpty().isLength({min:3, max:20}),
    check("Nombre").exists().notEmpty().isLength({min:3, max:70}),
    check("Roll"),
    check("Password").exists().notEmpty().isLength({min:3, max:15}),
    check("Email").exists().notEmpty().isEmail(),
    (req,res,next)=>{
        return validateResults(req,res,next)
    }
];


const validacionIngreso =[
    check("User").exists().notEmpty().isLength({min:3, max:20}),
    check("Password").exists().notEmpty().isLength({min:3, max:15}),
    (req,res,next)=>{
            
        return validateResults(req,res,next)
    }
];
module.exports = {
    validacionRegistrar,
    validacionIngreso
};
