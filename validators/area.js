const {check} = require('express-validator');
const validateAreaResults = require('../utils/handlearea');

const validacionAreaUsuario =[
    check('Id_Area').exists().notEmpty(),
    check('Id_Usuario').exists().notEmpty(),
    (req,res,next)=>{
        return validateAreaResults(res,res,next)
    }
]
const validacionArea =[
    check('').exists().notEmpty(),
    (req,res,next)=>{
        return validateAreaResults(res,res,next)
    }
]
module.exports = {
    validacionAreaUsuario
}