const Sequelize = require('sequelize');
const sequelize = new Sequelize('booking-app', 'root', 'mod@1999', {
    dialect: 'mysql',
    host: 'localhost',

})
module.exports = sequelize;