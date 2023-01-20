const {Sequelize} = require("sequelize");
require("dotenv").config();
const {DATABASE_URL} = process.env;

const db = new Sequelize(
    DATABASE_URL,
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = db;

// code in database will generally be the same every time