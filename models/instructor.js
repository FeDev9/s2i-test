const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Instructor extends Model { }

Instructor.init({
  instructorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  }
}, { sequelize, modelName: 'Instructor' });

module.exports = Instructor;