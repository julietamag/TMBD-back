const Sequelize = require("sequelize");

const db = new Sequelize(
  'tmbd',
  'julietamagnago',
  'w6UtkTwW8D8fmocB0kGiLmcKqHEXB7Cv',
  {
    host: 'dpg-cg0u91g2qv2bforpadvg-a',
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = db;
