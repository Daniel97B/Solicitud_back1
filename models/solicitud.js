const {DataTypes}= require("sequelize");
const db = require("../database/db");
const sequelize = db.sequelize;

const solicitud = sequelize.define(
    "solicitud",
    {
        Nombre_tarea: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Solicitante: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Asignado_a: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Fecha_solicitud: {
            type: DataTypes.DATE,
        },
        Estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Fecha_culminacion: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'solicitud',
        timestamps: true,
    }
);


module.exports = solicitud;