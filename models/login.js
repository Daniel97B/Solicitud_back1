const { DataTypes } = require("sequelize");
const db = require('../database/db'); // Asegúrate de que la ruta sea correcta
const sequelize = db.sequelize; // Cambia a sequelize

const login = sequelize.define(
    "login",
    {
        User: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
        },
        Roll: {
            type: DataTypes.ENUM(["Director", "Jefe", "Administrador"]), // Corrige "Adminsitrador"
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            select: false
        },
        Email:{
            type:DataTypes.STRING,
        }
    },
    {
        tableName: 'login',
        timestamps: true, // Corrección aquí
    }
);

module.exports = login;