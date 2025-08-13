const sequelize = require('./src/config/db.js');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connected successfully!');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
        console.log('Connection closed.');
    }
}

testConnection();