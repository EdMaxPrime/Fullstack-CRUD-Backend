const { Student, Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      GPA: "123",
      email: "xshi603@gmail.com",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }),
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      GPA: "1234",
      email: "gammastunt@gmail.com",
      image:
        "http://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
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
