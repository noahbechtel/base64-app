const Sequelize = require('sequelize')
const db = require('../db')

const Entry = db.define('entry', {
  sessionId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Entry
