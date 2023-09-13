const Sequelize = require('sequelize');

const connection = new Sequelize('desafio2', 'root', '1597530', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;