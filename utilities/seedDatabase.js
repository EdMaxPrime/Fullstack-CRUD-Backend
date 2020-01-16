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
    Campus.create({
      name: "LeBron",
      address: "qdwqd",
      description: "adwdqwd",
      image: "qqqq"
    })
  ]);
};

module.exports = seedDatabase;
