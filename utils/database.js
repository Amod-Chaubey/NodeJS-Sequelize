const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
