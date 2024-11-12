const {DataTypes} = require('sequelize');
const db = require('../database/db');
const sequelize = db.sequelize;

const relacion_area = sequelize.define(
    "relacion_area",
    {
        Id_Area: DataTypes.NUMBER,
        Id_Usuario: DataTypes.NUMBER
    },
    {
        freezeTableName:true,
        timestamps: true
    }
)
module.exports = relacion_area