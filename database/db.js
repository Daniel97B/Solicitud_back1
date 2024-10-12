const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env"});

const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

const sequelize = new Sequelize(
  database,
  user, password, {
  host,
  dialect: "mysql",
});

const conexion = async () => {
  try {
      await sequelize.authenticate();
      console.log("Conexión correcta");
  } catch (e) {
      console.error("Error de conexión:", e);
  }
};

const db ={
  sequelize,
  Sequelize,
  conexion
};

module.exports = db;
