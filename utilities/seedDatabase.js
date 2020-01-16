const { Student, Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      GPA: "123",
      email: "qdwqdq",
      image: ""
    }),
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      GPA: "1234",
      email: "qdwqdq",
      image: ""
    }),
    Campus.create({
      name: "LeBron",
      address: "qdwqd",
      description: "adwdqwd",
      image: "qqqq"
    }),
    Campus.create({
      name: "LeBron",
      address: "qdwqdasdsad",
      description: "adwdqwd",
      image: "qqqq"
    })
  ]);
};

module.exports = seedDatabase;
