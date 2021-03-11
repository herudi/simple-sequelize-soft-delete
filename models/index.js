const path = require("path");
const fs = require("fs");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require('./../database/config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = {};
fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== path.basename(__filename) &&
            file.slice(-3) === '.js'
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file)).init(
            sequelize,
            Sequelize.DataTypes
        );
        models[model.name] = model;
    });

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
  ...models,
  Sequelize,
  sequelize
};

module.exports = db;
