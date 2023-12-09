const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  uName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Appointment;
