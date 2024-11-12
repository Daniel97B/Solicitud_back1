const db = require ('../database/db');
const {DataTypes}=require ('sequelize');
const sequelize = db.sequelize;

const seguimiento = sequelize.define(
    'seguimiento',
    {
        mensaje: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emisor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_solicitud: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Estado:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        timestamps: true,
        freezeTableName:true

    }
)

module.exports = seguimiento;