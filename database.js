//import sequelize library
const { Sequelize } = require("sequelize");
const path = require("path");

const storage = path.join(__dirname, "database.sqlite");

//database connection - sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage,
  });

  //exports connection to database
  module.exports = sequelize;

