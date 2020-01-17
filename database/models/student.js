const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  GPA: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: { min: 0, max: 4 }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    notEmpty: true,
    defaultValue: ""
  }
});

module.exports = Student;
