const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Enrollment extends Model { }

Enrollment.init({
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'students',
      key: 'studentId'
    }
  },
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'courses',
      key: 'courseId'
    }
  }
}, { sequelize, modelName: 'Enrollment' });

module.exports = Enrollment;