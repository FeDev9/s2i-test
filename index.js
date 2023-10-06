const express = require('express')
const sequelize = require('./config/database');
const apiRouter = require('./routes/api');
const app = express()


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    app.use('/api', apiRouter);

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
