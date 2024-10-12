const { matchedData, check } = require("express-validator");
const {login} = require("../../models/");
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
        
    const checkIsExist = await login.findOne({ where:{ User: body.User }});
    if (checkIsExist) {
      handleHttpError(res, "USER_EXISTS", 401);
      return;
    }
    const password = await encrypt(body.Password);
    const bodyInsert = { ...body, password };
    const creacion = await login.create(bodyInsert);
    const token = await tokenSing(creacion);
    const datas = {
      token:token,
      data: creacion,
    };
    res.status(200).send({ datas });

  } catch (e) {
    handleHttpError(res, "error al registrar un usuario", e)
  }
};

const LoginUser = async (req, res) => {
    try {
        req = matchedData(req);
        
        const Usuario = await login.findOne({ where: { User: req.User }});
        
        if (!Usuario) {
            handleHttpError(res, "Usuario no existe",404)
            return;
        };

        const hashPassword = Usuario.Password;
        Usuario.set('Password', undefined, {strict:false})
        const check = await compare(req.Password,hashPassword);        
        
        
       if (!check) {
        handleHttpError(res, "Contraseña incorrecta",401);
       };
       
       const tokenJwt = await tokenSing(Usuario);

       const data = {
         token: tokenJwt,
         user: Usuario,
       };
        res.status(200).send({ data: data });
      } catch (e) {
        handleHttpError(res, "error al login un usuario", e)
    }
};

module.exports = {
  RegistroUser,
  LoginUser,
};
