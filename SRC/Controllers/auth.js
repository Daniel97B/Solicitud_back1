const { matchedData, check } = require("express-validator");
const {user} = require("../../models/index");
const { handleHttpError } = require("../../utils/handleHttpError");
const {tokenSing, verifySing } = require("../../utils/handleJwt")
const { encrypt,compare } = require('../../utils/handlePassword'); 

/**
 * Crear usuario
 * @param {*}
 * @param {*}
 *
 */

const RegistroUser = async (req, res) => {
  try {
    const body = matchedData(req);
        
    const checkIsExist = await user.findOne({ where:{ User: body.User }});
    if (checkIsExist) {
      handleHttpError(res, "USER_EXISTS", 401);
      return;
    }
    const Password = await encrypt(body.Password);    
    const bodyInsert = {...body, Password};
    const creacion = await user.create(bodyInsert);
    const token = await tokenSing(creacion);
    const datas = {
      token:token,
      data: creacion,
    };
    res.status(200).send({ datas });

  } catch (e) {
    return res.status(404).json({
      msg: "ERROR_AL REGISTRAR USUARIOS"
    });
  }
};

const   LoginUser = async (req, res) => {
    try {
        req = matchedData(req);
        
        const Usuario = await user.findOne({ where: { User: req.User }});
        
        if (!Usuario) {
          return res.status(404).json({
            msg: "USER_NOT_EXISTS"
          });
        };

        const hashPassword = Usuario.Password;
        Usuario.set('Password', undefined, {strict:false})
        const check = await compare(req.Password,hashPassword);    
        console.log(req.Password);
        console.log(check);
        
        
       if (!check) {
        return res.status(401).json({
          msg: "Contraseña incorrecta"
        });
       };
       
       const tokenJwt = await tokenSing(Usuario);
       const data = {
         token: tokenJwt,
         user: Usuario,
       };
        res.status(200).send({ data: data });
      } catch (e) {
      console.log( handleHttpError(res, "error al user un usuario", e));
      return res.status(404).json({
        msg: "USER_NOT_EXISTS"
      }); 
    }
};
const checkToken = async(req,res,next) =>{
  //? Condicion 
  try{        
      if (!req.headers.authorization) {
          return res.json({
              msg: 'NOT_TOKEN'
          });
      }
      const token =req.headers.authorization.split(' ').pop();
      // verificamos la data del token
      const dataToken = await verifyToken(token) 
      // indicamos condicion en caso de que no exista
      if (dataToken === null) {
          return res.json({
              msg: "TOKEN_NULO"
          });
      }else{
        return res.json({
          msg: "TOKEN_VALIDO"
        });
      }
      
  }catch(e){
    console.log(e);
    return res.json({
        msg: "ERROR_SESSION_TOKEN"
    });
  }
}
module.exports = {
  RegistroUser,
  LoginUser,
  checkToken
};
