const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Client = require('./client.model');

const Invoice = sequelize.define('invomate_invoice', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    invoice_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    invoice_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    prepared_by: {
        type: DataTypes.STRING,
        allowNull: false
    },
    client_id: { // khóa ngoại
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Client,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    note: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'invomate_invoice',
    timestamps: false
});

// Relationships N-1
Client.hasMany(Invoice, { foreignKey: 'client_id' });
Invoice.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Invoice;