const Sequelize = require("sequelize");
const connection = require("./database");

const employee = connection.define('employee', {
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    role : {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}); 

employee.sync({force: false}).then(() => {});