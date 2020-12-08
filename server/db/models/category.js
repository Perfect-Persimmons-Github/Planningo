const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.ENUM ("yellow", "blue", "green", "pink", "orange", "red", "gray"),
    defaultValue: "gray"
  }
});

module.exports = Category;