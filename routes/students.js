const express = require("express");
const router = express.Router();
const { Student } = require("../database/models");

router.put("/add", function(req, res, next) {
  let jsonified = req.body;
  Student.create({
    firstName: jsonified.firstName,
    lastName: jsonified.lastName,
    GPA: jsonified.GPA,
    email: jsonified.email,
    image: jsonified.image,
    campusId: jsonified.campusId
  })
    .then(obj => res.send(obj))
    .catch(err => {
      //res.send(err.errors[0].message);
      res.send("This email is not valid, please enter a valid one");
      res.status(501);
    });
});

router.post("/edit", function(req, res, next) {
  let jsonified = req.body;
  Student.update(
    {
      firstName: jsonified.firstName,
      lastName: jsonified.lastName,
      GPA: jsonified.GPA,
      email: jsonified.email,
      image: jsonified.image,
      campusId: jsonified.campusId
    },
    {
      where: {
        id: jsonified.id
      }
    }
  )
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
});

router.delete("/delete", function(req, res, next) {
  Student.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(obj => res.send(obj))
    .catch(err => res.send(err));
  res.send("Deleted");
});

router.get("/", function(req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err));
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
