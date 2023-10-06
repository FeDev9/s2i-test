const Course = require('./course');
const Instructor = require('./instructor');
const Student = require('./student');
const Enrollment = require('./enrollment');

Course.belongsTo(Instructor, { foreignKey: 'instructorId' });
Instructor.hasMany(Course, { foreignKey: 'instructorId' });

Course.belongsToMany(Student, { through: Enrollment });
Student.belongsToMany(Course, { through: Enrollment });