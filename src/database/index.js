const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Dicionario = require('../models/Dicionario')
const connection = new Sequelize(dbConfig)

Dicionario.init(connection)
module.exports = connection