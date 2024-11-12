const { matchedData } = require("express-validator");
const { solicitud, user } = require("../../models");
const { handleHttpError } = require("../../utils/handleHttpError");

/**
 * Obtener lista de datos
 * @param {*}
 * @param {*}
 *
 */
const getItems = async (req, res) => {
  try {
    const datos = await solicitud.findAll({});
    res.status(200).send(datos);
  } catch (e) {
    handleHttpError(res, "Error get items");
  }
};

/**
 * Obtener obtener dato
 * @param {*}
 * @param {*}
 *
 */
const getoneItems = async (req, res) => {
  try {
    const User = req.User;
    const { id } = matchedData(req);
    const datos = await solicitud.findOne({ where: { id: id } });

    res.send(datos);
  } catch (e) {
    handleHttpError(res, "Error get items");
  }
};
/**
 * Crear
 * @param {*}
 * @param {*}
 *
 */

const crearItems = async (req, res) => {
  const body = matchedData(req);
  try {
    const creacion = await solicitud.create(body);
    res.status(201).send({ creacion });
  } catch (error) {
    console.error("Error al insertar solicitud:", error);
    handleHttpError(res, "Error Crear items");
  }
};
/**
 * Actualizar datos
 * @param {*}
 * @param {*}
 *
 */

const ActualizarItems = async (req, res) => {
  const { id, ...body } = matchedData(req);
  try {
    const creacion = await solicitud.update(body, {
      where: { id: id },
    });
    res.status(201).send({ creacion });
  } catch (error) {
    console.error("Error al insertar solicitud:", error);
    handleHttpError(res, "Error Update Items");
  }
};
/**
 * Borrar Datos
 * @param {*}
 * @param {*}
 *
 */
const deleteItems = async (req, res) => {
  try {
    const { id } = matchedData(req);

    const datos = await solicitud.destroy({ where: { id: id } });
    res.send("Elemento eliminado");
  } catch (e) {
    console.log(e);
    handleHttpError(res, "Error Eliminar items");
  }
};
/**
 * Filtrar Solicitudes según asignado 
 * @param {*}
 * @param {*}
 */
const getPendientes = async (req, res) => {
  try {
    const { Asignado_a } = matchedData(req);
    console.log(Asignado_a);
    
    const pendientes = await solicitud.findAll({
      where: { Asignado_a: Asignado_a },
      include: [
        {
          model: user,
          attributes: ["Nombre"],
        },
      ],
    });
    console.log(pendientes);

    res.status(200).send(pendientes);
    return;
  } catch (error) {
    return res.status(404).json({
      msg: "ERROR AL TRAER SOLICITUDES",
    });
  }
};

const getSolicitado = async (req, res) => {
  try {
    const { Solicitud } = matchedData(req);
  
    const solicitudes = await solicitud.findAll({
      where: {
        Solicitante: Solicitud,
      },
      include: [
        {
          model: user,
          attributes:['nombre']
        },
      ]
    });
    res.status(200).send(solicitudes)
  } catch (error) {
    return res.status(404).json({
      msg: "Error al traer una solicitud",
    });
  }
};

const aprobarSolicitud = async(req, res) =>{
  const{id, ...body} = matchedData(req);
  console.log(id,body);
  try {
    const aprobacion = await solicitud.update(body,{
      where:{
        id:id
      }
    });
    return res.status(200).send(aprobacion);
  } catch (error) {
    res.status(404).send('No se puedo realizar la modifcacion');
    console.log(error);
    
  }
  
}

module.exports = {
  getItems,
  getoneItems,
  crearItems,
  ActualizarItems,
  deleteItems,
  getPendientes,
  getSolicitado,
  aprobarSolicitud
};
