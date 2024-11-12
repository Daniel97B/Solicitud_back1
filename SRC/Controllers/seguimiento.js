const { seguimiento, user, solicitud } = require("../../models/index");
const { matchedData, body } = require("express-validator");
const { handleHttpError } = require("../../utils/handleHttpError");
const { log } = require("console");

/**
 * *Visualizar seguimientos
 */

const getMensajes = async (req, res) => {
  try {
    const datos = await user.findAll({
      include: [{
          model: seguimiento,
          attributes: ["Nombre"],
        }],
      attributes: ["Nombre"],
    });
    res.status(200).send(datos);
  } catch (e) {
    handleHttpError(res, "Error get items");
  }
};
/**
 *  Visualizar mensaje segun solicitud
 * @param {*} req 
 * @param {*} res 
 */
const getMensajeId = async (req, res) => {
  const id = req.params.id;

  try {
    const datos = await seguimiento.findAll({
      include: [
        {
          model: user,
          attributes: ["id", "Nombre"],
        },
      ],
    });
    res.status(200).send(datos);
  } catch (e) {
    handleHttpError(res, "Error get items");
  }
};

/**
 * Crear Mensaje de el chat
 * @param {*} req
 * @param {*} res
 */
const createMessage = async (req, res) => {  
  const body =req.body;
  console.log(body);
  const mensaje_creacion =await seguimiento.create(body); 
  return res.send(mensaje_creacion).status(200);

};

module.exports = {
  getMensajes,
  getMensajeId,
  createMessage
};
