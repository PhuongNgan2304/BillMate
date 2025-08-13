const sequelize = require('./src/config/db');
const Client = require('./src/models/client.model');
const Invoice = require('./src/models/invoice.model');

async function syncDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        await sequelize.sync({ alter: true }); 
        // alter: true => tự điều chỉnh bảng nếu thay đổi model
        // force: true => xóa và tạo lại bảng (cẩn thận sẽ mất dữ liệu)

        console.log('All models synchronized successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDatabase();
