const Chance = require('chance');
const chance = new Chance();  // Crea un'istanza di Chance

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const students = [];
    for (let i = 0; i < 100; i++) {
      students.push({
        firstName: chance.first(),  // Usa chance invece di faker
        lastName: chance.last(),
        email: chance.email(),
        points: Math.floor(Math.random() * (970 - 30 + 1)) + 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('Students', students, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};