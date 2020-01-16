// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;
const Student = require("./student");
const Campus = require("./campus");

Campus.hasMany(Student); // A one-to-many relationship that adds the column titled "teamId" to the table of players;
Student.belongsTo(Campus); // A one-to-one relationship that adds the column titled "teamId" to the table of players;

module.exports = {
  Student,
  Campus
};
