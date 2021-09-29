//locations: 
//name: string
//capacity: integer
//manager: string

//table in our database - establish connection to database (import sequelize here)
const sequelize = require("./database");

//imports sequelize
const { DataTypes, Model } = require("sequelize");

//create a new class that inherit the full functionality of the parent model, while able to add custom methods to it 
class Location extends Model {}


Location.init({

    //columns
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    manager: DataTypes.STRING

},{
    sequelize, 
    modelName: "location",

});

module.exports = Location;