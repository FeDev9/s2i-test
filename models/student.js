const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Student extends Model { }

Student.init({
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  points: DataTypes.INTEGER
}, { sequelize, modelName: 'Student' });

module.exports = Student;