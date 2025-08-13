const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('invomate_client', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company:{
        type: DataTypes.STRING,
    },
    phone_number:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING
    }
}, {
    tableName: 'invomate_client',
    timestamps: false
});

module.exports = Client;
