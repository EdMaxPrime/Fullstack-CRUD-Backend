const { Student, Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Hunter College",
      address: "695 Park Ave, New York, NY 10065",
      description:
        "CUNY—Hunter College is a public institution that was founded in 1870. It has a total undergraduate enrollment of 16,249, and the setting is Urban. CUNY—Hunter College's ranking in the 2020 edition of Best Colleges is Regional Universities North, 23.",
      image:
        "https://pbs.twimg.com/profile_images/378800000830024561/204a2bf82862c56c42db4da287d40712_400x400.jpeg"
    }),
    Campus.create({
      name: "City College",
      address: "160 Convent Ave, New York, NY 10031",
      description:
        "The City College of the City University of New York is a public senior college of the City University of New York (CUNY) system in New York City. It is the oldest of CUNY's 24 institutions of higher learning, and is considered its flagship college.",
      image:
        "https://user-content.givegab.com/uploads/group/logo/437243/28fb0d3dcca3031796e1a436e180ed50ee167d41.png"
    }),
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      GPA: 2.2,
      email: "xshi603@gmail.com",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      campusId: 1
    }),
    Student.create({
      firstName: "John",
      lastName: "Doe",
      GPA: 4.0,
      email: "gammastunt@gmail.com",
      image:
        "http://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
      campusId: 1
    })
  ]);
};

module.exports = seedDatabase;
