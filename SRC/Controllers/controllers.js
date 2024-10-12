//Realizamos la conexion a la base de datos
const sequelizes = require("../../database/db");
const controller = {};

//Mostrar la pagina principal
controller.login = (req, res) => {
  res.render('auth.hbs');
};

controller.inicio = (req, res)=>{
    res.render('Inicio.hbs');
}




module.exports = controller