//table in our database - establish connection to database (import sequelize here)
const sequelize = require("./database");

//imports sequelize
const { DataTypes, Model } = require("sequelize");

//create a new class that inherit the full functionality of the parent model, while able to add custom methods to it 
class Company extends Model {};


Company.init({

    //columns
    name: DataTypes.STRING,
    logoUrl: DataTypes.STRING

},{
    sequelize, 
    modelName: "company",

});

module.exports = Company;