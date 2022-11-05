const Sequelize = require('sequelize')
const sequelize = require('../utils/db')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    firstName: Sequelize.STRING,
    middleName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    password: Sequelize.STRING,
    accessToken: Sequelize.STRING,
    lastLogin: Sequelize.STRING,
})


module.exports = User