const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcryptjs = require("bcryptjs");
const cors = require('cors');

//Utilizamos importation, para asignar un puerto de entrada a la aplicación
const app = express();
var port = process.env.PORT || 5006;

//Convierte una peticion recibida desde una api a objeto json esto con la finalidad de poder recibir datos
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//Citamos con dotenv las variables de entorno
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env"});

//configuramos el directorio publico con la finalidad de traer todo el diseño
app.use("/resources", express.static("public"));

//Realizamos la conexion a la base de datos
const db = require('./database/db'); // Asegúrate de que la ruta sea correcta

// Llamar a la función de conexión
db.conexion();

//Variables de Sesión, asegurar seguridad basica de sesion


//Instanciamos las rutas

app.use("/api",require('./SRC/Route/'));

app.listen(port, function () {
  console.log(`Server running in https://localhost:${port}`);
  console.log("Rutas definidas:");
  console.log("  [GET] http://localhost:3006/");
});
