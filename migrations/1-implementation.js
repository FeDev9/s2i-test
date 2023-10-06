module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Creazione della tabella Courses
    await queryInterface.createTable('Courses', {
      courseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      startDate: Sequelize.DATE,
      endDate: Sequelize.DATE,
      instructorId: Sequelize.INTEGER,  // Chiave esterna per la relazione con gli istruttori
    });

    // Creazione della tabella Instructors
    await queryInterface.createTable('Instructors', {
      instructorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true
      }
    });

    // Creazione della tabella Students
    await queryInterface.createTable('Students', {
      studentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      points: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Creazione della tabella Enrollments
    await queryInterface.createTable('Enrollments', {
      studentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Students',
          key: 'studentId'
        }
      },
      courseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Courses',
          key: 'courseId'
        }
      }
    });

    // Definizione della relazione tra Courses e Instructors
    await queryInterface.addConstraint('Courses', {
      fields: ['instructorId'],
      type: 'foreign key',
      name: 'fk_courses_instructors',
      references: {
        table: 'Instructors',
        field: 'instructorId'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Rimozione delle tabelle nel caso di rollback della migrazione
    await queryInterface.dropTable('Enrollments');
    await queryInterface.dropTable('Students');
    await queryInterface.dropTable('Instructors');
    await queryInterface.dropTable('Courses');
  }
};