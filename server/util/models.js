const db = require("./database");
const {DataTypes} = require("sequelize");

module.exports = {
    Base: db.define("base", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    }),

    Extra: db.define("extra", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: DataTypes.STRING,
    })
};