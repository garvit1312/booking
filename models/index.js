const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const Appointment = require('./appointment');  // Correct the path here

const models = {
  Appointment: Appointment(sequelize, DataTypes),
};

module.exports = models;

