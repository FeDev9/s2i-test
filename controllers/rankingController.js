const { Op } = require('sequelize');
const Student = require('../models/student');

exports.getRanking = async (req, res) => {
  try {
    const students = await Student.findAll({
      where: {
        points: {
          [Op.between]: [50, 450]
        }
      },
      limit: 2,
      order: [['points', 'DESC']]
    });
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
};