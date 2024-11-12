const {DataTypes} = require('sequelize');
const db = require('../database/db');
const sequelize = db.sequelize;

const area = sequelize.define(
    "area",
    {
        Area:{
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName:true,
        timestamps: true
    }
);

module.exports = area