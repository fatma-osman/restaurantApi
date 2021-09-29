//import other files
const sequelize = require("./database");
const Company = require("./company");
const Menu = require("./menu");
const Location = require("./location");

//function to setup database 

async function setupDb() {
    Company.hasMany(Location);
    Location.belongsTo(Company);
//syncs the database up
    await sequelize.sync();

}

module.exports = setupDb;