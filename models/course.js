const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Course extends Model { }

Course.init({
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE
}, { sequelize, modelName: 'Course' });

module.exports = Course;