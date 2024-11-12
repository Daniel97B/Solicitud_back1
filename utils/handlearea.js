const {validationResult} = require('express-validator');

const validateAreaResults = (req, res,next)=>{
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.status({errors:error.array()});
        console.log({errors:error.array()});
    }
}

module.exports = validateAreaResults;