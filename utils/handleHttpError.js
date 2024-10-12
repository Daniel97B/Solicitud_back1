const handleHttpError = (res,mensaje="Algo sucedio", code = 403) =>{
    res.status(code);
    res.send({error: mensaje});
}

module.exports = {handleHttpError};